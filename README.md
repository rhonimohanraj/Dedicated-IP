# Dedicated-IP: Secure, Private, and Reliable VPN Service

## About Dedicated-IP

Dedicated-IP is a comprehensive VPN service that provides users with their own dedicated IP addresses, offering enhanced security, privacy, and reliability compared to traditional shared-IP VPN solutions. Our service is built on WireGuard® technology, delivering faster speeds and stronger encryption while maintaining simplicity and ease of use.

Visit our website at [dedicated-ip.net](https://dedicated-ip.net) to learn more and sign up for our services.

## Why Choose Dedicated-IP?

### Exclusive IP Addresses
Unlike most VPN services that share IP addresses among multiple users, Dedicated-IP provides each user with their own exclusive IP address, reducing the risk of IP blacklisting and improving access to geo-restricted content.

### Enhanced Security
- Military-grade encryption using WireGuard® protocol
- No IP address sharing, reducing security vulnerabilities
- Protection against tracking and surveillance

### Global Server Network
- Servers in multiple countries and regions
- Strategic server locations for optimal performance
- Redundant infrastructure for high availability

### Cross-Platform Support
Our applications work seamlessly across all major platforms:
- Android and iOS for mobile devices
- Windows, macOS, and Linux for desktop computers
- Web interface for quick access without installation

### User-Friendly Experience
- Intuitive interfaces designed for both beginners and advanced users
- One-click connection to your dedicated IP
- Detailed connection statistics and monitoring

## Repository Components

This repository contains all the code and infrastructure configurations needed to run the Dedicated-IP service:

### 1. App
A cross-platform Flutter application that serves as the main client for end-users:
- Android, iOS, macOS, Linux, Windows, and Web support
- WireGuard® VPN integration for secure connections
- User authentication and account management
- Server selection and connection management
- Network statistics and monitoring

### 2. Panel
A comprehensive administration panel for managing the service:
- User management and subscription tracking
- Server deployment and configuration
- Payment processing and billing
- Analytics and reporting
- Customer support tools

### 3. Functions
Serverless functions that power the backend operations:
- Authentication and authorization
- Payment processing
- Server provisioning
- Usage analytics
- Notification services

### 4. Terraform
Infrastructure as Code (IaC) configurations for deploying and managing our cloud infrastructure across multiple providers:
- Arvan
- Cloudflare
- Hetzner
- Linode

### 5. Ansible
Automation scripts for configuration management:
- Panel deployment and updates
- WireGuard server configuration and management
- Security hardening
- Monitoring setup

### 6. Web
Web applications including:
- User dashboard for account management
- Subscription and payment portal
- Server status and network information
- Help and support resources

## Technical Architecture

Dedicated-IP uses a modern, scalable architecture:

- **Frontend**: Flutter for cross-platform applications, React for web interfaces
- **Backend**: Node.js serverless functions
- **Infrastructure**: Multi-cloud deployment using Terraform
- **Configuration Management**: Ansible for automated server setup
- **VPN Technology**: WireGuard® for fast, secure connections
- **Authentication**: Firebase Authentication
- **Payments**: Stripe integration

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
├── ansible/            # Configuration management and automation
├── app/                # Cross-platform Flutter application
├── functions/          # Serverless backend functions
├── panel/              # Administration panel
├── terraform/          # Infrastructure as Code configurations
├── web/                # Web applications and dashboard
└── price.json          # Pricing configuration
```

## Development

### Prerequisites
- Flutter SDK
- Node.js and npm
- Firebase CLI
- Terraform
- Ansible

### Setup Instructions
1. Clone this repository
2. Follow the setup instructions in each component's README
3. For local development, use the development environment configurations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to the Dedicated-IP project! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## Support

For support, please contact us at support@dedicated-ip.net or visit our [Help Center](https://dedicated-ip.net/help).

---

*WireGuard is a registered trademark of Jason A. Donenfeld.*
