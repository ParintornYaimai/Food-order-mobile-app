import Header from "@/components/Header";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Settings2 } from "lucide-react-native";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const Menu = () => {
  const [mode, setMode] = useState< "snack" | "meal" | "vegan" | "dessert" | "drink" >("snack");

  return (
    // <SafeAreaView className="flex-1">
      <View className="flex-1 bg-yellowBase">
        {/* Header */}
        <View className="mt-10 mb-10 px-5">
          <Header />
        </View>

        {/* Food category */}
        <View className="flex-1 bg-orangeBase rounded-t-3xl">
          <View className="flex-row justify-around items-center pt-5 py-2 px-5">
            <Pressable
              className={`items-center ${mode === "snack" && "px-2 pt-2 rounded-t-3xl bg-white"}`}
              onPress={() => setMode("snack")}
            >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.snackIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Snacks</Text>
            </Pressable>

            <Pressable
              className={`items-center ${mode === "meal" && "px-2 pt-2 rounded-t-3xl bg-white"}`}
              onPress={() => setMode("meal")}
            >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.mealIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Meals</Text>
            </Pressable>

            <Pressable
              className={`items-center ${mode === "vegan" && "px-2 pt-2 rounded-t-3xl bg-white"}`}
              onPress={() => setMode("vegan")}
            >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.veganIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Vegan</Text>
            </Pressable>

            <Pressable
              className={`items-center ${mode === "dessert" && "px-2 pt-2 rounded-t-3xl bg-white"}`}
              onPress={() => setMode("dessert")}
            >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.dessertIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Dessert</Text>
            </Pressable>

            <Pressable
              className={`items-center ${mode === "drink" && "px-2 pt-2 rounded-t-3xl bg-white"}`}
              onPress={() => setMode("drink")}
            >
              <View className="w-14 items-center bg-yellow2 px-2 py-3 rounded-3xl mb-1">
                <Image source={images.drinkIcon} resizeMode="cover" />
              </View>
              <Text className="text-amber-950">Drinks</Text>
            </Pressable>
          </View>

          {/* Content */}
          <View className="flex-1 bg-white rounded-t-3xl px-5">
            <View className="flex-row justify-between items-center px-5 my-5">
              <Text>
                Sort By {"\u00A0"}
                <Text className="text-orangeBase">Popular</Text>
              </Text>
              <View className="bg-orangeBase p-1 rounded-full">
                <Settings2 size={15} color="white" />
              </View>
            </View>

            {/* menu content */}
            <View className="flex-1 px-5">
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
              >
                <View>
                  {/* Card 1 */}
                  <Link  href={{ pathname: "/(tabs)/menu/[menuId]", params: { menuId: "1" } }}  asChild>
                    <Pressable>
                      <Image
                        source={images.tacoImage}
                        style={{ height: 180, width: "100%" }}
                        className="rounded-3xl mb-2"
                        resizeMode="cover"
                      />
                      <View>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-3">
                            <Text className="text-xl font-bold">
                              Mexican Appetizer
                            </Text>
                            <View className="bg-orangeBase w-2 h-2 rounded-full"></View>
                            <Text className="bg-orangeBase rounded-2xl px-1 text-white text-sm">
                              5.0 ⭐
                            </Text>
                          </View>
                          <View>
                            <Text className="text-xl text-orangeBase font-medium">
                              $15.00
                            </Text>
                          </View>
                        </View>
                        <Text>Tortilla Chips With Toppins</Text>
                      </View>
                      <View className="border border-orange2 my-10"></View>
                    </Pressable>
                  </Link>

                  {/* Card 2 */}
                  <Link  href={{ pathname: "/(tabs)/menu/[menuId]", params: { menuId: "2" } }}  asChild>
                    <Pressable>
                      <Image
                        source={images.bbqImage}
                        style={{ height: 180, width: "100%" }}
                        className="rounded-3xl mb-2"
                        resizeMode="cover"
                      />
                      <View>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-3">
                            <Text className="text-xl font-bold">
                              Mexican Appetizer
                            </Text>
                            <View className="bg-orangeBase w-2 h-2 rounded-full"></View>
                            <Text className="bg-orangeBase rounded-2xl px-1 text-white text-sm">
                              4.0 ⭐
                            </Text>
                          </View>
                          <View>
                            <Text className="text-xl text-orangeBase font-medium">
                              $8.00
                            </Text>
                          </View>
                        </View>
                        <Text>Tortilla Chips With Toppins</Text>
                      </View>
                      <View className="border border-orange2 my-10"></View>
                    </Pressable>
                  </Link>

                  {/* Card 2 */}
                  <Link  href={{ pathname: "/(tabs)/menu/[menuId]", params: { menuId: "3" } }}  asChild>
                    <Pressable>
                      <Image
                        source={images.nachosImage}
                        style={{ height: 180, width: "100%" }}
                        className="rounded-3xl mb-2"
                        resizeMode="cover"
                      />
                      <View>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-3">
                            <Text className="text-xl font-bold">
                              Mexican Appetizer
                            </Text>
                            <View className="bg-orangeBase w-2 h-2 rounded-full"></View>
                            <Text className="bg-orangeBase rounded-2xl px-1 text-white text-sm">
                              3.5 ⭐
                            </Text>
                          </View>
                          <View>
                            <Text className="text-xl text-orangeBase font-medium">
                              $12.00
                            </Text>
                          </View>
                        </View>
                        <Text>Tortilla Chips With Toppins</Text>
                      </View>
                      <View className="border border-orange2 my-10"></View>
                    </Pressable>
                  </Link>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    // </SafeAreaView>
    
  );
};

export default Menu;
