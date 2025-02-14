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

# --- ipset name ---
IPSET_NAME_IPV4="dedicated-ip-forward-ipv4"

# --- IPv4 Rule Removal ---

iptables -t nat -D POSTROUTING -s "$WG_IPV4_SUBNET" -o "$OUT_INTERFACE" -j MASQUERADE
iptables -D FORWARD -i "$WG_INTERFACE" -j ACCEPT
iptables -D INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -D FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# --- Flush and Destroy ipset ---
sudo ipset flush "$IPSET_NAME_IPV4" || true
sudo ipset destroy "$IPSET_NAME_IPV4" || true

exit 0