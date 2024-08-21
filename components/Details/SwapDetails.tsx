import { View, Text, ScrollView } from "react-native";
import React from "react";
import SwapStatsBox from "./SwapStatsBox";

import { LikesIcon, ViewsIcon } from "@/constants/png";

const SwapDetails = ({
  description,
  views,
  likes,
}: {
  description: string;
  views: string;
  likes: string;
}) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} className="h-[250px]">
        <Text className="font-psemibold600 text-[10px]">Description</Text>
        <Text className="mt-2 font-pregular400 text-[12px] leading-3">
          {description}
        </Text>
      </ScrollView>
      <View>
        <Text className="font-psemibold600 text-[10px] mt-2">Statistics</Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <SwapStatsBox image={ViewsIcon} text={views + " views"} />
          <SwapStatsBox image={LikesIcon} text={likes + " likes"} />
        </View>
      </View>
    </View>
  );
};

export default SwapDetails;
