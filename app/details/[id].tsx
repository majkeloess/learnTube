import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import VideoPlayerAV from "@/components/Details/VideoPlayerAV";
import Avatar from "@/components/Avatar";
import SwapContainer from "@/components/Details/SwapContainer";
import { useRouter, useLocalSearchParams } from "expo-router";
import { fetchDetails } from "@/utils/fetch";

const DetailsScreen = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const {
    id: [firstId],
  } = useLocalSearchParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDetails(firstId);
      setData(res);
    };

    if (firstId) {
      getData();
    }
  }, []);

  return (
    <SafeAreaView>
      {/* temporary */}
      <VideoPlayerAV />
      <View className="mx-4 mt-4">
        <Text className="text-[18px] font-psemibold600">
          {data.snippet.title}
        </Text>

        <View className="flex flex-row justify-start items-center space-x-2 mt-6">
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Avatar />
          </Pressable>
          <Text className="text-[14px] font-pbold700">
            {data.snippet.channelTitle}
          </Text>
        </View>

        <View className="mt-8">
          {/* tu będzie pasowane dalej data  */}
          <SwapContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
