import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Login = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-yellowBase">
      {/* Header Area */}
      <View className="relative items-center pt-4 pb-6 my-16">
        <Pressable
          onPress={() => router.push("/welcome")}
          className="absolute left-4 top-4 z-10"
        >
          <Icon name="keyboard-arrow-left" size={28} color="#E95322" />
        </Pressable>
        <Text className="text-white text-3xl font-black">Log In</Text>
      </View>

      {/* Card Container */}
      <View className="flex-1 bg-white rounded-t-3xl px-10 py-6">
        {/* Welcome Text */}
        <View className="mb-6">
          <Text className="text-2xl font-black text-amber-950">Welcome</Text>
          <Text className="text-black mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Input Fields */}
        <View className="gap-4">
          {/* Email or Phone */}
          <View>
            <Text className="font-bold text-amber-950 mb-1">Email or Mobile Number</Text>
            <TextInput
              placeholder="email"
              className="bg-yellowBase/30 rounded-xl p-4 text-amber-950"
              placeholderTextColor="#444"
            />
          </View>

          {/* Password */}
          <View>
            <Text className="font-bold text-amber-950 mb-1">Password</Text>
            <TextInput
              placeholder="Password"
              className="bg-yellowBase/30 rounded-xl p-4 text-amber-950"
              placeholderTextColor="#444"
            />
          </View>

          {/* Forgot Password */}
          <Pressable className="self-end mt-1" onPress={()=> router.push('/resetPassword')}>
            <Text className="text-orangeBase font-bold">Forget Password</Text>
          </Pressable>
        </View>

        {/* Log In Button */}
        <View className="mt-20">
          <Pressable className="bg-orangeBase py-3 rounded-full items-center w-[200px] self-center">
            <Text className="text-white text-xl">Log In</Text>
          </Pressable>
        </View>

        {/* Divider + Social Login */}
        <View className="mt-6 items-center">
          <Text className="text-black font-medium mb-3">or sign up with</Text>
          <View className="flex-row gap-4">
            <Pressable className="bg-[#FEECEB] p-3 rounded-full">
              <Text className="text-xl">🟠</Text>
            </Pressable>
            <Pressable className="bg-[#FEECEB] p-3 rounded-full">
              <Text className="text-xl">📘</Text>
            </Pressable>
            <Pressable className="bg-[#FEECEB] p-3 rounded-full">
              <Text className="text-xl">🔒</Text>
            </Pressable>
          </View>
        </View>

        {/* Sign Up Link */}
        <View className="mt-6 flex-row justify-center">
          <Text className="text-black">Don’t have an account? </Text>
          <Pressable onPress={() => router.push("/(auth)/register")}>
            <Text className="text-red-500 font-semibold">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
