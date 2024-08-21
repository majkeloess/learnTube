import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import NotesBox from "./NotesBox";
import NotesForm from "./NotesForm";
import NotesButton from "./NotesButton";

const SwapNotes = () => {
  const [text, setText] = useState("");
  const [boxData, setBoxData] = useState<string[]>([]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} className="h-[140px]">
        {boxData.map((data, i) => (
          <NotesBox key={i} time="2:08" text={data} />
        ))}
      </ScrollView>

      <View className="flex justify-center items-center mt-6">
        <NotesForm text={text} setText={setText} />
        <NotesButton setBoxData={setBoxData} text={text} boxData={boxData} />
      </View>
    </View>
  );
};

export default SwapNotes;
