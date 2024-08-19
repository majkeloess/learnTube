import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogInButton from "@/components/LogIn/LogInButton";

import { LogoPng, AppIcon } from "@/constants/png";
import LogInGreetings from "@/components/LogIn/LogInGreetings";
import Privacy from "@/components/LogIn/Privacy";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-main font-pblack">
      <View className="my-10">
        <Image source={LogoPng} width={292} height={116} />
      </View>
      <View>
        <Image source={AppIcon} width={128} height={128} />
      </View>
      <View>
        <LogInGreetings />
        <LogInButton />
        <Privacy />
      </View>
    </SafeAreaView>
  );
}
