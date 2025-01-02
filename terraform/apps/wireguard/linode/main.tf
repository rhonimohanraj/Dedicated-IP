data "template_file" "script" {
  template = "${file("${path.module}/setup.sh")}"

  vars = {
    domain_name                 = var.domain_name
    ssl_email                   = var.ssl_email
    admin_panel_username        = var.admin_panel_username
    admin_panel_password        = var.admin_panel_password
    wireguard_ui_version        = var.wireguard_ui_version
    telegram_token              = var.telegram_token
    telegram_allow_conf_request = var.telegram_allow_conf_request
    sendgrid_api                = var.sendgrid_api
    email_from_address          = var.email_from_address
    email_from_name             = var.email_from_name
  }
}

resource "linode_stackscript" "cloudinit_stackscript" {
  script = data.template_file.script.rendered

  description = <<EOF
This StackScript setup server with WireGuard
EOF

  rev_note = "initial cloud-init script"

  images = [
    "linode/ubuntu24.10",
  ]

  is_public = false
  label     = "CloudInit"
}


data "linode_sshkey" "SSHKey" {
  label = var.ssh_key_name
}

# Create linode Cloud server
resource "linode_instance" "server" {
  label        = var.server_name
  image       = "linode/ubuntu24.10"
  
  type = lookup({
    "small"  = "g6-nanode-1",
    "medium" = "g6-standard-1",
    "large"  = "g6-standard-4",
  }, var.server_type, "cpx11")
  
  region    = var.server_location

  authorized_keys = [
    data.linode_sshkey.SSHKey.ssh_key,
  ]

  stackscript_id = linode_stackscript.cloudinit_stackscript.id
}