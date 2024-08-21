import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import SearchForm from "@/components/SearchForm";
import Sort from "@/components/Search/Sort";
import SearchVideo from "@/components/Search/SearchVideo";
import { useLocalSearchParams } from "expo-router";
import { fetchVideo, sortBy } from "@/utils/fetch";
import { VideoSearchType } from "@/utils/types";
import { placeHolderDetails } from "@/constants/placeholder";

const SearchScreen = () => {
  const { query }: { query: string } = useLocalSearchParams();
  const [data, setData] = useState<VideoSearchType[]>(
    new Array(2).fill(placeHolderDetails)
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetchVideo(query + " tutorial", 2, sortBy[2]);
      if (res) {
        setData(res);
      }
    };

    getData();
  }, [query]);

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
              <Sort />
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
