import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const register = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-yellowBase">
      {/* Header */}
      <View className="relative items-center pt-4 pb-6 my-16">
        <Pressable
          className="absolute left-4 top-4 z-10 "
          onPress={() => router.push("/(auth)/login")}
        >
          <Icon name="keyboard-arrow-left" size={28} color="#E95322" />
        </Pressable>
        <Text className="text-white text-3xl font-black">New Account</Text>
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-10 py-6">
        {/* Input */}
        <View className="gap-4">
          {/* FullName */}
          <View className="">
            <Text className="mb-1 font-bold text-amber-950">Full name</Text>
            <TextInput
              placeholder="Full name"
              className="p-4 rounded-xl bg-yellow2"
            />
          </View>

          {/* Password */}
          <View className="">
            <Text className="mb-1 font-bold text-amber-950">Password</Text>
            <TextInput
              placeholder="Password"
              className="p-4 rounded-xl bg-yellow2"
              keyboardType="visible-password"
            />
          </View>

          {/* email */}
          <View className="">
            <Text className="mb-1 font-bold text-amber-950">email</Text>
            <TextInput
              placeholder="email"
              className="p-4 rounded-xl bg-yellow2"
              keyboardType="email-address"
            />
          </View>

          {/* Mobile number */}
          <View className="">
            <Text className="mb-1 font-bold text-amber-950">
              {" "}
              Mobile number
            </Text>
            <TextInput
              placeholder=" Mobile number"
              className="p-4 rounded-xl bg-yellow2"
              keyboardType="phone-pad"
            />
          </View>

          {/* Date of birth */}
          <View className="">
            <Text className="mb-1 font-bold text-amber-950">Date of birth</Text>
            <TextInput
              placeholder="Date of birth"
              className="p-4 rounded-xl bg-yellow2"
            />
          </View>
        </View>

        {/* buttom */}
        <View className="items-center">
           {/* Text Term*/}
          <View className="my-5">
            <Text className="text-center">
              By continuing, you agree to {"\n"}
              <Text className="text-orangeBase text-center">
                Terms of Us
              </Text>{" "}
              {""}
              and
              <Text className="text-orangeBase"> Privacy Policy</Text>
            </Text>
          </View>

          {/* allButton */}
          <View>
            <Pressable className="w-[200px] items-center self-center bg-orangeBase rounded-full py-3">
              <Text className="text-center text-xl text-white">Sign Up</Text>
            </Pressable>
          </View>

          {/*all button*/}
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
        </View>
      </View>
    </View>
  );
};

export default register;
