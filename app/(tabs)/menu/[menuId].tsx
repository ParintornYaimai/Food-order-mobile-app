import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIconsIconsIcon from "react-native-vector-icons/SimpleLineIcons";

const MenuDetailHeader = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1)

  const handleBack = () => {
    router.back();
  };

  const handleFavorite = () => {
    console.log("Favorite clicked");
  };
  
  //เพิ่มจำนวนสินค้า
  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  //ลดจำนวนสินค้า
  const decrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev)); // ลดได้ถ้า >1 เท่านั้น
  };


  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      {/* Header */}
      <View className="my-5 px-5">
        {/* Header Top Row */}
        <View className="flex-row items-center justify-between">
          {/* Left: Back + Title + Dot */}
          <View className="flex-row items-center gap-2 ">
            <Pressable onPress={handleBack}>
              <MaterialIconsIcon
                name="keyboard-arrow-left"
                size={24}
                color="#E95322"
              />
            </Pressable>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-2xl font-bold text-amber-950 max-w-[65%]"
            >
              Mexicon Appetizer
            </Text>
            <View className="bg-orangeBase w-2 h-2 rounded-full ml-1" />
          </View>

          {/* Right: Heart Button */}
          <Pressable
            onPress={handleFavorite}
            className="w-7 h-7 bg-orangeBase rounded-full justify-center items-center"
          >
            <EntypoIcon name="heart" size={15} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Rating */}
        <View className="self-start ml-9 rounded-3xl">
          <Text className="bg-orangeBase text-white px-2 py-0.5 rounded-3xl text-sm">
            5.0 ⭐
          </Text>
        </View>
      </View>

      {/* content */}
      <View className="flex-1 bg-white rounded-3xl">
        <View className="px-5">
          {/* Food image */}
          <View className="px-5">
            <View className="w-full py-10">
              <Image
                source={images.pizza}
                resizeMode="cover"
                className="w-full h-72 self-center rounded-3xl"
              />
            </View>
            <View className="flex-row items-center justify-between border-b border-orange2 mb-3">
              <Text className="text-2xl font-black text-orangeBase">
                $50.00
              </Text>
              <View className="flex-row items-center gap-5 mb-3 mt-3">
                <Pressable className="bg-orangeBase rounded-full"  onPress={()=> decrement()}>
                  <Text className="text-white font-bold text-2xl px-3">-</Text>
                </Pressable>
                <Text className="text-2xl font-bold">{quantity}</Text>
                <Pressable className="bg-orangeBase rounded-full" onPress={()=>  increment()}>
                  <Text className="text-white font-bold text-2xl px-2">+</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* food detail */}
          <View className="px-5">
            <Text className="text-md font-bold">Pizza</Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, voluptates sed debitis culpa amet ipsa necessitatibus
              maxime voluptas provident totam.
            </Text>
          </View>

          {/* menu */}
          <View className="w-full px-5 mt-5">
            <View>
              <Text className="text-xl font-bold ">Toppings</Text>
            </View>
            {/* first Tab */}
            <View className="w-full flex-row items-center justify-between py-2">
              {/* Toping name */}
              <View>
                <Text className="text-xl">Guacamole</Text>
              </View>

              {/* เส้นขอบคั่นแนวตั้ง */}
              <View className="w-44 border-b-2 border-dotted border-orange2 my-2" />

              {/* Price & checkBox */}
              <View className="flex flex-row items-center gap-4">
                <Text>$2.09</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center"
                >
                  <View className="border border-orange-400 p-2 rounded-full" />
                </Pressable>
              </View>
            </View>
            <View className="w-full flex-row items-center justify-between py-2">
              {/* Toping name */}
              <View>
                <Text className="text-xl">Guacamole</Text>
              </View>

              {/* เส้นขอบคั่นแนวตั้ง */}
              <View className="w-44 border-b-2 border-dotted border-orange2 my-2" />

              {/* Price & checkBox */}
              <View className="flex flex-row items-center gap-4">
                <Text>$2.09</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center"
                >
                  <View className="border border-orange-400 p-2 rounded-full" />
                </Pressable>
              </View>
            </View>
            <View className="w-full flex-row items-center justify-between py-2">
              {/* Toping name */}
              <View>
                <Text className="text-xl">Guacamole</Text>
              </View>

              {/* เส้นขอบคั่นแนวตั้ง */}
              <View className="w-44 border-b-2 border-dotted border-orange2 my-2" />

              {/* Price & checkBox */}
              <View className="flex flex-row items-center gap-4">
                <Text>$2.09</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center"
                >
                  <View className="border border-orange-400 p-2 rounded-full" />
                </Pressable>
              </View>
            </View>
            <View className="w-full flex-row items-center justify-between py-2">
              {/* Toping name */}
              <View>
                <Text className="text-xl">Guacamole</Text>
              </View>

              {/* เส้นขอบคั่นแนวตั้ง */}
              <View className="w-44 border-b-2 border-dotted border-orange2 my-2" />

              {/* Price & checkBox */}
              <View className="flex flex-row items-center gap-4">
                <Text>$2.09</Text>
                <Pressable
                  onPress={() => console.log("active")}
                  className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center"
                >
                  <View className="border border-orange-400 p-2 rounded-full" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Add to cart button */}
        <Pressable className="self-center flex-row items-center bg-orangeBase px-6 py-1 gap-4 mt-2 rounded-full">
          <SimpleLineIconsIconsIcon name="handbag" size={15} color="#fff" />
          <Text className="text-white font-medium text-xl">Add to Cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MenuDetailHeader;
