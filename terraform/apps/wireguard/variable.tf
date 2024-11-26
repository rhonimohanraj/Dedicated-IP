variable "hcloud_token" {
  description = "Hetzner Cloud API token"
  type        = string
}

variable "ssh_public_key_file" {
  description = "Path to your SSH public key file"
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}

variable "server_name" {
  description = "Name of the Hetzner server"
  type        = string
  default     = "wireguard-server"
}

variable "domain_name" {
  description = "Domain name for accessing WireGuard UI"
  type        = string
}

variable "email" {
  description = "Email for generate https certificate"
  type        = string
}