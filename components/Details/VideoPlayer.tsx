import { useRef, useState } from "react";
import Video, { VideoRef } from "react-native-video";
import { View } from "react-native";
import Control from "../Control";
import {
  AirPlayIcon,
  BackwardIcon,
  ForwardIcon,
  LeftArrowIcon,
  PlayIcon,
  VolumeIcon,
} from "@/constants/png";
import { useRouter } from "expo-router";

const VideoPlayer = () => {
  const router = useRouter();
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);

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
    if (!videoRef.current) return;

    if (paused) {
      videoRef.current.resume();
    } else {
      videoRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleVolume = () => {};

  const handleAirPlay = () => {};

  return (
    <View className="relative h-[280px] w-full ">
      <Video
        paused={paused}
        className="h-full w-full"
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        ref={videoRef}
      />

      <Control png={LeftArrowIcon} handlePress={handleBack} />
      <Control png={VolumeIcon} handlePress={handleVolume} />
      <Control png={AirPlayIcon} handlePress={handleAirPlay} />
      <Control png={BackwardIcon} handlePress={handleBackward} />
      <Control png={ForwardIcon} handlePress={handleForward} />
      <Control png={PlayIcon} handlePress={handlePause} />
    </View>
  );
};

export default VideoPlayer;
