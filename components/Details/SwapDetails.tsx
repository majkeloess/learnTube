import { View, Text } from "react-native";
import React from "react";
import SwapStatsBox from "./SwapStatsBox";

import { LikesIcon, ViewsIcon } from "@/constants/png";

const SwapDetails = () => {
  return (
    <View>
      <View>
        <Text className="font-psemibold600 text-[10px]">Description</Text>
        <Text className="mt-2 font-pregular400 text-[12px] leading-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          venenatis semper purus a accumsan. Donec accumsan pulvinar metus,
          euismod lacinia libero congue non. Vivamus ut massa finibus, consequat
          dui commodo, semper magna. Donec nec justo consectetur lacus facilisis
          tristique eget quis nulla. Cras sodales lacinia nisi, in dictum elit
          commodo in.
        </Text>
      </View>
      <View>
        <Text className="font-psemibold600 text-[10px] mt-2">Statistics</Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <SwapStatsBox image={ViewsIcon} text={"25222222 views"} />
          <SwapStatsBox image={LikesIcon} text={"12345 likes"} />
        </View>
      </View>
    </View>
  );
};

export default SwapDetails;
