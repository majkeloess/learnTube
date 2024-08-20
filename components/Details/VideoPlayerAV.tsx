import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

const VideoPlayerAV = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View className="flex justify-center items-center">
      <Video
        ref={video}
        resizeMode={ResizeMode.COVER}
        className="aspect-video w-[100%] bg-white"
        source={{
          uri: "https://www.w3schools.com/html/mov_bbb.mp4",
        }}
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayerAV;
