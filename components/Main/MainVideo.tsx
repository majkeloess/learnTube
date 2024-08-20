import { View, Text, Image } from "react-native";
import React from "react";
import Example from "../../assets/example.png";
import { Link } from "expo-router";
const MainVideo = () => {
  return (
    <Link href="/details/id">
      <View className="w-[180px] mr-4">
        <Image source={Example} className="w-[180px] h-[112px] rounded-2xl" />
        <Text className="text-[12px] font-pregular400 leading-3 my-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Text>
        <Text className="text-[10px] font-pregular400 text-right">
          12.08.2024
        </Text>
      </View>
    </Link>
  );
};

export default MainVideo;
