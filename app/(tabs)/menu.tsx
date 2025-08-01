import Header from "@/components/Header";
import { images } from "@/constants/images";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const Menu = () => {
  const [mode, setMode] = useState<
    "snack" | "meal" | "vegan" | "dessert" | "drink"
  >("snack");

  return (
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
        <View className="flex-1 bg-white rounded-t-3xl">
        

        </View>
      </View>
    </View>
  );
};

export default Menu;
