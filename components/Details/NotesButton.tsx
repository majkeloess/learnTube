import { View, Text, Pressable } from "react-native";
import React from "react";

const NotesButton = () => {
  return (
    <Pressable className="w-[256px] h-[40px] bg-secondary rounded-lg flex justify-center items-center mt-6">
      <Text className="text-white text-[14px] font-psemibold600">Add note</Text>
    </Pressable>
  );
};

export default NotesButton;
