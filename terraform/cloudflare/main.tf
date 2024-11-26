resource "cloudflare_record" "record" {
  zone_id = var.zone_id
  name    = var.record_name
  value   = var.record_value
  type    = "A"
  ttl     = 3600
}