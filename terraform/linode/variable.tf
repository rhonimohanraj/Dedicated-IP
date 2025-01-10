variable "linode_token" {
  description = "linode Cloud API token"
  type        = string
}

variable "server_name" {
  description = "Name of the linode server"
  type        = string
  default     = "wireguard-server"
}

variable "domain_name" {
  description = "Domain name for accessing WireGuard UI"
  type        = string
}

variable "ssl_email" {
  description = "Email for generate https certificate"
  type        = string
}

variable "server_type" {
  description = "linode server type"
  type        = string
  default     = "small"
}

variable "server_location" {
  description = "linode server location"
  type        = string
  default     = "ca-central"
}

variable "ssh_key_name" {
  description = "SSH key name"
  type        = string
  default     = "Production"
}

variable "gcp_region" {
  description = "The region to deploy resources in"
  default     = "europe-west4"
}

variable "gcp_project_id" {
  description = "The ID of your Google Cloud project"
}

variable "gcp_credentials_path" {
  description = "The path to your Google Cloud service account credentials JSON file"
  default     = "./gcp_credentials.json"
}
