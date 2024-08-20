import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
        style={styles.video}
        controls
        resizeMode="contain"
        paused={isPaused}
        onBuffer={() => console.log("Buffering...")}
        onError={(error) => console.log("Error:", error)}
        onEnd={() => console.log("Video ended")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  video: {
    width: "90%",
    height: 200,
  },
});

export default VideoPlayer;
