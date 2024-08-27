import { useRef, useState } from "react";
import Video, { VideoRef, OnProgressData } from "react-native-video";
import { View, Text, Pressable } from "react-native";
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visible, setVisible] = useState(true);

  //TODO: Progess bar

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleBack = () => {
    router.back();
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.seek(currentTime - 10);
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.seek(currentTime + 10);
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <Pressable onPress={handleVisible} className="relative h-[280px] w-screen">
      <Video
        onProgress={(data: OnProgressData) => setCurrentTime(data.currentTime)}
        onLoad={(data) => setDuration(data.duration)}
        muted={muted}
        fullscreen={fullscreen}
        paused={paused}
        className="h-full w-full"
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        ref={videoRef}
      />

      {visible && (
        <>
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
            <Text className="text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </Text>
          </View>
        </>
      )}
    </Pressable>
  );
};

export default VideoPlayer;
