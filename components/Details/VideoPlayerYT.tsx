import React from "react";
import YouTubeIframe from "react-native-youtube-iframe";

const VideoPlayerYT = ({ url }: { url: string }) => {
  return <YouTubeIframe height={220} videoId={url} />;
};

export default VideoPlayerYT;
