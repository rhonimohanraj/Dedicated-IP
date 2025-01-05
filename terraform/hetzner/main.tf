# Create Hetzner Cloud server
resource "hcloud_server" "server" {
  name        = var.server_name
  image       = "ubuntu-22.04"
  server_type = lookup({
    "small"  = "cpx11",
    "medium" = "cpx21",
    "large"  = "cpx31",
  }, var.server_type, "cpx11")
  location    = var.server_location

  ssh_keys = [var.ssh_key_name]
}