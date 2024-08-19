import { View, Text, Image } from "react-native";
import React from "react";
import Example from "../../assets/example.png";
const SearchVideo = () => {
  return (
    <View className="w-full">
      <Image source={Example} className="w-full h-[200px] rounded-2xl" />
      <Text className="text-[12px] text-secondary font-pbold700 my-2">
        Channel name
      </Text>
      <Text className="text-[16px] text-secondary font-pregular400 leading-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus
        lectus eu li...
      </Text>
      <Text className="text-[10px] text-secondary font-pregular400 text-right my-6">
        12.08.2024
      </Text>
    </View>
  );
};

export default SearchVideo;
