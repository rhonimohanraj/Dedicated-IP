#!/usr/bin/bash

# --- Function to get the default gateway interface ---
get_default_interface() {
  ip route show default | awk '/default/ {print $5}'
}

# --- WireGuard Interface Name ---
WG_INTERFACE="wg0"

# --- Get the default outgoing interface ---
OUT_INTERFACE=$(get_default_interface)

# --- API Endpoint ---
API_ENDPOINT="http://localhost:5000/internal/api/open-ports"

# --- WireGuard Network Subnet ---
WG_IPV4_SUBNET="10.8.0.0/24"  # Replace with your actual IPv4 subnet

# --- ipset name ---
IPSET_NAME_IPV4="dedicated-ip-forward-ipv4"

# --- Create ipset set (if it doesn't exist) ---
ipset list "$IPSET_NAME_IPV4" >/dev/null 2>&1 || ipset create "$IPSET_NAME_IPV4" hash:ip,port family inet

# --- Basic VPN Setup (IPv4) ---

# Enable IPv4 forwarding (if not already enabled)
if [ $(cat /proc/sys/net/ipv4/ip_forward) -ne 1 ]; then
    echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
fi

iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -t nat -A POSTROUTING -s "$WG_IPV4_SUBNET" -o "$OUT_INTERFACE" -j MASQUERADE
iptables -A FORWARD -i "$WG_INTERFACE" -j ACCEPT

# --- Fetch Port Forwarding Rules from API ---
RULES=$(curl -s "$API_ENDPOINT")

# --- Check if the API call was successful ---
if [ -z "$RULES" ]; then
  echo "Error: Failed to fetch port forwarding rules from API."
  exit 1
fi

# --- Process Port Forwarding Rules (IPv4) ---
while read -r client_ip external_port internal_port protocol; do
    # Sanitize input (basic example - more robust validation is needed!)
    client_ip=$(echo "$client_ip" | grep -E "^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$")
    external_port=$(echo "$external_port" | grep -E "^[0-9]+$")
    internal_port=$(echo "$internal_port" | grep -E "^[0-9]+$")
    protocol=$(echo "$protocol" | grep -E "^(tcp|udp)$")

    if [ -z "$client_ip" ] || [ -z "$external_port" ] || [ -z "$internal_port" ] || [ -z "$protocol" ]; then
      echo "Error: Invalid rule format from API. Skipping. Data: $client_ip $external_port $internal_port $protocol"
      continue
    fi

    # Check if the external_port is already in use for a different client_ip
    if [[ $(ipset list "$IPSET_NAME_IPV4" | grep ":$external_port" | grep -v "^$client_ip,") ]]; then
      echo "Warning: External port $external_port is already in use by another client. Skipping."
      continue
    fi

    # Add to ipset
    sudo ipset add "$IPSET_NAME_IPV4" "$client_ip,$internal_port"

    # Add iptables rules
    sudo iptables -t nat -A PREROUTING -p "$protocol" --dport "$external_port" -j DNAT --to-destination "$client_ip:$internal_port"
    sudo iptables -A FORWARD -p "$protocol" -d "$client_ip" --dport "$internal_port" -m set --match-set "$IPSET_NAME_IPV4" dst -j ACCEPT

done < <(echo "$RULES" | jq -r '.[] | "\(.client_ip) \(.external_port) \(.internal_port) \(.protocol)"')

exit 0