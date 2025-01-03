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

data "arvan_plans" "plans" {
  region = var.server_location
}


data "arvan_images" "images" {
  region = var.server_location
  image_type = "distributions"
}

data "arvan_networks" "network" {
  region = var.server_location
}

locals {
  chosen_image = try(
    [for image in data.arvan_images.images.distributions : image
    if image.distro_name == "ubuntu" && image.name == "22.04"],
    []
  )

  network_list = tolist(data.arvan_networks.network.networks)

    chosen_network = try(
    [for network in local.network_list : network
    if network.name == "Default network"],
    []
  )
}

resource "arvan_security_group" "security_group" {
  region      = var.server_location
  description = "created security group"
  name        = "security_group"
  rules = [
    {
      direction = "ingress"
      protocol  = "icmp"
    },
    {
      direction = "ingress"
      protocol  = "udp"
    },
    {
      direction = "ingress"
      protocol  = "tcp"
    },
    {
      direction = "egress"
      protocol  = ""
    }
  ]
}

resource "arvan_network" "private_network" {
  region      = var.server_location
  description = "created private network"
  name        = "private_network"
  dhcp_range = {
    start = "10.255.255.19"
    end   = "10.255.255.150"
  }
  dns_servers    = ["8.8.8.8", "1.1.1.1"]
  enable_dhcp    = true
  enable_gateway = true
  cidr           = "10.255.255.0/24"
  gateway_ip     = "10.255.255.1"
}


resource "arvan_abrak" "server" {
  depends_on = [arvan_network.private_network, arvan_security_group.security_group]
  timeouts {
    create = "1h30m"
    update = "2h"
    delete = "20m"
    read   = "10m"
  }
  region          = var.server_location
  name            = var.server_name
  image_id        = local.chosen_image[0].id
  flavor_id       = lookup({
    "small"  = "eco-1-1-0",
    "medium" = "eco-2-1-0",
    "large"  = "eco-3-1-0",
  }, var.server_type, "eco-1-1-0")
  disk_size       = 25
  networks = [
    {
      network_id = local.chosen_network[0].network_id
    },
    {
      network_id = arvan_network.private_network.network_id
    }
  ]
  security_groups = [arvan_security_group.security_group.id]
}