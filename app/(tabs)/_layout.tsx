import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import { colors } from "@/constants/color";
import Tab from "@/components/Tab/Tab";
import { HomeIcon, SearchIcon } from "@/constants/png";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.main,
          height: 72,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ color, focused }) => (
            <Tab
              color={color}
              tabname="Home"
              image={HomeIcon}
              focus={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search/[query]"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Tab
              color={color}
              tabname="Search"
              image={SearchIcon}
              focus={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
