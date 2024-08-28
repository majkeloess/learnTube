# 👋 Introduction

**learnTube** is React Native mobile app built with Expo. Application is an simple learning platform where you can search for videos, watch them and make notes.

The development of the project began on _19 August 2024_.

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e44da9dd-691a-404e-b767-8ab47af427b1" alt="s1"></td>
    <td><img src="https://github.com/user-attachments/assets/fbfe5d42-a0d4-4ed2-99dc-a093171842c7" alt="s2"></td>
    <td><img src="https://github.com/user-attachments/assets/31793aaf-dcf2-41af-84af-370df77e25d5" alt="s3"></td>
    <td><img src="https://github.com/user-attachments/assets/c80751b5-060d-4e77-84d8-6a232499db45" alt="s4"></td>
  </tr>
</table>



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

## !Important
App right now uses [react-native-video](https://github.com/TheWidlarzGroup/react-native-video) Video component. It works only in dev build for specific platform because it uses native modules. If you want app work properly in Expo Go you have to change Video player in the file below:

```tsx
//  app/details/[id].tsx

<SafeAreaView className="h-screen mt-6">
      {/* temporary */}
      {/* <VideoPlayerAV url={data.id} /> */}
      <VideoPlayer currentTime={currentTime} setCurrentTime={setCurrentTime} />
      <View className="mx-4 mt-4">
        <Text className="text-[18px] font-psemibold600">
          {data.snippet.title}
        </Text>
// ...

```

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
