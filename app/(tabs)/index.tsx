import { images } from "@/constants/images";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-yellowBase">
      {/* Header */}
      <View className="mt-10 px-5">
        {/* top header */}
        <View className="flex-row justify-around items-center mt-5">
          {/* search */}
          <View>
            <TextInput
              placeholder="Search"
              className="min-w-[200px] bg-white rounded-full p-2"
            />
          </View>

          {/* Header menu */}
          <View className="flex-row items-center justify-between gap-3">
            <Pressable className="bg-white p-1 rounded-xl">
              <IconIonicons name="cart-outline" color={"#E95322"} size={25} />
            </Pressable>
            <Pressable className="bg-white p-1 rounded-xl">
              <IconSimpleLineIcons name="bell" color={"#E95322"} size={25} />
            </Pressable>
            <Pressable className="bg-white p-1 rounded-xl">
              <IconIonicons name="person-outline" color={"#E95322"} size={25} />
            </Pressable>
          </View>
        </View>

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
      <View className="flex-1 bg-white rounded-t-3xl px-5">
        {/* menu content */}
        <View className="flex-row justify-around items-center py-5 border-b border-orange2">
          <View className="items-center">
            <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
              <Image source={images.snackIcon} resizeMode="cover" />
            </View>
            <Text className="text-amber-950">Snacks</Text>
          </View>

          <View className="items-center"> 
            <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
              <Image
                source={images.mealIcon}
                resizeMode="cover"
              />
            </View>
            <Text className="text-amber-950">Meals</Text>
          </View>

          <View className="items-center">
            <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
              <Image
                source={images.veganIcon}
                resizeMode="cover"
              />
            </View>
            <Text className="text-amber-950">Vegan</Text>
          </View>

          <View className="items-center">
            <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
              <Image
                source={images.dessertIcon}
                resizeMode="cover"
              />
            </View>
            <Text className="text-amber-950">Dessert</Text>
          </View>

          <View className="items-center">
            <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
              <Image
                source={images.drinkIcon}
                resizeMode="cover"
              />
            </View>
            <Text className="text-amber-950">Drinks</Text>
          </View>

        </View>

        {/* best seller Content */}
        <View>
          {/* text content */}
          <View className="my-2">
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-amber-950 font-bold text-2xl">Best Seller</Text>
              <View className="flex-row items-center">
                <Pressable>
                  <Text className="text-orangeBase font-bold">View All </Text>
                </Pressable>
                <Icon name="keyboard-arrow-right" size={28} color="#E95322"/>
              </View>
            </View>

            {/* food image */}
            <View>
              
            </View>
          </View>

          {/* discount content */}
          <View>
            
          </View>
        </View>

      </View>
    </View>
  );
}
