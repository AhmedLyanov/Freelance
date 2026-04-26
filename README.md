# Freelance App

This is a mobile application designed to connect freelancers with clients. Built using [Expo](https://expo.dev), it provides an intuitive interface for managing freelance projects, profiles, and settings.

## Features

- **Categories**: Browse and explore various freelance categories.
- **Profile Management**: Update and manage your freelancer profile.
- **Settings**: Customize your app experience.
- **Modern UI**: Built with React Native and styled using NativeWind.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Freelance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npx expo start
   ```

   You can open the app in:
   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## Project Structure

- **app/**: Contains the main application screens and components.
  - **(tabs)**: Tab-based navigation screens (e.g., Profile, Settings).
  - **categories.tsx**: Displays freelance categories.
  - **index.tsx**: Home screen.
- **components/**: Reusable UI components.
- **constants/**: Application constants (e.g., routes, data).
- **assets/**: Static assets like images.

## Development

This project uses [file-based routing](https://docs.expo.dev/router/introduction) for navigation. To start developing, edit the files inside the **app/** directory.

## Reset Project

To reset the project to its initial state, run:
```bash
npm run reset-project
```

## Learn More

To learn more about developing with Expo, check out the following resources:

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
