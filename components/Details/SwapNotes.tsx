import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import NotesBox from "./NotesBox";
import NotesForm from "./NotesForm";
import NotesButton from "./NotesButton";
import { formatTime } from "@/utils/utilityFunctions";

const SwapNotes = ({ currentTime }: { currentTime: number }) => {
  const [text, setText] = useState("");
  const [boxData, setBoxData] = useState<string[]>([]);
  const [time, setTime] = useState<number[]>([]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} className="h-[140px]">
        {boxData.map((data, i) => (
          <NotesBox key={i} time={formatTime(time[i])} text={data} />
        ))}
      </ScrollView>

      <View className="flex justify-center items-center mt-6">
        <NotesForm text={text} setText={setText} />
        <NotesButton
          time={time}
          setTime={setTime}
          setText={setText}
          setBoxData={setBoxData}
          text={text}
          boxData={boxData}
          currentTime={currentTime}
        />
      </View>
    </View>
  );
};

export default SwapNotes;
