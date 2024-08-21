# 👋 Introduction

**learnTube** is React Native mobile app built with Expo. Application is an simple learning platform where you can search for videos, watch them and make notes.

The development of the project began on _19 August 2024_.

# ⚙️ Tech stack

- Expo
- React Native
- TypeScript
- NativeWind
- react-native-video
- Axios
- zod

# Installation

To run application locally you need to have `git`, `node.js` and `npm` installed locally on your machine.

## Cloning the repo and installing dependencies

```bash
git clone https://github.com/majkeloess/learnTube
cd learnTube
npm i
```

## Setting up environment variables

Change name of the `.env.example` file, into `.env` .

```env
EXPO_PUBLIC_YOUTUBE=<YOUR_YT_API_V3_KEY>

```

If you want to fetch data into app you need to have `YOUR_YT_API_V3_KEY`. You can get it from [Google console](https://console.cloud.google.com/). You'll need to create a new application that utilizes the YouTube v3 API. This process is more involved than the previous steps, so please refer to [documentation](https://developers.google.com/youtube/v3/docs) for guidance.

## Running the project

```bash
npx expo start
```

Scan QR code from terminal and open [Expo Go](https://expo.dev/go) on your device. You have to be connected to the same network as on your computer.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
