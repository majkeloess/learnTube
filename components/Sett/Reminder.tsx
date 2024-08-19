import { View, Text, Switch } from "react-native";
import React from "react";
import { ClockSvg, NotificationsSvg } from "@/constants/svg";

const Reminder = () => {
  return (
    <View className="mx-6">
      <View className="flex justify-start flex-row items-center space-x-2 my-2">
        <NotificationsSvg />
        <Text className="text-secondary font-pregular400 text-[14px]">
          Learning reminders
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-secondary font-pregular400 text-[12px]">
          Repeat everyday at:
        </Text>
        <View className="flex flex-row space-x-2 items-center">
          <ClockSvg />
          <Text className="text-secondary font-pregular400 text-[12px]">
            12:00
          </Text>
        </View>
        <Switch />
      </View>
      <View className="mt-4">
        <Text className="text-[10px] font-psemibold600">
          You will receive friendly reminder to remember to study
        </Text>
      </View>
    </View>
  );
};

export default Reminder;
