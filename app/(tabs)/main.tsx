import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import SearchForm from "@/components/SearchForm";
import SettingsNavigation from "@/components/Main/SettingsNavigation";
import MainCard from "@/components/Main/MainCard";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-evenly items-center mt-11">
          <SearchForm width="297" />
          <SettingsNavigation />
        </View>
        <View className="mt-4">
          <MainCard query="React Native" />
          <MainCard query="React" />
          <MainCard query="TypeScript" />
          <MainCard query="JavaScript" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
