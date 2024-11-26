variable "cloudflare_api_token" {
  description = "Cloudflare API token"
  type        = string
}

variable "zone_id" {
  description = "dedicatedip.org zone id"
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