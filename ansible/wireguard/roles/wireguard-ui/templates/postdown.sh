#!/usr/bin/bash

# --- Function to get the default gateway interface ---
get_default_interface() {
  ip route show default | awk '/default/ {print $5}'
}

# --- WireGuard Interface Name ---
WG_INTERFACE="wg0"

# --- Get the default outgoing interface ---
OUT_INTERFACE=$(get_default_interface)

# --- WireGuard Network Subnet ---
WG_IPV4_SUBNET="10.252.1.0/24"

# --- Server's WireGuard IP Address ---
WG_SERVER_IP="10.252.1.1"

# --- ipset name ---
IPSET_NAME_IPV4="dedicated-ip-forward-ipv4"

# --- Fetch Port Forwarding Rules from API --- to remove hairpin
API_ENDPOINT="http://localhost:5000/internal/api/open-ports"
RULES=$(curl -s "$API_ENDPOINT")

# --- IPv4 Rule Removal ---

iptables -t nat -D POSTROUTING -s "$WG_IPV4_SUBNET" -o "$OUT_INTERFACE" -j MASQUERADE
iptables -D FORWARD -i "$WG_INTERFACE" -j ACCEPT
iptables -D INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -D FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# --- Process Port Forwarding Rules (IPv4) to remove hairpin ---
while read -r client_ip external_port internal_port protocol; do
    # Sanitize input
    client_ip=$(echo "$client_ip" | grep -E "^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$")
    external_port=$(echo "$external_port" | grep -E "^[0-9]+$")
    internal_port=$(echo "$internal_port" | grep -E "^[0-9]+$")
    protocol=$(echo "$protocol" | grep -E "^(tcp|udp)$")

    if [ -z "$client_ip" ] || [ -z "$external_port" ] || [ -z "$internal_port" ] || [ -z "$protocol" ]; then
      echo "Error: Invalid rule format from API. Skipping. Data: $client_ip $external_port $internal_port $protocol"
      continue
    fi

	# --- Remove Hairpin NAT rule
    sudo iptables -t nat -D POSTROUTING -s "$client_ip" -d "$client_ip" -p "$protocol" --dport "$internal_port" -j SNAT --to-source "$WG_SERVER_IP"

done < <(echo "$RULES" | jq -r '.[] | "\(.client_ip) \(.external_port) \(.internal_port) \(.protocol)"')

# --- Flush and Destroy ipset ---
sudo ipset flush "$IPSET_NAME_IPV4" || true
sudo ipset destroy "$IPSET_NAME_IPV4" || true

exit 0