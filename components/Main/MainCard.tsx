import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MainVideo from "./MainVideo";
import { fetchVideo, sortBy } from "@/utils/fetch";
import { VideoSearchType } from "@/utils/types";

const MainCard = ({ query }: { query: string }) => {
  const [data, setData] = useState<VideoSearchType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchVideo(query + " tutorial", 2, sortBy[2]);
      setData(res);
    };

    getData();
  }, []);

  return (
    <View className="mt-2">
      <View className="flex flex-row justify-between items-center mx-6">
        <Text className="text-secondary text-[24px] font-psemibold600">
          {query}
        </Text>
        <Text className="font-pregular400 text-secondary underline">
          Show more
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className=" ml-6 mb-4 mt-2"
      >
        {data.map((data) => (
          <MainVideo data={data} />
        ))}
      </ScrollView>
      <View className="h-0.5 bg-secondary"></View>
    </View>
  );
};

export default MainCard;
