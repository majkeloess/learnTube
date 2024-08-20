import { View, Text } from "react-native";
import React from "react";

const NotesBox = ({ text, time }: { text: string; time: string }) => {
  return (
    <View className="border-[1px] my-2 border-main p-3 rounded-xl">
      <Text className="text-[12px] font-pregular400 leading-3">{text}</Text>
      <Text className="text-right font-psemibold600 text-[10px]">{time}</Text>
    </View>
  );
};

export default NotesBox;
