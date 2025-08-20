import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const cancelOrder = () => {
  const [otherText, setOtherText] = useState<string>("");
  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-center py-2 px-4 mt-5 mx-5">
          <Pressable onPress={() => router.back()} className="absolute left-4">
            <MaterialIconsIcon
              name="keyboard-arrow-left"
              size={24}
              color="#E95322"
            />
          </Pressable>
          <Text className="text-center font-black text-3xl text-white">
            Cancel Order
          </Text>
        </View>

        {/* Content */}
        <View className="flex-1 bg-white rounded-3xl mt-5 pt-10">
          <View className="flex-1 bg-white rounded-3xl mt-5 px-10">
            <View className="w-full border-b border-orange2 pb-5">
              <Text className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
                molestias magnam commodi, vel iure.
              </Text>
            </View>

            {/* Input */}
            <View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
              <View className="flex-row items-center justify-between py-5 border-b border-orange2">
                <Text className="font-medium">Lorem ipsum dolor sit amet.</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orangeBase flex items-center justify-center"
                >
                  <View className="border border-orangeBase p-2 rounded-full" />
                </Pressable>
              </View>
            </View>

            {/* other */}
            <View className="mt-5">
                <View>
                    <Text className="text-base mb-2">Others</Text>
                    <TextInput
                        value={otherText}
                        onChangeText={setOtherText}
                        placeholder="Other reason..."
                        multiline
                        numberOfLines={4}
                        className="bg-yellow2 rounded-3xl p-3 h-36 "
                        style={{ textAlignVertical: "top" }} 
                    />
                </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default cancelOrder;
