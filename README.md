# Project Overview

This repository contains a comprehensive multi-component system that includes:

## Components

### 1. App
A cross-platform Flutter application with support for:
- Android
- iOS
- macOS
- Linux
- Windows
- Web

The app appears to include WireGuard VPN functionality based on the directory structure.

### 2. Panel
A web-based administration panel with:
- Custom UI components
- Database integration
- Email functionality
- API handlers
- Templates

### 3. Functions
Serverless functions that likely support the app and panel operations.

### 4. Terraform
Infrastructure as Code (IaC) configurations for multiple cloud providers:
- Arvan
- Cloudflare
- Hetzner
- Linode

### 5. Ansible
Configuration management and automation for:
- Panel updates
- WireGuard configuration

### 6. Web
Web applications including a dashboard interface.

## Getting Started

Each component has its own README with detailed setup and usage instructions. Please refer to:

- [App Documentation](app/README.md)
- [Panel Documentation](panel/README.md)
- [Functions Documentation](functions/README.md)
- [Terraform Documentation](terraform/README.md)
- [Ansible Documentation](ansible/README.md)
- [Web Documentation](web/README.md)

## Project Structure

```
.
├── ansible/            # Configuration management
├── app/                # Flutter application
├── functions/          # Serverless functions
├── panel/              # Admin panel
├── terraform/          # Infrastructure as Code
├── web/                # Web applications
└── price.json          # Pricing configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

[Contribution guidelines]
