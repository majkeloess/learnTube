import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";
import { useState, Dispatch, SetStateAction } from "react";
import { sortType } from "@/utils/types";
import ListItem from "./ListItem";
import { sortBy } from "@/utils/fetch";
const Sort = ({
  sort,
  setSort,
}: {
  sort: sortType;
  setSort: Dispatch<SetStateAction<sortType>>;
}) => {
  const [list, setList] = useState<sortType>(sort);
  const [isModalVisible, setModalVisible] = useState(false);
  const text = ["Upload date: latest", "Upload date: oldest", "Most popular"];

  const toggleModal = () => {
    setSort(list);
    setModalVisible(!isModalVisible);
  };
  //  TODO LIST WITH STATE+CONTEXT, BACKGROUND
  return (
    <View className="mt-2 ">
      <TouchableOpacity onPress={toggleModal}>
        <Text className="text-right font-pregular400 text-[12px] ">
          Sort by:{" "}
          <Text className="font-psemibold600">
            {sort == sortBy[0]
              ? text[0]
              : sort == sortBy[1]
              ? text[1]
              : text[2]}
          </Text>
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        className="bg-opacity-50"
      >
        <View className="flex-1 align-middle justify-center items-center ">
          <View className="bg-main w-[320px] h-[400px] p-6 rounded-3xl flex items-center">
            <View>
              <View>
                <Text className="text-left text-white text-[18px] font-psemibold600">
                  Sort records by:
                </Text>
              </View>
              <View>
                <ListItem
                  text={text[0]}
                  list={list}
                  setList={setList}
                  type={sortBy[0]}
                />
                <ListItem
                  text={text[1]}
                  list={list}
                  setList={setList}
                  type={sortBy[1]}
                />
                <ListItem
                  text={text[2]}
                  list={list}
                  setList={setList}
                  type={sortBy[2]}
                />
              </View>
              <Pressable
                className="w-[256px] h-[40px] bg-secondary rounded-lg flex justify-center items-center"
                onPress={toggleModal}
              >
                <Text className="text-white text-[14px] font-psemibold600">
                  Confirm
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Sort;
