import { View, Text, SafeAreaView, ScrollView } from "react-native";

import React from "react";
import SearchForm from "@/components/SearchForm";
import Sort from "@/components/Search/Sort";
import SearchVideo from "@/components/Search/SearchVideo";
const SearchScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView className="mt-11 mx-6" showsVerticalScrollIndicator={false}>
        <SearchForm width="345" />
        <View className="mt-4">
          <Text className="font-pregular400 text-[10px]">
            1157 result found for:{" "}
            <Text className="font-psemibold600">"React Native"</Text>
          </Text>
          <Sort />
        </View>
        <View className="mt-4">
          <SearchVideo />
          <SearchVideo />
          <SearchVideo />
          <SearchVideo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
