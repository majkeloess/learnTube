import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import SearchForm from "@/components/SearchForm";
const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-11 flex justify-center mx-6">
        <SearchForm width="345" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
