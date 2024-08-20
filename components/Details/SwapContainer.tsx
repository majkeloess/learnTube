import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import SwapDetails from "./SwapDetails";
import SwapNotes from "./SwapNotes";

const SwapContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <View>
      <View className="flex flex-row justify-around font-psemibold600">
        <Pressable
          onPress={() => {
            setActive(0);
          }}
          className={`w-1/2  border-b-2 ${
            active == 0 ? "border-b-secondary" : "border-b-main"
          }`}
        >
          <Text className=" font-psemibold600 text-[12px] text-center">
            Details
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActive(1);
          }}
          className={`w-1/2 border-b-2 ${
            active == 1 ? "border-b-secondary" : "border-b-main"
          }`}
        >
          <Text className=" font-psemibold600 text-[12px] text-center">
            Notes
          </Text>
        </Pressable>
      </View>
      <View className="mt-4">
        {active == 0 ? <SwapDetails /> : <SwapNotes />}
      </View>
    </View>
  );
};

export default SwapContainer;
