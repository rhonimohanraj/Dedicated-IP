variable "cloudflare_api_token" {
  description = "Cloudflare API token"
  type        = string
}

variable "zone_id" {
  description = "Zone Id"
  type        = string
}

variable "record_name" {
  description = "Record name"
  type        = string
}

variable "record_value" {
  description = "Record value"
  type        = string
}

variable "gcp_region" {
  description = "The region to deploy resources in"
  default = "europe-west4"
}

variable "gcp_project_id" {
  description = "The ID of your Google Cloud project"
}

variable "gcp_credentials_path" {
  description = "The path to your Google Cloud service account credentials JSON file"
  default = "./gcp_credentials.json"
}