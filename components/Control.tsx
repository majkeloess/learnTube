import {
  Image,
  ImageSourcePropType,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React from "react";

const Control = ({
  png,
  handlePress,
  style,
}: {
  png: string;
  handlePress?: any;
  style: string;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-black/25 rounded-full w-8 h-8 flex justify-center items-center ${style}`}
    >
      <Image
        source={png as ImageSourcePropType}
        tintColor="white"
        className="w-5 h-5"
      />
    </TouchableOpacity>
  );
};

export default Control;
