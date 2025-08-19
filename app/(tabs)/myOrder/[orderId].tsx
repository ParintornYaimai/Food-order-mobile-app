import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const OrderDetail = () => {
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
            Order Details
          </Text>
        </View>

        {/* Content */}
        <ScrollView
          className="flex-1 rounded-3xl bg-white mt-5 p-12"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          bounces={false}
          contentContainerStyle={{ paddingBottom: hp('15%') }}
          overScrollMode="never"
        >
          <View>
            {/* Order Number & Date */}
            <View className="border-b border-orange2 pb-5 ">
              <Text className="text-2xl text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-sm text-amber-950 font-light">
                29 Nov,01:20 pm
              </Text>
            </View>

            {/* Menu List */}
            <View>
              {/* item 1 */}
              <View className="flex-row items-center justify-between border-b border-orange2 py-5">
                <View className="flex-row items-center justify-center">
                  {/* Image */}
                  <View className="w-20 h-20 rounded-3xl">
                    <Image
                      source={images.frenchFriesImage}
                      className="size-full rounded-3xl"
                      resizeMode="cover"
                    />
                  </View>
                  {/* food name & price  */}
                  <View className="flex-col items-start justify-center ml-2 w-32 ">
                    <Text
                      className="text-amber-950 text-xl font-medium"
                      // numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Strawberry shake
                    </Text>
                    <Text className="text-amber-950 text-sm font-light">
                      $20.00
                    </Text>
                  </View>
                </View>
                {/* Date & Time & quantity */}
                <View>
                  <Text className="font-medium text-amber-950">29/11/24</Text>
                  <Text className="self-end font-medium text-amber-950">
                    15:00
                  </Text>
                  <View className="flex-row items-center justify-center gap-2">
                    <Pressable>
                      <Feather name="minus" size={wp("4%")} color="#E95322" />
                    </Pressable>
                    <Text>5</Text>
                    <Pressable>
                      <Feather name="plus" size={wp("4%")} color="#E95322" />
                    </Pressable>
                  </View>
                </View>
              </View>

              {/* item 2 */}
              <View className="flex-row items-center justify-between border-b border-orange2 py-5">
                <View className="flex-row items-center justify-center">
                  {/* Image */}
                  <View className="w-20 h-20 rounded-3xl">
                    <Image
                      source={images.frenchFriesImage}
                      className="size-full rounded-3xl"
                      resizeMode="cover"
                    />
                  </View>
                  {/* food name & price  */}
                  <View className="flex-col items-start justify-center ml-2 w-32 ">
                    <Text
                      className="text-amber-950 text-xl font-medium"
                      // numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Strawberry shake
                    </Text>
                    <Text className="text-amber-950 text-sm font-light">
                      $20.00
                    </Text>
                  </View>
                </View>
                {/* Date & Time & quantity */}
                <View>
                  <Text className="font-medium text-amber-950">29/11/24</Text>
                  <Text className="self-end font-medium text-amber-950">
                    15:00
                  </Text>
                  <View className="flex-row items-center justify-center gap-2">
                    <Pressable>
                      <Feather name="minus" size={wp("4%")} color="#E95322" />
                    </Pressable>
                    <Text>5</Text>
                    <Pressable>
                      <Feather name="plus" size={wp("4%")} color="#E95322" />
                    </Pressable>
                  </View>
                </View>
              </View>

            </View>

            {/* total */}
            <View className="pt-5">
              <View className="border-b border-orange2 pb-5">
                <View className="flex-row items-center justify-between">
                  <Text className="text-xl font-medium text-amber-950 pb-2">Subtotal</Text>
                  <Text className="text-xl font-medium text-amber-950">$32.00</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-xl font-medium text-amber-950 pb-2">Tax and Fees</Text>
                  <Text className="text-xl font-medium text-amber-950">$5.00</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-xl font-medium text-amber-950 pb-2">Delivery</Text>
                  <Text className="text-xl font-medium text-amber-950">$3.00</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-5">
                <Text className="text-xl font-medium text-amber-950">Total</Text>
                <Text className="text-xl font-medium text-amber-950">$40.00</Text>
              </View>
            </View>
            <View className="mt-10">
              <Pressable className="w-32 py-1 bg-orange-100 rounded-3xl self-center">
                <Text className="text-orangeBase self-center">Order Again</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
