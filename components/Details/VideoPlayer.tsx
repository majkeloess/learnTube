import { StyleSheet } from "react-native";
import React, { useRef } from "react";
import Video, { VideoRef } from "react-native-video";

const VideoPlayer = ({ url }: { url: string }) => {
  const videoRef = useRef<VideoRef>(null);

  const onBuffer = () => {
    console.log("Video is buffering...");
  };

  const onError = () => {
    console.error("Error loading video..");
  };

  return (
    <Video
      source={{ uri: `https://www.youtube.com/watch?v=${url}` }}
      ref={videoRef}
      onBuffer={onBuffer}
      onError={onError}
      style={styles.backgroundVideo}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayer;
