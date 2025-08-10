import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
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
        <View className="flex-row items-center relative py-2 px-4 mt-5 mx-5">
          <Pressable onPress={handleBack}>
            <MaterialIconsIcon
              name="keyboard-arrow-left"
              size={24}
              color="#E95322"
            />
          </Pressable>
          <View className="absolute left-0 right-0">
            <Text className="text-center font-black text-3xl text-white">
              Best Seller
            </Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
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
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>
              
              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.pizza}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.bbqImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>

              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.pizza}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>

              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.bbqImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>

              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.pizza}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>

              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.frenchFriesImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.bbqImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
              </View>

              {/* layout 2Box */}
              <View className="flex-row items-center justify-between gap-2 px-5">
                {/* first menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.pizza}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
                  </View>
                </View>
                {/* second menu */}
                <View>
                  {/* Image & category icon & price */}
                  <View className="relative">
                    <Image
                      source={images.nachosImage}
                      resizeMode="cover"
                      className="w-48 h-44 rounded-3xl"
                    />
                    {/* food category icon & fav icon*/}
                    <View className="w-full absolute top-3 flex-row items-center justify-between px-2">
                      <View className="bg-white p-1 rounded-lg">
                        <Ionicons name="fast-food-outline" size={15} color="#E95322"/>
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
                  <View>
                    {/* menu title */}
                    <View>
                      <Text></Text>
                    </View>
                    {/* menu description */}
                    <View></View>

                    {/* Cart Icon */}
                    <View></View>
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
