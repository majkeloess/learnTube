import { View, SafeAreaView } from "react-native";
import React from "react";
import Reminder from "@/components/Sett/Reminder";
import SettingsHeader from "@/components/Sett/SettingsHeader";
import SettingsUser from "@/components/Sett/SettingsUser";

const SettingsScreen = () => {
  return (
    <SafeAreaView className="mt-6">
      <SettingsHeader />
      <SettingsUser />
      <View className="h-0.5 bg-secondary"></View>
      <Reminder />
    </SafeAreaView>
  );
};

export default SettingsScreen;
