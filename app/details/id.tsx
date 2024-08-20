import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import VideoPlayerAV from "@/components/Details/VideoPlayerAV";
import Avatar from "@/components/Avatar";
import SwapContainer from "@/components/Details/SwapContainer";

const DetailsScreen = () => {
  return (
    <SafeAreaView>
      <VideoPlayerAV />
      <View className="mx-4 mt-4">
        <Text className="text-[18px] font-psemibold600">
          Lorem ipsum dolor sit amet, consect...
        </Text>

        <View className="flex flex-row justify-start items-center space-x-2 mt-6">
          <Avatar />
          <Text className="text-[14px] font-pbold700">Channel name</Text>
        </View>

        <View className="mt-8">
          <SwapContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
