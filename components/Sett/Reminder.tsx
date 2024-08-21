import * as Notifications from "expo-notifications";
import { View, Text, Switch, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ClockSvg, NotificationsSvg } from "@/constants/svg";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { colors } from "@/constants/color";
const Reminder = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(12, 0, 0, 0);
    return newDate;
  });

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    //setShow(false);
    setDate(currentDate);
    console.log(date);
  };

  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    console.log(status);
  };

  const scheduleNotification = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: ":))))))",
        body: "Are ya winning son??",
      },
      trigger: {
        hour: 23, //date.getHours(),
        minute: 28, //date.getMinutes(),
        repeats: true,
      },
    });

    console.log(notificationId);
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    if (isEnabled) {
      scheduleNotification();
    } else {
      Notifications.cancelAllScheduledNotificationsAsync();
    }
  }, [isEnabled, date]);

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
            {date.getHours()}:
            {date.getMinutes() < 10
              ? "0" + date.getMinutes()
              : date.getMinutes()}
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
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="spinner"
              textColor="black"
              onChange={onChange}
            />
            <Pressable
              className="w-[256px] h-[40px] bg-secondary rounded-lg flex justify-center items-center mt-28"
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text className="text-white text-[14px] font-psemibold600">
                Confirm
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Reminder;
