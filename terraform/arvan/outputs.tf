output "server_ip" {
  value = one([for network in arvan_abrak.server.networks : network if network.is_public == true]).ip
}

resource "local_file" "cloud-init" {
  content = data.template_file.script.rendered
  filename = "${path.module}/cloud-init.rendered.yml"
}