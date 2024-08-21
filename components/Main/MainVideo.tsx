import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Link } from "expo-router";


const MainVideo = ({
  id,
  title,
  publishedAt,
  imageUrl,
}: {
  id: string;
  title: string;
  publishedAt: string;
  imageUrl: ImageSourcePropType;
}) => {
  return (
    <Link href={`/details/${id}`}>
      <View className="w-[180px] mr-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-[180px] h-[112px] rounded-2xl"
        />
        <Text className="text-[12px] font-pregular400 leading-[14px] my-2">
          {title}
        </Text>
        <Text className="text-[10px] font-pregular400 text-right">
          {publishedAt.split("T")[0]}
        </Text>
      </View>
    </Link>
  );
};

export default MainVideo;
