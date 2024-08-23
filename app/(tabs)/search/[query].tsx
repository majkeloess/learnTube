import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import SearchForm from "@/components/SearchForm";
import Sort from "@/components/Search/Sort";
import SearchVideo from "@/components/Search/SearchVideo";
import { useLocalSearchParams } from "expo-router";
import { fetchVideo, sortBy } from "@/utils/fetch";
import { sortType, VideoSearchType } from "@/utils/types";
import { placeHolderDetails } from "@/constants/placeholder";
import { oldestCompare, latestCompare, getPopularity } from "@/utils/sortData";

const SearchScreen = () => {
  const { query }: { query: string } = useLocalSearchParams();
  const [sort, setSort] = useState<sortType>(sortBy[0]);
  const [data, setData] = useState<VideoSearchType[]>(
    new Array(2).fill(placeHolderDetails)
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetchVideo(query + " tutorial", 10);
      if (res) {
        setData(res);
      }
    };

    getData();
  }, [query]);

  useEffect(() => {
    const sortAsync = async () => {
      const dataToSort = [...data];

      if (sort == sortBy[0]) {
        dataToSort.sort(latestCompare);
      } else if (sort == sortBy[1]) {
        dataToSort.sort(oldestCompare);
      } else {
        const popularityPromises = dataToSort.map((video) =>
          getPopularity(video.id.videoId)
        );
        const popularities = await Promise.all(popularityPromises);

        dataToSort.sort(
          (a, b) =>
            popularities[dataToSort.indexOf(b)] -
            popularities[dataToSort.indexOf(a)]
        );
      }
      setData(dataToSort);
    };

    sortAsync();
  }, [sort]);

  return (
    <SafeAreaView>
      <ScrollView className="mt-11 mx-6" showsVerticalScrollIndicator={false}>
        <SearchForm width="w-full" />
        {query ? (
          <View>
            <View className="mt-4">
              <Text className="font-pregular400 text-[10px]">
                {data.length} result found for:
                <Text className="font-psemibold600">"{query}"</Text>
              </Text>
              <Sort sort={sort} setSort={setSort} />
            </View>
            <View className="mt-4">
              {data.map((data, i) => (
                <SearchVideo data={data} key={i} />
              ))}
            </View>
          </View>
        ) : (
          <View className="flex items-center justify-center align-middle mt-10">
            <Text className="text-[20px] font-pmedium500 text-secondary">
              The search bar is empty.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
