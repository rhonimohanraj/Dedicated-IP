# Web Dashboard

This directory contains a web-based dashboard application built with Nx monorepo architecture for managing the WireGuard VPN service.

## Overview

The Web Dashboard provides a user-friendly interface for:
- Managing WireGuard VPN servers and clients
- Monitoring connection status and statistics
- User account management
- Service configuration

## Directory Structure

```
web/
├── apps/                  # Applications
│   └── dashboard/         # Main dashboard application
├── libs/                  # Shared libraries
│   └── services/          # Shared services
├── firebase.json          # Firebase configuration
├── jest.config.ts         # Jest testing configuration
├── nx.json                # Nx workspace configuration
├── package.json           # Node.js dependencies
├── package-lock.json      # Dependency lock file
├── tsconfig.base.json     # Base TypeScript configuration
└── eslint.config.js       # ESLint configuration
```

## Technology Stack

- **Framework**: Angular
- **Build System**: Nx
- **State Management**: NgRx
- **UI Components**: Angular Material
- **Testing**: Jest
- **Deployment**: Firebase Hosting

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- Angular CLI (optional, but recommended)

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd web
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create environment files for development and production:

```bash
# For development
cp apps/dashboard/src/environments/environment.example.ts apps/dashboard/src/environments/environment.ts

# For production
cp apps/dashboard/src/environments/environment.example.ts apps/dashboard/src/environments/environment.prod.ts
```

Edit the environment files to include your API endpoints and other configuration.

## Development

### Start the development server

```bash
npx nx serve dashboard
```

This will start a development server at http://localhost:4200.

### Generate new components

```bash
# Generate a new component
npx nx g @nx/angular:component my-component --project=dashboard

# Generate a new service in the shared services library
npx nx g @nx/angular:service my-service --project=services
```

### Run tests

```bash
# Run tests for the dashboard
npx nx test dashboard

# Run tests for the services library
npx nx test services

# Run e2e tests
npx nx e2e dashboard-e2e
```

## Building for Production

```bash
npx nx build dashboard --configuration=production
```

The build artifacts will be stored in the `dist/apps/dashboard` directory.

## Deployment

### Deploy to Firebase Hosting

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not already done)
firebase init hosting

# Deploy to Firebase
npx nx build dashboard --configuration=production
firebase deploy --only hosting
```

## Project Structure Best Practices

1. **Feature-based organization**: Group related components, services, and models into feature modules
2. **Smart/Dumb component pattern**: Separate container (smart) components from presentational (dumb) components
3. **Lazy loading**: Use lazy loading for feature modules to improve initial load time
4. **State management**: Use NgRx for complex state management needs

## Troubleshooting

### Common Issues

1. **Build failures**
   - Ensure all dependencies are installed: `npm install`
   - Clear Nx cache: `npx nx reset`

2. **Testing issues**
   - Make sure Jest is properly configured
   - Check for environment-specific code that might fail in tests

3. **Deployment issues**
   - Verify Firebase configuration
   - Check build output for errors

## Contributing

1. Follow the Angular style guide
2. Write tests for new features
3. Use the Nx generators to create new components and services
4. Run linting before committing: `npx nx lint`
