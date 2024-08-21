import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { VideoSearchType } from "@/utils/types";

const MainVideo = ({ data }: { data: VideoSearchType }) => {
  return (
    <Link href={`/details/${data.id.videoId}`}>
      <View className="w-[180px] mr-4">
        <Image
          source={{ uri: data.snippet.thumbnails.medium.url }}
          className="w-[180px] h-[112px] rounded-2xl"
        />
        <Text className="text-[12px] font-pregular400 leading-[14px] my-2">
          {data.snippet.title}
        </Text>
        <Text className="text-[10px] font-pregular400 text-right">
          {data.snippet.publishedAt.split("T")[0]}
        </Text>
      </View>
    </Link>
  );
};

export default MainVideo;
