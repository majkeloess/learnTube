import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoPng } from "@/constants/png";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-main font-pblack">
      <View>
        <Image source={LogoPng} />
      </View>
    </SafeAreaView>
  );
}
