import { View, Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { sortType } from "@/utils/types";

const ListItem = ({
  text,
  setList,
  type,
  list,
}: {
  text: string;
  setList: Dispatch<SetStateAction<sortType>>;
  list: sortType;

  type: sortType;
}) => {
  const handlePress = () => {
    setList(type);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="flex flex-row items-center space-x-4 my-3"
    >
      <View className="w-6 h-6 border-2 border-white rounded-full flex justify-center items-center">
        {list == type && (
          <View className="bg-secondary rounded-full w-[14px] h-[14px]"></View>
        )}
      </View>
      <Text className="text-white font-pregular400 font-[14px]">{text}</Text>
    </Pressable>
  );
};

export default ListItem;
