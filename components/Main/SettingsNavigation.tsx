import { View, Text } from "react-native";

import { Link } from "expo-router";
import { Image } from "react-native";
import { SettingsSvg } from "@/constants/svg";

const SettingsNavigation = () => {
  return (
    <View>
      <Link href="/settings">
        <SettingsSvg />
      </Link>
    </View>
  );
};

export default SettingsNavigation;
