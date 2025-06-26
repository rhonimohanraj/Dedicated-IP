# Firebase Cloud Functions

This directory contains the serverless backend functions that power the application's server-side logic.

## Overview

The Firebase Cloud Functions in this project provide:
- API endpoints for the client applications
- Background processing and automation
- Integration with third-party services
- Event-driven triggers for database changes
- Webhook handlers for external service integration

## Directory Structure

```
functions/
├── firebase.json         # Firebase configuration
├── package.json          # Root package.json for Firebase deployment
├── package-lock.json     # Dependency lock file
└── functions/            # Functions source code
    ├── src/              # TypeScript source files
    │   ├── config/       # Configuration files
    │   ├── dto/          # Data Transfer Objects
    │   ├── endpoints/    # HTTP API endpoints
    │   ├── services/     # Service layer implementations
    │   ├── triggers/     # Database and event triggers
    │   ├── utils/        # Utility functions
    │   ├── webhooks/     # Webhook handlers
    │   └── index.ts      # Main entry point
    ├── package.json      # Functions dependencies
    ├── package-lock.json # Functions dependency lock file
    ├── tsconfig.json     # TypeScript configuration
    └── tsconfig.dev.json # Development TypeScript configuration
```

## Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase project with Blaze plan (required for external API calls)

## Setup Instructions

1. **Install dependencies**

```bash
cd functions/functions
npm install
```

2. **Set up Firebase CLI**

```bash
firebase login
```

3. **Configure environment variables**

Create a `.env` file in the `functions/functions` directory with the necessary environment variables:

```
# Example .env file
API_KEY=your_api_key
DATABASE_URL=your_database_url
```

Alternatively, set environment variables using Firebase CLI:

```bash
firebase functions:config:set api.key="your_api_key" database.url="your_database_url"
```

## Local Development

1. **Start the emulator**

```bash
firebase emulators:start
```

2. **Run TypeScript in watch mode**

```bash
cd functions
npm run build:watch
```

## Deployment

Deploy all functions:

```bash
firebase deploy --only functions
```

Deploy specific functions:

```bash
firebase deploy --only functions:functionName1,functions:functionName2
```

## Available Functions

### HTTP Endpoints

- **API Endpoints**: REST API endpoints for client applications
- **Webhook Receivers**: Endpoints that receive webhooks from external services

### Database Triggers

- **Document Creation/Update/Delete**: Functions triggered by Firestore document changes
- **Realtime Database Changes**: Functions triggered by Realtime Database changes

### Authentication Triggers

- **User Creation/Deletion**: Functions triggered by user account changes

### Scheduled Functions

- **Periodic Tasks**: Functions that run on a schedule

## Testing

```bash
cd functions
npm test
```

## Monitoring and Debugging

- View function logs in the Firebase Console
- Use Firebase Debug Logs for detailed debugging:

```bash
firebase functions:log
```

## Best Practices

1. **Security**: Always validate authentication and authorization in HTTP functions
2. **Error Handling**: Implement proper error handling and logging
3. **Performance**: Keep cold start times low by minimizing dependencies
4. **Cost Management**: Be mindful of function execution time and frequency

## Troubleshooting

### Common Issues

1. **Deployment Failures**
   - Check for TypeScript errors: `npm run build`
   - Verify Firebase project configuration

2. **Function Execution Errors**
   - Check function logs in Firebase Console
   - Verify environment variables are set correctly

3. **Cold Start Performance Issues**
   - Minimize dependencies
   - Use lazy loading for heavy modules
