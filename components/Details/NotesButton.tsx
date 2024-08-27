import { View, Text, Pressable } from "react-native";
import React from "react";

const NotesButton = ({
  setBoxData,
  text,
  boxData,
  setText,
  time,
  setTime,
  currentTime,
}: {
  setBoxData: React.Dispatch<React.SetStateAction<string[]>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<number[]>>;
  currentTime: number;
  text: string;
  time: number[];
  boxData: string[];
}) => {
  const addData = () => {
    const copyText = [...boxData];
    copyText.push(text);
    setBoxData(copyText);
    setText("");

    const copyTime = [...time];
    copyTime.push(currentTime);
    setTime(copyTime);
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
