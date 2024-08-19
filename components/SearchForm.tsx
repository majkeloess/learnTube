import { View, Text, TextInput, Image } from "react-native";
import { SearchSvg } from "@/constants/svg";
import { colors } from "@/constants/color";
const SearchForm = ({ width }: { width: string }) => {
  return (
    <View
      className={`border-secondary border-2 rounded-2xl w-[${width}px] h-11 flex-row space-x-2 items-center px-2`}
    >
      <SearchSvg />
      <TextInput
        className="text-secondary "
        placeholderTextColor={colors.main}
        placeholder="Search videos"
      />
    </View>
  );
};

export default SearchForm;
