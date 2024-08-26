import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { VideoSearchType } from "@/utils/types";
import { useRouter } from "expo-router";
const MainVideo = ({ data }: { data: VideoSearchType }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/details/${data.id.videoId}`)}
    >
      <View className="w-[180px] mr-4">
        <View>
          <Image
            source={{ uri: data.snippet.thumbnails.medium.url }}
            className="w-[180px] h-[112px] rounded-2xl"
          />
          <Text className="text-[12px] font-pregular400 leading-[14px] my-2">
            {data.snippet.title}
          </Text>
        </View>
        <Text className="text-[10px] font-pregular400 text-right">
          {data.snippet.publishedAt.split("T")[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainVideo;
