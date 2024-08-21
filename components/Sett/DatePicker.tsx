import { View, Text, Pressable } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { ClockSvg } from "@/constants/svg";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  return (
    <Pressable
      className="flex flex-row space-x-2 items-center"
      onPress={() => setShow(!show)}
    >
      <ClockSvg />
      <Text className="text-secondary font-pregular400 text-[12px]">
        {date.getHours()}:{date.getMinutes()}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </Pressable>
  );
};

export default DatePicker;
