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
  const [openContactIndex, setOpenContactIndex] = useState<number | null>(null);
  const [mode1, setMode1] = useState<"faq" | "contact">("faq");
  const [mode2, setMode2] = useState<"general" | "account" | "service">(
    "general"
  );

  const contentAnims = useRef(
    [...Array(5)].map(() => new Animated.Value(0))
  ).current;
  
  // Animation สำหรับ contact options
  const contactAnims = useRef(
    [...Array(5)].map(() => new Animated.Value(0))
  ).current;

  // Toggle function แบบ Single Expand สำหรับ FAQ
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

  // Toggle function สำหรับ Contact Options
  const toggleContactAccordion = (index: number) => {
    if (openContactIndex === index) {
      // ปิด item เดิม
      Animated.timing(contactAnims[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setOpenContactIndex(null);
    } else {
      // ปิด item เก่าถ้ามี
      if (openContactIndex !== null) {
        Animated.timing(contactAnims[openContactIndex], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }

      // เปิด item ใหม่
      Animated.timing(contactAnims[index], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setOpenContactIndex(index);
    }
  };

  const contactOptions = [
    {
      id: 1,
      title: "Customer service",
      icon: "headset-mic",
      content: "Call us at +66 2-123-4567 or email support@company.com for 24/7 customer support.",
    },
    {
      id: 2,
      title: "Website",
      icon: "language",
      content: "Visit our official website at www.company.com for more information and services.",
    },
    {
      id: 3,
      title: "Whatsapp",
      icon: "chat",
      content: "Contact us via WhatsApp at +66 81-234-5678 for quick responses.",
    },
    {
      id: 4,
      title: "Facebook",
      icon: "facebook",
      content: "Follow us on Facebook @CompanyName for updates and direct messaging.",
    },
    {
      id: 5,
      title: "Instagram",
      icon: "camera-alt",
      content: "Follow us on Instagram @company_official for latest news and photos.",
    },
  ];

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
              {mode1 === "faq" ? "Help Center" : "Contact Us"}
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
              {mode1 === "faq" ? (
                <>
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
                </>
              ) : (
                <View className="w-full gap-4">
                  {contactOptions.map((option, index) => {
                    const contactHeight = contactAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    });
                    const contactOpacity = contactAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    });

                    return (
                      <View key={option.id} className="border-b border-gray-100">
                        <Pressable
                          className="flex-row items-center justify-between py-3 px-1"
                          onPress={() => toggleContactAccordion(index)}
                        >
                          <View className="flex-row items-center flex-1">
                            <View className="w-12 h-12 rounded-full bg-orange-100 justify-center items-center mr-4">
                              <MaterialIcons
                                name={option.icon}
                                size={24}
                                color="#E95322"
                              />
                            </View>
                            <Text className="text-lg text-gray-800 font-medium">
                              {option.title}
                            </Text>
                          </View>
                          <Animated.View
                            style={{
                              transform: [
                                {
                                  rotate:
                                    openContactIndex === index ? "180deg" : "0deg",
                                },
                              ],
                            }}
                          >
                            <MaterialIcons
                              name="keyboard-arrow-down"
                              size={20}
                              color="#E95322"
                            />
                          </Animated.View>
                        </Pressable>

                        <Animated.View
                          style={{
                            height: contactHeight,
                            opacity: contactOpacity,
                            overflow: "hidden",
                          }}
                        >
                          <Text className="py-2 px-1 text-gray-600">
                            {option.content}
                          </Text>
                        </Animated.View>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>

            {/* List menu */}
            {mode1 === "faq" && (
              <>
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
                                  rotate:
                                    openIndex === index ? "180deg" : "0deg",
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium ipsa saepe, a molestias ducimus
                            sapiente eius commodi totam repellendus quaerat!
                          </Text>
                        </Animated.View>
                      </View>
                    );
                  })}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GeneralInformation;