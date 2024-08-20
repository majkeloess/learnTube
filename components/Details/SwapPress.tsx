import { View, Text, Pressable } from "react-native";
import React from "react";

const SwapPress = ({
  text,
  active,
  handleActive,
  typeActive,
}: {
  text: string;
  active: boolean;
  handleActive: () => void;
  typeActive: boolean;
}) => {
  return (
    <Pressable
      onPress={handleActive}
      className={`w-1/2  border-b-2 ${
        active == typeActive ? "border-b-secondary" : "border-b-main"
      }`}
    >
      <Text className=" font-psemibold600 text-[12px] text-center">{text}</Text>
    </Pressable>
  );
};

export default SwapPress;
