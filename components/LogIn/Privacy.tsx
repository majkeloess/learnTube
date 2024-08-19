import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Privacy = () => {
  return (
    <View>
      <Text className="font-pregular text-white text-center">
        By continuing you agree with
      </Text>
      <Text className="font-pregular text-white text-center">
        {" "}
        <Link href="/" className="text-secondary underline">
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link href="/" className="text-secondary underline">
          Privacy Policy
        </Link>
      </Text>
    </View>
  );
};

export default Privacy;
