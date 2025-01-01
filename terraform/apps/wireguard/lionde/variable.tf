variable "lionde_token" {
  description = "Lionde Cloud API token"
  type        = string
}

variable "server_name" {
  description = "Name of the Lionde server"
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

variable "admin_panel_username" {
  description = "Admin panel username"
  type        = string
  default     = "admin"
}

variable "admin_panel_password" {
  description = "Admin panel password"
  type        = string
  default     = "nimda"
}

variable "server_type" {
  description = "Lionde server type"
  type        = string
  default     = "small"
}

variable "server_location" {
  description = "Lionde server location"
  type        = string
  default     = "ca-central"
}

variable "ssh_key_name" {
  description = "SSH key name"
  type        = string
  default     = "Production"
}

variable "wireguard_ui_version" {
  description = "WireGuard UI version"
  type        = string
  default     = "0.6.2"
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

variable "telegram_token" {
  description = "value of the telegram token"
}

variable "telegram_allow_conf_request" {
  description = "value of the telegram allow conf request"
  default     = "false"
}

variable "sendgrid_api" {
  description = "value of the sendgrid api"
}

variable "email_from_address" {
  description = "value of the EMAIL_FROM_ADDRESS"
}

variable "email_from_name" {
  description = "value of the EMAIL_FROM_NAME"
}