import { Image, View } from "react-native";
import { PersonIcon } from "@/constants/png";

import React from "react";

const Avatar = () => {
  return (
    <View className="bg-secondary rounded-full w-12 h-12 flex justify-center items-center">
      <Image source={PersonIcon} tintColor="white" className="w-5 h-5" />
    </View>
  );
};

export default Avatar;
