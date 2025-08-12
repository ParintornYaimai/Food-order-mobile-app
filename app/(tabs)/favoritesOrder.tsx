import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const favoritesOrder = () => {
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
            Best Seller
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
          className="flex-1 rounded-3xl bg-white mt-5"
        >
          <View>
            {/* Text content */}
            <View className="my-5">
              <Text className="text-center text-xl md:text-2xl text-orangeBase font-bold">
                Discover our most popular dishes!
              </Text>
            </View>

            {/* menu content */}
            <View className="px-5">
              {/* layout 2Box */}
              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full flex-row items-stretch justify-center gap-2 px-5 mb-5">
                {/* first menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>

                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>

                </View>

                {/* second menu */}
                <View className="w-1/2">
                  {/* Image & category icon & price */}
                  <View
                    className="relative rounded-3xl overflow-hidden"
                    style={{ width: wp('41.5%'), height: hp('15%') }}
                  >
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-full h-full"
                    />

                    {/* food category icon & fav icon */}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322" />
                      </View>
                      <View className="bg-white p-1 rounded-full">
                        <EntypoIcon name="heart" size={15} color="#E95322" />
                      </View>
                    </View>

                    {/* price */}
                    <View className="absolute right-0 bottom-5 bg-orangeBase px-1 rounded-l-full">
                      <Text className="text-white font-medium">$14.50</Text>
                    </View>
                  </View>
                  {/* menu detail */}
                  <View className="w-full flex-1 px-2 mt-3">
                    {/* Title & rating */}
                    <View className="flex-row items-center justify-between pb-1 px-2">
                      <Text
                        className="text-md font-medium flex-1 truncate"
                        numberOfLines={1} // ถ้าใช้ React Native
                      >
                        Sunny Bruschetta
                      </Text>
                      <View className="bg-orangeBase px-1 rounded-3xl ml-2">
                        <Text className="text-sm text-white">5.0⭐</Text>
                      </View>
                    </View>

                    {/* description & cartIcon */}
                    <View className="flex-row items-center justify-between px-2">
                      <Text className="text-xs font-light line-clamp-2 flex-1 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus.
                      </Text>
                      <View className="bg-orangeBase rounded-md">
                        <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>


            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default favoritesOrder;
