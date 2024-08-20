import { View, Text, Image } from "react-native";
import React from "react";

const SwapStatsBox = ({ image, text }: { image: any; text: string }) => {
  return (
    <View className="w-[136px] h-[32px] flex flex-row space-x-2 justify-evenly items-center rounded-lg bg-secondary">
      <Image source={image} tintColor="white" className="w-6 h-6" />
      <Text className="text-white text-[10px] font-psemibold600">{text}</Text>
    </View>
  );
};

export default SwapStatsBox;
