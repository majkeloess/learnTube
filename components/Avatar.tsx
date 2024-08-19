import { Image } from "react-native";
import { PersonIcon } from "@/constants/png";

import React from "react";

const Avatar = () => {
  return <Image source={PersonIcon} tintColor="white" className="w-5 h-5" />;
};

export default Avatar;
