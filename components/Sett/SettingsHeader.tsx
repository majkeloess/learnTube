import { View, Text } from "react-native";
import React from "react";
import { LeftArrowSvg } from "@/constants/svg";

const SettingsHeader = () => {
  return (
    <View className="flex flex-row items-center justify-start mx-6 space-x-2">
      <LeftArrowSvg />
      <Text className="text-[16px] font-pbold700">Settings</Text>
    </View>
  );
};

export default SettingsHeader;
