import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../Avatar";

const SettingsUser = () => {
  return (
    <View className="flex flex-row space-x-4 justify-center items-center my-12">
      <View className="bg-secondary rounded-full w-12 h-12 flex justify-center items-center">
        <Avatar />
      </View>
      <Text className="text-[14px] font-pbold700">John Doe</Text>
    </View>
  );
};

export default SettingsUser;
