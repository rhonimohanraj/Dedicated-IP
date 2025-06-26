# Ansible Configuration

This directory contains Ansible playbooks and roles for automating the deployment and configuration of various components of the system.

## Overview

The Ansible configuration is divided into two main parts:

1. **Panel Update Configuration**: Automates the process of updating the admin panel.
2. **WireGuard Configuration**: Automates the setup and configuration of WireGuard VPN servers.

## Directory Structure

```
ansible/
├── update-panel/           # Panel update automation
│   ├── inventory.ini       # Host inventory for panel servers
│   ├── playbook.yml        # Main playbook for panel updates
│   ├── roles/              # Roles used in the panel update process
│   └── vars/               # Variables for panel update configuration
│
└── wireguard/              # WireGuard VPN automation
    ├── inventory.ini       # Host inventory for WireGuard servers
    ├── playbook.yml        # Main playbook for WireGuard setup
    ├── roles/              # Roles used in the WireGuard setup process
    └── vars/               # Variables for WireGuard configuration
```

## Prerequisites

- Ansible 2.9 or higher
- SSH access to target servers
- Proper inventory configuration

## Usage

### Panel Update

To update the panel on the configured servers:

```bash
cd ansible/update-panel
ansible-playbook -i inventory.ini playbook.yml
```

### WireGuard Setup

To set up or update WireGuard VPN on the configured servers:

```bash
cd ansible/wireguard
ansible-playbook -i inventory.ini playbook.yml
```

## Customization

### Inventory Configuration

Edit the `inventory.ini` files to specify the target servers for each playbook.

Example:
```ini
[panel_servers]
panel1.example.com
panel2.example.com

[wireguard_servers]
vpn1.example.com
vpn2.example.com
```

### Variable Configuration

Edit the files in the `vars` directories to customize the deployment according to your needs.

## Roles

### Panel Update Roles

The `update-panel/roles` directory contains roles for:
- Pulling the latest panel code
- Installing dependencies
- Configuring the panel
- Restarting services

### WireGuard Roles

The `wireguard/roles` directory contains roles for:
- Installing WireGuard
- Configuring WireGuard interfaces
- Setting up firewall rules
- Managing client configurations

## Troubleshooting

If you encounter issues during playbook execution:

1. Check the Ansible output for specific error messages
2. Verify SSH connectivity to the target servers
3. Ensure the inventory files are correctly configured
4. Check that all required variables are properly set

## Contributing

When adding new roles or modifying existing ones, please follow these guidelines:
- Use descriptive names for tasks and variables
- Include comments for complex tasks
- Test changes thoroughly before committing
