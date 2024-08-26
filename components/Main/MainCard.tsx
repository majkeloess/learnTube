import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import MainVideo from "./MainVideo";
import { fetchVideo, sortBy } from "@/utils/fetch";
import { VideoSearchType } from "@/utils/types";
import { placeHolderDetails } from "@/constants/placeholder";
import { Link } from "expo-router";
import { colors } from "@/constants/color";

const MainCard = ({ query }: { query: string }) => {
  const [data, setData] = useState<VideoSearchType[] | null>(null);
  //new Array(2).fill(placeHolderDetails)

  useEffect(() => {
    const getData = async () => {
      const res = await fetchVideo(query + " tutorial", 5);
      if (res) {
        setData(res);
      }
    };

    getData();
  }, []);

  return (
    <View className="mt-2">
      <View className="flex flex-row justify-between items-center mx-6">
        <Text className="text-secondary text-[24px] font-psemibold600">
          {query}
        </Text>
        <Link href={`/(tabs)/search/${query}`}>
          <Text className="font-pregular400 text-secondary underline">
            Show more
          </Text>
        </Link>
      </View>
      {data ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="ml-6 mb-4 mt-2"
        >
          {data && data.map((data, i) => <MainVideo data={data} key={i} />)}
        </ScrollView>
      ) : (
        <View className="w-full flex justify-center items-center h-[180px]">
          <ActivityIndicator size="small" color={colors.secondary} />
        </View>
      )}
      <View className="h-0.5 bg-secondary"></View>
    </View>
  );
};

export default MainCard;
