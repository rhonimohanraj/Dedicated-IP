output "server_ip" {
  value = one(linode_instance.server.ipv4)
}