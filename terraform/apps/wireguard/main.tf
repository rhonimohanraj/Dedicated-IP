# Create Hetzner Cloud server
resource "hcloud_server" "server" {
  name        = var.server_name
  image       = "ubuntu-22.04"
  server_type = var.server_type
  location    = var.server_location

  ssh_keys = [var.ssh_key_name]

  user_data = templatefile("${path.module}/cloud-init.tpl", {
    domain_name          = var.domain_name
    ssl_email            = var.ssl_email
    admin_panel_username = var.admin_panel_username
    admin_panel_password = var.admin_panel_password
    wireguard_ui_version = var.wireguard_ui_version
  })
}