output "server_ip" {
  value = hcloud_server.wireguard_server.ipv4_address
}