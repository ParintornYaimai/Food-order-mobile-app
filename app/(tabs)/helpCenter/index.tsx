import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const helpCenter = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      <View className="flex-1">
        {/* header */}
        <View className="flex-row items-center justify-center py-2 px-4 mt-5 mx-5">
          <Pressable onPress={() => router.back()} className="absolute left-4">
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="#E95322"
            />
          </Pressable>
          <Text className="text-center font-black text-3xl text-white">
            Help
          </Text>
        </View>

        {/* Content */}
        <View className="flex-1 bg-white rounded-3xl mt-5 pt-10">
          <View className="flex-1 bg-white rounded-3xl mt-5 px-10">
            <View className="w-full border-b border-orange2 pb-5">
              <Text className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
                molestias magnam commodi, vel iure.
              </Text>
            </View>
            <View>
              {/* support */}
              <Pressable className="flex-row items-center justify-between border-b border-orange2 py-5" onPress={()=>router.push('./helpCenter/support')}>
                <View>
                  <Text className="text-2xl font-medium text-amber-950">Help with the order</Text>
                  <Text className="font-light text-amber-950">Support</Text>
                </View>
                {/* Incon */}
                <View>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#E95322"
                  />
                </View>
              </Pressable>

              {/* General information */}
              <Pressable className="flex-row items-center justify-between border-b border-orange2 py-5" onPress={()=>router.push('./helpCenter/generalInformation')}>
                <View>
                  <Text className="text-2xl font-medium text-amber-950">Help center</Text>
                  <Text className="font-light text-amber-950">General Information</Text>
                </View>
                {/* Incon */}
                <View>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#E95322"
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default helpCenter;
