import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "react-native-vector-icons/EvilIcons";
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          bounces={false}
          overScrollMode="never"
          contentContainerStyle={{ paddingBottom: 50 }}
          className="flex-1 bg-white rounded-3xl mt-5 pt-10"
        >
          {/* history 1 */}
          <View className="mx-10 mt-5 border-t border-orange2" />
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
          <View className="mx-10 my-5">
            {/* Title & price */}
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-start text-amber-950 font-medium">
                Order No. 0054752
              </Text>
              <Text className="text-2xl text-end text-orangeBase font-normal">
                {" "}
                $50.00
              </Text>
            </View>

            {/* Date & quantity */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-start text-amber-950 font-light">
                29 Nov, 01:20 pm
              </Text>
              <Text className="text-sm text-end text-amber-950 font-light">
                2 items
              </Text>
            </View>

            {/* status & detail Button */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center">
                <EvilIcons
                  name="check"
                  size={wp("4%")}
                  color="#E95322"
                  className="pb-1"
                />
                <Text className="text-sm text-start text-orangeBase font-light">
                  Order delivered
                </Text>
              </View>
              <View className="mt-2">
                <Pressable className="bg-orangeBase px-4 rounded-3xl">
                  <Text className="text-white ">Details</Text>
                </Pressable>
              </View>
            </View>
            <View className="border-t border-orange2 mt-10" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default history;
