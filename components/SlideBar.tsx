import order from '';
import { useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function Sidebar({ isVisible, onClose }: Props) {
  const insets = useSafeAreaInsets();
  const slideAnim = React.useRef(new Animated.Value(width)).current; // เริ่มจากขวา
  const router = useRouter()
  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : width, 
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Modal visible={isVisible} transparent animationType="none">
      {/* Overlay */}
      <Pressable
        className="flex-1 bg-black/50"
        onPress={onClose}
        style={{ position: "absolute", width, height }}
      />

      {/* Sidebar */}
      <Animated.View
        className="absolute top-0 h-full bg-orangeBase shadow-lg"
        style={{
          width: width * 0.8,
          right: 0,
          transform: [{ translateX: slideAnim }],
          borderTopLeftRadius: 60,
          borderBottomLeftRadius: 60,
        }}
      >
        {/* StatusBar padding */}
        <View style={{ paddingTop: insets.top + 8 }} className="px-5 pb-4">
          {/* Back Button + Profile */}
        <View className=" pb-8">
          <Pressable onPress={onClose} className="mb-6">
            <Icon name="arrow-back" size={24} color="white" />
          </Pressable>

          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-white rounded-full mr-4 overflow-hidden items-center justify-center">
              <Icon name="person" size={20} color="#666" />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">John Smith</Text>
              <Text className="text-white/80 text-sm">
                Loremipsum@email.com
              </Text>
            </View>
          </View>
        </View>
        </View>

        

        {/* Menu Items */}
        <View className="flex-1 px-6">
          {[
            { icon: "shopping-bag", title: "My Orders",navigate:'(tabs)/myOrder' },
            { icon: "person", title: "My Profile", navigate:'(profile)/'},
            { icon: "location-on", title: "Delivery Address", navigate:'(deliveryAddress)/'},
            { icon: "credit-card", title: "Payment Methods", navigate:'(payment)/'},
            { icon: "phone", title: "Contact Us", navigate:'' },
            { icon: "help", title: "Help & FAQs",navigate:'(tabs)/helpCenter/' },
            { icon: "settings", title: "Settings",navigate:'(setting)/'},
          ].map((item, idx) => (
            <View key={idx}>
              <Pressable
                className="flex-row items-center py-4"
                android_ripple={{ color: "rgba(255,255,255,0.1)" }}
                onPress={() => router.push(item.navigate)}
              >
                <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4">
                  <Icon name={item.icon} size={20} color="#E95322" />
                </View>
                <Text className="text-white text-lg font-medium">
                  {item.title}
                </Text>
              </Pressable>
              <View className="h-px bg-white/20 ml-14" />
            </View>
          ))}

          {/* Logout */}
          <View className="mt-auto mb-8">
            <Pressable
              className="flex-row items-center py-4"
              android_ripple={{ color: "rgba(255,255,255,0.1)" }}
            >
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4">
                <Icon name="logout" size={20} color="#ef4444" />
              </View>
              <Text className="text-white text-lg font-medium">Log Out</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
}
