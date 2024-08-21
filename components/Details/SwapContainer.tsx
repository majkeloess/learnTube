import { View } from "react-native";
import React, { useState } from "react";

import SwapDetails from "./SwapDetails";
import SwapNotes from "./SwapNotes";
import SwapPress from "./SwapPress";

const SwapContainer = ({
  description,
  views,
  likes,
}: {
  description: string;
  views: string;
  likes: string;
}) => {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <View>
      <View className="flex flex-row justify-around">
        <SwapPress
          text="Details"
          handleActive={handleActive}
          typeActive={true}
          active={active}
        />
        <SwapPress
          text="Notes"
          handleActive={handleActive}
          typeActive={false}
          active={active}
        />
      </View>
      <View className="mt-4">
        {active ? (
          <SwapDetails description={description} likes={likes} views={views} />
        ) : (
          <SwapNotes />
        )}
      </View>
    </View>
  );
};

export default SwapContainer;
