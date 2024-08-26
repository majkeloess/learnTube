import { useRef, useState } from "react";
import Video, { VideoRef } from "react-native-video";
import { View, Text } from "react-native";
import Control from "../Control";
import {
  AirPlayIcon,
  BackwardIcon,
  ForwardIcon,
  FullScreenIcon,
  LeftArrowIcon,
  PlayIcon,
  VolumeIcon,
} from "@/constants/png";
import { useRouter } from "expo-router";

const VideoPlayer = () => {
  const router = useRouter();
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [muted, setMuted] = useState(false);
  //const background = require("../../assets/video/broadchurch.mp4");

  //TODO: Progress, Controls Visibility

  const handleBack = () => {
    router.back();
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.seek(200);
    }
  };
  const handlePause = () => {
    if (!videoRef.current) {
      return;
    }

    if (paused) {
      videoRef.current.resume();
    } else {
      videoRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleVolume = () => {
    setMuted(!muted);
  };

  const handleAirPlay = () => {};

  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <View className="relative h-[280px] w-screen">
      <Video
        muted={muted}
        fullscreen={fullscreen}
        paused={paused}
        className="h-full w-full"
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        ref={videoRef}
      />

      <Control
        png={LeftArrowIcon}
        handlePress={handleBack}
        style="absolute top-10 left-2"
      />
      <Control
        png={VolumeIcon}
        handlePress={handleVolume}
        style="absolute top-10 right-12"
      />
      <Control
        png={AirPlayIcon}
        handlePress={handleAirPlay}
        style="absolute top-10 right-2"
      />
      <View className="flex flex-row absolute top-[45%] items-center w-full justify-center">
        <Control png={BackwardIcon} handlePress={handleBackward} style="" />
        <Control
          png={PlayIcon}
          handlePress={handlePause}
          style="w-10 h-10 mx-10"
        />
        <Control png={ForwardIcon} handlePress={handleForward} style="" />
      </View>
      <Control
        png={FullScreenIcon}
        handlePress={handleFullscreen}
        style="absolute right-2 bottom-8"
      />
      <View className="absolute left-2 bottom-8">
        <Text className="text-white">9:05 / 11:05</Text>
      </View>
    </View>
  );
};

export default VideoPlayer;
