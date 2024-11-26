terraform {
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
  }
  backend "gcs" {}
}

provider "hcloud" {
  token = var.hcloud_token
}

provider "google" {
  region      = var.gcp_region
  project     = var.gcp_project_id
  credentials = file(var.gcp_credentials_path)
}