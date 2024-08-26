import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import VideoPlayerAV from "@/components/Details/VideoPlayerYT";
import VideoPlayer from "@/components/Details/VideoPlayer";
import Avatar from "@/components/Avatar";
import SwapContainer from "@/components/Details/SwapContainer";
import { useRouter, useLocalSearchParams } from "expo-router";
import { fetchDetails } from "@/utils/fetch";
import { VideoDetailsType } from "@/utils/types";
import { placeHolderDetails } from "@/constants/placeholder";
import { LeftArrowSvg } from "@/constants/svg";

const DetailsScreen = () => {
  const router = useRouter();

  const [data, setData] = useState<VideoDetailsType>(placeHolderDetails);

  const { id }: { id: string } = useLocalSearchParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDetails(id);
      if (res) {
        setData(res);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView className="h-screen mt-6">
      {/* temporary */}
      <VideoPlayerAV url={data.id} />
      {/* <VideoPlayer /> */}
      <View className="mx-4 mt-4">
        <Text className="text-[18px] font-psemibold600">
          {data.snippet.title}
        </Text>
        <View className="flex flex-row justify-between items-center mt-6">
          <View className="flex flex-row justify-start items-center space-x-4">
            <Avatar />
            <Text className="text-[14px] font-pbold700">
              {data.snippet.channelTitle}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <LeftArrowSvg />
          </Pressable>
        </View>

        <View className="mt-8">
          <SwapContainer
            description={data.snippet.description}
            likes={data.statistics.likeCount}
            views={data.statistics.viewCount}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
