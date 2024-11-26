# Create Hetzner Cloud server
resource "hcloud_server" "wireguard_server" {
  name        = var.server_name
  image       = "ubuntu-22.04"
  server_type = "cx22"  # Adjust as needed
  location    = "nbg1"  # Nuremberg location

  ssh_keys = ["ayarmoradi@outlook.com"]

  user_data = templatefile("${path.module}/cloud-init.tpl", {
    domain_name = var.domain_name
    email       = var.email
  })
}