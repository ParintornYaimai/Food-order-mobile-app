import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const resetPassword = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-yellowBase">
      {/* header */}
      <View className="relative items-center pt-4 pb-6 my-16">
        <Pressable
          className="absolute left-4 top-4 z-10"
          onPress={() => router.push("/(auth)/register")}
        >
          <Icon name="keyboard-arrow-left" size={28} color="#E95322" />
        </Pressable>
        <Text className="text-white text-3xl font-black">Set Password</Text>
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-10 py-6">
        {/* input */}
        <View className="gap-4">
          <View className="mb-6">
            <Text className="font-bold text-amber-950 mb-1">Password</Text>
            <TextInput
              placeholder="email"
              className="bg-yellowBase/30 rounded-xl p-4 text-amber-950"
              placeholderTextColor="#444"
            />
          </View>

          {/* confirm password */}
          <View className="mb-6">
            <Text className="font-bold text-amber-950 mb-1">
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm Password"
              className="bg-yellowBase/30 rounded-xl p-4 text-amber-950"
              placeholderTextColor="#444"
            />
          </View>
        </View>

        <View className="items-center mt-4">
          <Pressable className="w-[200px] bg-orangeBase text-center self-center py-2 rounded-full">
            <Text className="text-center text-xl text-white">
              Create New Password
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default resetPassword;
