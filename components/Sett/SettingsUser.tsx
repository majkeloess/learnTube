import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../Avatar";

const SettingsUser = () => {
  return (
    <View className="flex flex-row space-x-4 justify-center items-center my-12">
      <Avatar />
      <Text className="text-[14px] font-pbold700">John Doe</Text>
    </View>
  );
};

export default SettingsUser;
