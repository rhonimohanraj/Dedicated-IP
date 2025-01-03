output "server_ip" {
  value = one([for network in arvan_abrak.server.networks : network if network.is_public == true]).ip
}