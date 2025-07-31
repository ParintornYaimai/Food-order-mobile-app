import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Welcome = () => {
  const router = useRouter ()
  return (
    <View className="flex-1 bg-orangeBase">
      <View className="absolute top-1/2 left-0 right-0 items-center -translate-y-1/2">
        <Image
          source={images.group}
          style={{ width: 200, height: 170, tintColor: "#F5CB58" }}
          resizeMode="contain"
          className="mb-10"
        />
        <Text className="text-5xl font-black uppercase text-yellowBase">
          yum<Text className="text-white">QUICK</Text>
        </Text>

        <Text className="text-white font-bold text-sm text-center mt-10">
          Lorem ipsum dolor sit amet, consectetur{"\n"}adipisicing elit, sed do
          eiusmod.
        </Text>
      </View>

      <View className="absolute bottom-48 w-full items-center">
        <View >
          <Pressable className="bg-yellowBase py-2 px-20 rounded-full items-center mb-1"  
            onPress={() => router.push("./orderForFood")}
          >
            <Text className="text-orangeBase font-bold text-2xl">Log In</Text>
          </Pressable>
          <Pressable className="bg-yellow2 py-2 px-20 rounded-full items-center"
            onPress={() => router.push("./orderForFood")}
          >
            <Text className="text-orangeBase font-bold text-2xl">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
