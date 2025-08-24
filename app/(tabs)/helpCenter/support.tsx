import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const support = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      <View className="flex-1">
        {/* header */}
        <View className="flex-row items-center justify-center py-2 px-4 mt-5 mx-5">
          <Pressable onPress={() => router.back()} className="absolute left-4">
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="#E95322"
            />
          </Pressable>
          <Text className="text-center font-black text-3xl text-white">
            Support
          </Text>
        </View>

        {/* content */}
        <View className="flex-1 bg-white rounded-3xl mt-5 pt-10">
          <View>
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default support;
