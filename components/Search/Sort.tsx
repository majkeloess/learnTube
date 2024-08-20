import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";

const Sort = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //  TODO LIST WITH STATE+CONTEXT, BACKGROUND
  return (
    <View className="mt-2 ">
      <TouchableOpacity onPress={toggleModal}>
        <Text className="text-right font-pregular400 text-[12px] ">
          Sort by: <Text className="font-psemibold600">Most popular</Text>
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
