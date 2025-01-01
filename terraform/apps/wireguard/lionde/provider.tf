terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
    }
  }
  // backend "gcs" {}
}

provider "linode" {
  token = var.lionde_token
}

provider "google" {
  region      = var.gcp_region
  project     = var.gcp_project_id
  credentials = file(var.gcp_credentials_path)
}