import { View, TextInput, Pressable } from "react-native";
import { SearchSvg } from "@/constants/svg";
import { colors } from "@/constants/color";
import { useState } from "react";
import { useRouter } from "expo-router";
const SearchForm = ({ width }: { width: string }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleRedirect = () => {
    router.replace(`/(tabs)/search/${search}`);
    setSearch("");
  };

  return (
    <View
      className={`border-secondary border-2 rounded-2xl ${width} h-11 flex-row space-x-2 items-center px-2`}
    >
      <Pressable onPress={handleRedirect}>
        <SearchSvg />
      </Pressable>
      <TextInput
        value={search}
        onChangeText={(e) => setSearch(e)}
        className="text-secondary w-full"
        placeholderTextColor={colors.main}
        placeholder="Search videos"
      />
    </View>
  );
};

export default SearchForm;
