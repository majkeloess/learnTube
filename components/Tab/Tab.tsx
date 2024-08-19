import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const Tab = ({
  tabname,
  color,
  image,
  focus,
}: {
  tabname: string;
  color: string;
  focus: boolean;
  image: any;
}) => {
  return (
    <View className="flex justify-center items-center mt-8">
      <Image source={image} tintColor={color} />
      <Text
        className={`text-[16px] font-pregular ${
          focus ? "text-secondary" : "text-white"
        }`}
      >
        {tabname}
      </Text>
    </View>
  );
};

export default Tab;
