import { View, Text } from "react-native";
import React from "react";
import * as Linking from "expo-linking";
const Privacy = () => {
  const handlePress = () => {
    Linking.openURL("https://www.majkeloess.dev/");
  };

  return (
    <View>
      <Text className="font-pregular text-white text-center">
        By continuing you agree with
      </Text>
      <Text className="font-pregular text-white text-center">
        {" "}
        <Text onPress={handlePress} className="text-secondary underline">
          Terms and Conditions
        </Text>{" "}
        and{" "}
        <Text onPress={handlePress} className="text-secondary underline">
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default Privacy;
