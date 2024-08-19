import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainVideo from "./MainVideo";

const MainCard = ({ query }: { query: string }) => {
  return (
    <View className="mt-2">
      <View className="flex flex-row justify-between items-center mx-6">
        <Text className="text-secondary text-[24px] font-psemibold600">
          {query}
        </Text>
        <Text className="font-pregular400 underline">Show more</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className=" ml-6 mb-4 mt-2"
      >
        <MainVideo />
        <MainVideo />
        <MainVideo />
        <MainVideo />
        <MainVideo />
      </ScrollView>
      <View className="h-0.5 bg-secondary"></View>
    </View>
  );
};

export default MainCard;
