import { useRouter } from "expo-router";
import { Settings2 } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const GeneralInformation = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mode1, setMode1] = useState<"faq" | "contact">("faq");
  const [mode2, setMode2] = useState<"general" | "account" | "service">("general");

  const contentAnims = useRef(
    [...Array(5)].map(() => new Animated.Value(0))
  ).current;
  // Toggle function แบบ Single Expand
  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      // ปิด item เดิม
      Animated.timing(contentAnims[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setOpenIndex(null);
    } else {
      // ปิด item เก่าถ้ามี
      if (openIndex !== null) {
        Animated.timing(contentAnims[openIndex], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }

      // เปิด item ใหม่
      Animated.timing(contentAnims[index], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setOpenIndex(index);
    }
  };

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
          <View>
            <Text className="text-center font-black text-3xl text-white">
              Help Center
            </Text>
            <Text className="text-center font-bold text-sm text-orangeBase pt-2">
              How Can We Help You?
            </Text>
          </View>
        </View>

        {/* content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          bounces={false}
          overScrollMode="never"
          contentContainerStyle={{ paddingBottom: 70 }}
          className="flex-1 bg-white rounded-3xl mt-3 pt-10"
        >
          <View className="px-5 gap-10">
            <View className="w-full flex-col items-center justify-between px-5 gap-4">
              <View className="w-full flex-row items-center justify-between gap-2">
                <View
                  className={`flex-1 rounded-3xl px-3 py-1 ${mode1 === "faq" ? "bg-orangeBase" : "bg-orange-100"}`}
                >
                  <Pressable onPress={() => setMode1("faq")}>
                    <Text
                      className={`text-center font-medium text-lg ${mode1 === "faq" ? "text-white" : "text-orangeBase"}`}
                    >
                      FAQ
                    </Text>
                  </Pressable>
                </View>
                <View
                  className={`flex-1 rounded-3xl px-3 py-1 ${mode1 === "contact" ? "bg-orangeBase" : "bg-orange-100"}`}
                >
                  <Pressable onPress={() => setMode1("contact")}>
                    <Text
                      className={`text-center font-medium text-lg ${mode1 === "contact" ? "text-white" : "text-orangeBase"}`}
                    >
                      Contact US
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View className="w-full flex-row items-center justify-between gap-2">
                <View
                  className={`flex-1 rounded-3xl px-3 py-1 ${mode2 === "general" ? "bg-orangeBase" : "bg-orange-100"}`}
                >
                  <Pressable onPress={() => setMode2("general")}>
                    <Text
                      className={`text-center font-medium ${mode2 === "general" ? "text-white" : "text-orangeBase"}`}
                    >
                      General
                    </Text>
                  </Pressable>
                </View>
                <View
                  className={`flex-1 rounded-3xl px-3 py-1 ${mode2 === "account" ? "bg-orangeBase" : "bg-orange-100"}`}
                >
                  <Pressable onPress={() => setMode2("account")}>
                    <Text
                      className={`text-center font-medium ${mode2 === "account" ? "text-white" : "text-orangeBase"}`}
                    >
                      Account
                    </Text>
                  </Pressable>
                </View>
                <View
                  className={`flex-1 rounded-3xl px-3 py-1 ${mode2 === "service" ? "bg-orangeBase" : "bg-orange-100"}`}
                >
                  <Pressable onPress={() => setMode2("service")}>
                    <Text
                      className={`text-center font-medium ${mode2 === "service" ? "text-white" : "text-orangeBase"}`}
                    >
                      Services
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* Input */}
              <View className="w-full flex-row items-center rounded-3xl px-2 border border-gray-200">
                <TextInput
                  placeholder="Search"
                  className="flex-1 px-4 py-2 rounded-3xl"
                />
                <Pressable className="bg-orangeBase rounded-full ml-1 p-1">
                  <Settings2 size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* List menu */}
            <View className="flex-col justify-center px-5">
              {[...Array(5)].map((_, index) => {
                const contentHeight = contentAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 80],
                });
                const contentOpacity = contentAnims[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                });

                return (
                  <View key={index} className="border-t border-orange2">
                    <Pressable
                      className="flex-row items-center justify-between py-3"
                      onPress={() => toggleAccordion(index)}
                    >
                      <Text className="font-medium text-xl text-orangeBase">
                        Lorem ipsum, dolor sit amet?
                      </Text>
                      <Animated.View
                        style={{
                          transform: [
                            {
                              rotate: openIndex === index ? "180deg" : "0deg",
                            },
                          ],
                        }}
                      >
                        <MaterialIcons
                          name="keyboard-arrow-up"
                          size={20}
                          color="#E95322"
                        />
                      </Animated.View>
                    </Pressable>

                    <Animated.View
                      style={{
                        height: contentHeight,
                        opacity: contentOpacity,
                        overflow: "hidden",
                      }}
                    >
                      <Text className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium ipsa saepe, a molestias ducimus sapiente
                        eius commodi totam repellendus quaerat!
                      </Text>
                    </Animated.View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GeneralInformation;
