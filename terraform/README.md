# Terraform Infrastructure as Code

This directory contains Terraform configurations for provisioning and managing the infrastructure required for the WireGuard VPN service across multiple cloud providers.

## Overview

The Terraform configurations in this project allow you to:
- Provision virtual machines for WireGuard VPN servers
- Configure networking and security groups
- Set up DNS records
- Manage cloud resources consistently across different providers

## Supported Cloud Providers

- **Arvan**: Iranian cloud provider
- **Cloudflare**: DNS and security services
- **Hetzner**: European cloud provider
- **Linode**: Global cloud provider

## Directory Structure

```
terraform/
├── arvan/           # Arvan Cloud configuration
│   ├── main.tf      # Main configuration
│   ├── outputs.tf   # Output definitions
│   ├── provider.tf  # Provider configuration
│   └── variable.tf  # Variable definitions
│
├── cloudflare/      # Cloudflare configuration
│   ├── main.tf      # Main configuration
│   ├── outputs.tf   # Output definitions
│   ├── provider.tf  # Provider configuration
│   └── variable.tf  # Variable definitions
│
├── hetzner/         # Hetzner Cloud configuration
│   ├── main.tf      # Main configuration
│   ├── outputs.tf   # Output definitions
│   ├── provider.tf  # Provider configuration
│   └── variable.tf  # Variable definitions
│
└── linode/          # Linode configuration
    ├── main.tf      # Main configuration
    ├── outputs.tf   # Output definitions
    ├── provider.tf  # Provider configuration
    └── variable.tf  # Variable definitions
```

## Prerequisites

- Terraform CLI (v1.0.0+)
- Access credentials for the cloud providers you intend to use
- Basic understanding of Terraform and the respective cloud providers

## Setup Instructions

### General Setup

1. **Install Terraform**

Follow the [official installation guide](https://learn.hashicorp.com/tutorials/terraform/install-cli) to install Terraform on your system.

2. **Clone the repository**

```bash
git clone <repository-url>
cd terraform
```

3. **Initialize Terraform**

```bash
cd <provider-directory>  # e.g., cd hetzner
terraform init
```

### Provider-Specific Setup

#### Arvan

1. **Configure Arvan credentials**

Create a `terraform.tfvars` file in the arvan directory:

```hcl
arvan_api_key = "your-api-key"
```

2. **Apply the configuration**

```bash
terraform plan
terraform apply
```

#### Cloudflare

1. **Configure Cloudflare credentials**

Create a `terraform.tfvars` file in the cloudflare directory:

```hcl
cloudflare_api_token = "your-api-token"
cloudflare_zone_id = "your-zone-id"
```

2. **Apply the configuration**

```bash
terraform plan
terraform apply
```

#### Hetzner

1. **Configure Hetzner credentials**

Create a `terraform.tfvars` file in the hetzner directory:

```hcl
hetzner_token = "your-api-token"
```

2. **Apply the configuration**

```bash
terraform plan
terraform apply
```

#### Linode

1. **Configure Linode credentials**

Create a `terraform.tfvars` file in the linode directory:

```hcl
linode_token = "your-api-token"
```

2. **Apply the configuration**

```bash
terraform plan
terraform apply
```

## Usage Examples

### Creating a WireGuard Server on Hetzner

```bash
cd hetzner
terraform init
terraform plan -var="server_name=wireguard-vpn" -var="server_location=nbg1"
terraform apply -var="server_name=wireguard-vpn" -var="server_location=nbg1"
```

### Setting up DNS Records on Cloudflare

```bash
cd cloudflare
terraform init
terraform plan -var="domain=example.com" -var="subdomain=vpn"
terraform apply -var="domain=example.com" -var="subdomain=vpn"
```

## Customization

Each provider directory contains a `variable.tf` file that defines the variables you can customize. You can set these variables in several ways:

1. **Command line flags**: `terraform apply -var="variable_name=value"`
2. **Environment variables**: `TF_VAR_variable_name=value terraform apply`
3. **Variable files**: Create a `terraform.tfvars` file with your variable values

## Outputs

After applying the Terraform configurations, you'll get outputs such as:
- Server IP addresses
- DNS records
- Access credentials

You can view these outputs with:

```bash
terraform output
```

## Destroying Infrastructure

To tear down the infrastructure created by Terraform:

```bash
terraform destroy
```

## Best Practices

1. **State Management**: Consider using remote state storage for team collaboration
2. **Secret Management**: Never commit sensitive information like API keys to version control
3. **Modularization**: Use modules for reusable components
4. **Documentation**: Keep documentation up-to-date with infrastructure changes

## Troubleshooting

### Common Issues

1. **Authentication Failures**
   - Verify your API tokens and credentials
   - Check that your tokens have the necessary permissions

2. **Resource Creation Failures**
   - Check quotas and limits on your cloud provider account
   - Verify that the requested resources (e.g., VM sizes) are available in the selected region

3. **Terraform State Issues**
   - If the state gets corrupted, use `terraform state` commands to fix it
   - Consider using remote state with locking for team environments
