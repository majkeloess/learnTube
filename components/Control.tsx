import { Image, ImageSourcePropType, Pressable } from "react-native";

import React from "react";

const Control = ({ png, handlePress }: { png: string; handlePress?: any }) => {
  return (
    <Pressable
      onPress={handlePress}
      className="bg-black/25 rounded-full w-8 h-8 flex justify-center items-center"
    >
      <Image
        source={png as ImageSourcePropType}
        tintColor="white"
        className="w-5 h-5"
      />
    </Pressable>
  );
};

export default Control;
