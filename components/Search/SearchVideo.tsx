import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { VideoSearchType } from "@/utils/types";
import { useRouter } from "expo-router";

const SearchVideo = ({ data }: { data: VideoSearchType }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/details/${data.id.videoId}`);
  };

  return (
    <View className="w-full">
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{ uri: data.snippet.thumbnails.medium.url }}
          className="w-full h-[200px] rounded-2xl"
        />
        <Text className="text-[12px] text-secondary font-pbold700 my-2">
          {data.snippet.channelTitle}
        </Text>
        <Text className="text-[16px] text-secondary font-pregular400 leading-4">
          {data.snippet.title}
        </Text>
        <Text className="text-[10px] text-secondary font-pregular400 text-right my-6">
          {data.snippet.publishedAt.split("T")[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchVideo;
