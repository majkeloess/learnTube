import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const LogInButton = () => {
  return (
    <View className="my-5">
      <Link href="/main" asChild>
        <Pressable className="bg-secondary flex items-center justify-center w-[327px h-[48px] rounded-xl">
          <Text className="text-white font-psemibold text-[16px] px-24">
            Log in as a guest
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LogInButton;
