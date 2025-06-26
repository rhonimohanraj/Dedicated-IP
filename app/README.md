# WireGuard VPN Client Application

A cross-platform Flutter application for managing WireGuard VPN connections.

## Overview

This application provides a user-friendly interface for:
- Managing WireGuard VPN connections
- Viewing connection status and statistics
- Configuring VPN settings
- User authentication and profile management

## Supported Platforms

- Android
- iOS
- macOS
- Linux
- Windows
- Web

## Directory Structure

```
app/
├── android/                # Android-specific code
├── ios/                    # iOS-specific code
├── macos/                  # macOS-specific code
├── linux/                  # Linux-specific code
├── windows/                # Windows-specific code
├── web/                    # Web-specific code
├── assets/                 # Images, fonts, and other static assets
│   ├── images/             # Image assets
│   ├── lottie/             # Lottie animations
│   └── rive/               # Rive animations
├── lib/                    # Dart source code
│   ├── apis/               # API integrations
│   ├── controllers/        # Business logic
│   ├── helpers/            # Utility functions
│   ├── models/             # Data models
│   ├── repositories/       # Data access layer
│   ├── screens/            # UI screens
│   ├── services/           # Background services
│   ├── widgets/            # Reusable UI components
│   ├── main.dart           # Application entry point
│   └── firebase_options.dart # Firebase configuration
├── test/                   # Unit and widget tests
├── pubspec.yaml            # Dependencies and app metadata
└── firebase.json           # Firebase configuration
```

## Prerequisites

- Flutter SDK (latest stable version)
- Dart SDK (latest stable version)
- Android Studio / Xcode (for mobile development)
- Firebase project (for authentication and backend services)

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd app
```

2. **Install dependencies**

```bash
flutter pub get
```

3. **Configure Firebase**

Ensure you have the Firebase CLI installed:
```bash
npm install -g firebase-tools
```

Initialize Firebase:
```bash
firebase login
firebase init
```

4. **Run the application**

```bash
# For Android
flutter run -d android

# For iOS
flutter run -d ios

# For macOS
flutter run -d macos

# For web
flutter run -d chrome
```

## Building for Production

### Android

```bash
flutter build apk --release
# or
flutter build appbundle --release
```

### iOS

```bash
flutter build ios --release
```

Then archive and upload using Xcode.

### macOS

```bash
flutter build macos --release
```

### Web

```bash
flutter build web --release
```

## Testing

Run the tests with:

```bash
flutter test
```

## Troubleshooting

### Common Issues

1. **Build failures**
   - Ensure you have the latest Flutter SDK: `flutter upgrade`
   - Clean the build: `flutter clean` then `flutter pub get`

2. **Platform-specific issues**
   - Check platform-specific setup in the respective directories
   - Ensure you have the required development tools installed

3. **Firebase connection issues**
   - Verify your firebase_options.dart file is correctly configured
   - Check that your device/emulator has internet connectivity

## Contributing

1. Follow the Flutter style guide
2. Write tests for new features
3. Update documentation for any changes
4. Create pull requests against the main branch
