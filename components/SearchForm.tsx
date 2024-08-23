import { View, TextInput, Pressable } from "react-native";
import { SearchSvg } from "@/constants/svg";
import { colors } from "@/constants/color";
import { useState } from "react";
import { useRouter } from "expo-router";
import { VideoSearchType } from "@/utils/types";
const SearchForm = ({
  width,
  data,
  setData,
}: {
  width: string;
  data?: VideoSearchType[] | null;
  setData?: React.Dispatch<React.SetStateAction<VideoSearchType[] | null>>;
}) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleRedirect = () => {
    if (search != "") {
      if (setData) {
        setData(null);
      }
      router.replace(`/(tabs)/search/${search}`);
      setSearch("");
    }
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
