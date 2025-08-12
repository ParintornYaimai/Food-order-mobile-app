import Header from "@/components/Header";
import { images } from "@/constants/images";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-yellowBase">
      {/* Header */}
      <View className="mt-10 px-5">
        {/* top header */}
        <Header/>
        
        {/* Text */}
        <View className="my-5 px-5">
          <Text className="text-start text-white text-4xl font-black">
            Good Morning
          </Text>
          <Text className="text-start text-orangeBase font-bold">
            Rise And Shine! it's Breakfast Time
          </Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 bg-white rounded-t-3xl px-5"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View>
          {/* menu content */}
          <View className="flex-row justify-around items-center py-5">
            <View className="items-center">
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.snackIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Snacks</Text>
            </View>

            <View className="items-center" >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.mealIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Meals</Text>
            </View>

            <View className="items-center">
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.veganIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Vegan</Text>
            </View>

            <View className="items-center">
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.dessertIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Dessert</Text>
            </View>

            <View className="items-center">
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.drinkIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Drinks</Text>
            </View>
          </View>

          {/* border */}
          <View className="border border-orange2 mx-4"></View>

          {/* best seller Content */}
          <View>
            {/* text content */}
            <View className="my-2">
              <View className="flex-row items-center justify-between px-5 my-2">
                <Text className="text-amber-950 font-bold text-2xl">
                  Best Seller
                </Text>
                <View className="flex-row items-center">
                  <Pressable>
                    <Text className="text-orangeBase font-bold">View All </Text>
                  </Pressable>
                  <Icon name="keyboard-arrow-right" size={28} color="#E95322" />
                </View>
              </View>

              {/* food image */}
              <View className="flex-row items-center justify-around px-2 pt-1">
                <View className="relative w-20 h-32 rounded-3xl overflow-hidden">
                  <Image
                    source={images.sushiImage}
                    className="w-full h-full rounded-3xl"
                    resizeMode="cover"
                  />
                  <Text className="absolute bottom-5 right-0 bg-orangeBase text-white font-bold px-2  rounded-tl-xl rounded-bl-xl">
                    $103.0
                  </Text>
                </View>
                <View className="relative  w-20 h-32  rounded-3xl overflow-hidden">
                  <Image
                    source={images.pizza}
                    className="w-full h-full rounded-3xl"
                    resizeMode="cover"
                  />
                  <Text className="absolute bottom-5 right-0 bg-orangeBase text-white font-bold px-2 rounded-tl-xl rounded-bl-xl">
                    $50.0
                  </Text>
                </View>
                <View className="relative  w-20 h-32  rounded-3xl overflow-hidden">
                  <Image
                    source={images.frenchFriesImage}
                    className="w-full h-full rounded-3xl"
                    resizeMode="cover"
                  />
                  <Text className="absolute bottom-5 right-0 bg-orangeBase text-white font-bold px-2 rounded-tl-xl rounded-bl-xl">
                    $12.00
                  </Text>
                </View>
                <View className="relative  w-20 h-32  rounded-3xl overflow-hidden">
                  <Image
                    source={images.pancakeImage}
                    className="w-full h-full rounded-3xl"
                    resizeMode="cover"
                  />
                  <Text className="absolute bottom-5 right-0 bg-orangeBase text-white font-bold px-2 rounded-tl-xl rounded-bl-xl">
                    $8.20
                  </Text>
                </View>
              </View>
            </View>

            {/* discount content */}
            <View className="flex-row items-center justify-center bg-orangeBase mt-5 rounded-3xl self-center mx-5">
              <View className="w-1/2 items-center justify-center pl-2">
                <Text className="font-medium text-white text-center">
                  Experience our{"\n"}delicious new dish
                </Text>
                <Text className="text-4xl font-bold text-white text-center pt-2">
                  30% OFF
                </Text>
              </View>
              <View className="w-1/2">
                <Image
                  source={images.discountPizza}
                  className="rounded-tr-3xl rounded-br-3xl"
                  resizeMode="cover"
                  style={{width: wp(42), height: hp(13)}}
                />
              </View>
            </View>

            <View className="flex-row items-center justify-center gap-2 mt-2">
              <View className="bg-yellow2 w-7 h-1 rounded-xl"></View>
              <View className="bg-yellow2 w-7 h-1 rounded-xl"></View>
              <View className="bg-orangeBase w-7 h-1 rounded-xl"></View>
              <View className="bg-yellow2 w-7 h-1 rounded-xl"></View>
              <View className="bg-yellow2 w-7 h-1 rounded-xl"></View>
            </View>
          </View>

          {/* Recommend */}
          <View className="w-full self-center px-5">
            {/* Recommend Text */}
            <View>
              <Text className="text-amber-950 font-bold text-2xl py-5">Recommend</Text>
            </View>

            {/* Recommend food */}
            <View className="w-full flex-wrap items-center justify-center gap-2">
              <View className="w-full flex-row items-center justify-center gap-2">
                {/* Card1 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food1}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$10.0</Text>
                  </View>
                </View>

                {/* Card2 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food2}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$25.0</Text>
                  </View>
                </View>
              </View>
              <View className="w-full flex-row items-center justify-center gap-2">
                {/* Card1 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food1}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$10.0</Text>
                  </View>
                </View>

                {/* Card2 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food2}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$25.0</Text>
                  </View>
                </View>
              </View>
              <View className="w-full flex-row items-center justify-center gap-2">
                {/* Card1 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food1}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$10.0</Text>
                  </View>
                </View>

                {/* Card2 */}
                <View
                  className="w-1/2 relative rounded-3xl overflow-hidden"
                  // style={{ width: wp(50) }}
                >
                  <Image
                    source={images.food2}
                    resizeMode="cover"
                    style={{ width: "100%", height: hp(15) }}
                  />
                  <View className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded-full flex-row items-center gap-1">
                    <Text className="text-xs font-bold">5.0</Text>
                    <Text className="text-xs">⭐</Text>
                  </View>
                  <View className="absolute top-2 right-4 bg-white/80 p-1 rounded-full flex-row items-center">
                    <Text className="text-xs text-red-500">❤️</Text>
                  </View>
                  {/* Price */}
                  <View className="absolute bottom-5 right-0 bg-orangeBase px-2 py-1 rounded-full rounded-tr-xl rounded-br-xl">
                    <Text className="text-white/80 text-sm ">$25.0</Text>
                  </View>
                </View>
              </View>

              
            </View>

          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}
