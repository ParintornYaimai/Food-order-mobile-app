import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const modes = [
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
  { key: "cancel", label: "Cancelled" },
] as const;

const myOrder = () => {
  const router = useRouter();

  const [mode, setMode] = useState<(typeof modes)[number]["key"]>("cancel");

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
            My Orders
          </Text>
        </View>

        {/* Content */}
        <View className="flex-1 bg-white rounded-3xl mt-5">
          {/* Select Mode */}
          <View className="flex-row items-center justify-center mt-10 mx-5 px-2">
            {modes.map(({ key, label }) => (
              <Pressable
                key={key}
                className={`rounded-3xl py-1 flex-1 mx-4 items-center ${
                  mode === key ? "bg-orangeBase" : "bg-orange-100"
                }`}
                onPress={() => setMode(key)}
              >
                <Text
                  className={`text-lg font-medium ${
                    mode === key ? "text-white" : "text-orangeBase"
                  }`}
                >
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="mx-10 mt-2 border-b border-orange2" />

          {/* Menu Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            bounces={false}
            overScrollMode="never"
            contentContainerStyle={{ paddingBottom: 50 }}
          >
            <View className="flex-col items-center justify-center px-10">
              {/* item 1 */}
              <View className="w-full flex-row items-center self-center border-b border-orange2 py-5">
                {/* Food image */}
                <View
                  style={{ width: wp(20), height: hp(13) }}
                  className=" rounded-3xl"
                >
                  <Image
                    source={images.bbqImage}
                    className="size-full rounded-3xl"
                    resizeMode="cover"
                  />
                </View>

                {/* Food detail */}
                <View className="flex-1 gap-1">
                  {/* Name & price */}
                  <View className="flex-row items-center justify-between pl-4 ">
                    <View>
                      <Text className="text-xl font-medium text-amber-950">
                        Strawberry shake
                      </Text>
                    </View>
                    <View>
                      <Text className="text-orangeBase text-lg font-medium">
                        $20.00
                      </Text>
                    </View>
                  </View>

                  {/* Date & quatity */}
                  <View className="flex-row items-center justify-between pl-4">
                    <View>
                      <Text className="text-sm font-light">
                        29 Nov, 01:20 pm
                      </Text>
                    </View>
                    <View>
                      <Text className="text-sm font-extralight">2 item</Text>
                    </View>
                  </View>

                  {/* Button */}
                  {mode !== "cancel" ? (
                    <View className="flex-row items-center justify-between pl-4">
                      <Pressable>
                        <Text
                          className={`text-md font-normal ${
                            mode === "active"
                              ? "bg-orangeBase text-white"
                              : "bg-orange-100 text-orangeBase"
                          } px-3 py-1 rounded-3xl`}
                        >
                          {mode === "active"
                            ? "Cancel Order"
                            : mode === "completed"
                              ? "Leave a review"
                              : ""}
                        </Text>
                      </Pressable>

                      <Pressable>
                        <Text className="text-md font-normal text-orangeBase bg-orange-100 px-2 py-1 rounded-3xl">
                          {mode === "active"
                            ? "Track Driver"
                            : mode === "completed"
                              ? "Order Again"
                              : ""}
                        </Text>
                      </Pressable>
                    </View>
                  ):(
                    <View className="flex-row items-center justify-start pl-3 mt-0 gap-1">
                      <EvilIcons name="exclamation" size={20} color="#E95322" />
                      <Text className="text-md font-normal text-orangeBase pt-1 ">
                        Order cancelled
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default myOrder;
