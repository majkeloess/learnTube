import { View, Text } from "react-native";
import React from "react";

const Sort = () => {
  return (
    <View className="mt-2">
      <Text className="text-right font-pregular400 text-[12px] ">
        Sort by: <Text className="font-psemibold600">Most popular</Text>
      </Text>
    </View>
  );
};

export default Sort;
