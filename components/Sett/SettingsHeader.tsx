import { View, Text, Pressable } from "react-native";
import React from "react";
import { LeftArrowSvg } from "@/constants/svg";
import { useRouter } from "expo-router";

const SettingsHeader = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex flex-row items-center justify-start mx-6 space-x-2">
      <Pressable onPress={handleBack}>
        <LeftArrowSvg />
      </Pressable>
      <Text className="text-[16px] font-pbold700">Settings</Text>
    </View>
  );
};

export default SettingsHeader;
