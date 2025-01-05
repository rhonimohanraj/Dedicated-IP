data "linode_sshkey" "SSHKey" {
  label = var.ssh_key_name
}

# Create linode Cloud server
resource "linode_instance" "server" {
  label        = var.server_name
  image       = "linode/ubuntu22.04"
  
  type = lookup({
    "small"  = "g6-nanode-1",
    "medium" = "g6-standard-1",
    "large"  = "g6-standard-4",
  }, var.server_type, "cpx11")
  
  region    = var.server_location

  authorized_keys = [
    data.linode_sshkey.SSHKey.ssh_key,
  ]
}