import { View, Text, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import { ClockSvg, NotificationsSvg } from "@/constants/svg";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { colors } from "@/constants/color";
const Reminder = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View className="mx-6">
      <View className="flex justify-start flex-row items-center space-x-2 my-2">
        <NotificationsSvg />
        <Text className="text-secondary font-pregular400 text-[14px]">
          Learning reminders
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-secondary font-pregular400 text-[12px]">
          Repeat everyday at:
        </Text>
        <Pressable
          className="flex flex-row space-x-2 items-center"
          onPress={() => setShow(!show)}
        >
          <ClockSvg />
          <Text className="text-secondary font-pregular400 text-[12px]">
            {date.getHours()}:{date.getMinutes()}
          </Text>
        </Pressable>
        <Switch
          trackColor={{ false: colors.main, true: colors.secondary }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      <View className="mt-4">
        <Text className="text-[10px] font-psemibold600">
          You will receive friendly reminder to remember to study
        </Text>
      </View>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            textColor="black"
          />
        )}
      </View>
    </View>
  );
};

export default Reminder;
