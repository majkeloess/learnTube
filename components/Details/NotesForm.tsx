import { View, Text, TextInput } from "react-native";
import React from "react";
import { colors } from "@/constants/color";

const NotesForm = () => {
  return (
    <View className="border-[1px] p-2 rounded-xl border-main w-full h-14 mt-6">
      <TextInput
        className="text-[12px] w-full"
        placeholder="Enter notes.."
        placeholderTextColor={colors.main}
      />
    </View>
  );
};

export default NotesForm;
