import { View, Text, Pressable } from "react-native";
import React from "react";

const NotesButton = ({
  setBoxData,
  text,
  boxData,
  setText,
}: {
  setBoxData: React.Dispatch<React.SetStateAction<string[]>>;
  setText: React.Dispatch<React.SetStateAction<string>>;

  text: string;
  boxData: string[];
}) => {
  const addData = () => {
    const copy = [...boxData];
    copy.push(text);
    setBoxData(copy);
    setText("");
  };

  return (
    <Pressable
      onPress={addData}
      className="w-[256px] h-[40px] bg-secondary rounded-lg flex justify-center items-center mt-6"
    >
      <Text className="text-white text-[14px] font-psemibold600">Add note</Text>
    </Pressable>
  );
};

export default NotesButton;
