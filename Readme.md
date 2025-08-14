# my-aeon-app

**(my-aeon-app)**  is a React Native project built with Expo. It demonstrates basic navigation using React Navigation and includes file system access with Expo File System.

---

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher recommended)
- npm or Yarn
- Expo CLI
- Xcode (for iOS simulator) or Android Studio (for Android emulator)

---

## Initialize the Expo project:**

```bash
$ expo init my-aeon-app
$ cd my-aeon-app
$ npm install @react-navigation/native
$ npm install react-native-screens react-native-safe-area-context
$ npm install @react-navigation/native-stack

Folder Structure
my-aeon-app/
├── App.js
├── package.json
├── node_modules/
├── assets/
└── screens

Usage
Start the project using npm start.
Open the app in the Expo Go app on your iOS or Android device, or run it on a simulator.
Navigate between screens using the provided navigation stack.
Access local files using Expo File System API.

Answer is saved in SaveAnswer.js , SaveAnswer.ts