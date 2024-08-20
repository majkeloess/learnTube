import { View, Text, ScrollView } from "react-native";
import React from "react";
import NotesBox from "./NotesBox";
import NotesForm from "./NotesForm";
import NotesButton from "./NotesButton";

const SwapNotes = () => {
  return (
    <View>
      <ScrollView>
        <NotesBox
          time="2:08"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non."
        />
        <NotesBox
          time="2:08"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non."
        />

        <NotesBox
          time="2:08"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non."
        />
      </ScrollView>

      <View>
        <NotesForm />
        <NotesButton />
      </View>
    </View>
  );
};

export default SwapNotes;
