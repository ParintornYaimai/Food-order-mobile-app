import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const history = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-center py-2 px-4 mt-5 mx-5">
          <Pressable onPress={handleBack} className="absolute left-4">
            <MaterialIconsIcon
              name="keyboard-arrow-left"
              size={24}
              color="#E95322"
            />
          </Pressable>
          <Text className="text-center font-black text-3xl text-white">
            History
          </Text>
        </View>

        {/* Content */}
        <View className="flex-1 bg-white rounded-3xl mt-5 pt-5">
          {/* history 1 */}
          <View className="border border-orange2 m-10">
            {/* Title & price */}
            <View>

            </View>

            {/* Date & quantity */}
            <View>

            </View>

            {/* status & detail Button */}
            <View>
              
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default history;
