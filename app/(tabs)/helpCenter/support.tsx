import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const support = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello!",
      time: "09:00",
      isUser: false,
      type: "simple"
    },
    {
      id: 2,
      text: "Hello, please choose the number corresponding to your needs for a more efficient service.\n\n1. Order Management\n2. Payments Management\n3. Account management and Profile\n4. About order tracking\n5. Safety",
      time: "09:00",
      isUser: true,
      type: "menu"
    },
    {
      id: 3,
      text: "1",
      time: "09:03",
      isUser: false,
      type: "simple"
    },
    {
      id: 4,
      text: "You have a current order Strawberry Shake and Broccoli Lasagna\n\nOrder No. 0054752\n29 Nov, 01:20 pm",
      time: "",
      isUser: true,
      type: "order"
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        isUser: false,
        type: "simple"
      };
      setMessages([...messages, newMessage]);
      setMessage("");
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
          <Text className="text-center font-black text-3xl text-white">
            Support
          </Text>
        </View>

        {/* content */}
        <View className="flex-1 bg-white rounded-t-3xl mt-5">
          <ScrollView className="flex-1 px-4 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
            {/* Chat Messages */}
            {messages.map((msg) => (
              <View key={msg.id}>
                {msg.isUser ? (
                  // Support messages (left side)
                  <View className="flex-row justify-start mb-4">
                    {msg.type === "menu" ? (
                      <View className="border-2 border-orange-300 rounded-2xl px-4 py-3 max-w-[85%]">
                        <Text className="text-gray-800 text-sm mb-3">
                          {msg.text.split('\n\n')[0]}
                        </Text>
                        <Text className="text-gray-700 text-sm leading-5">
                          {msg.text.split('\n\n')[1]}
                        </Text>
                      </View>
                    ) : msg.type === "order" ? (
                      <View className="border-2 border-orange-300 rounded-2xl px-4 py-3 max-w-[85%]">
                        <Text className="text-gray-800 text-sm mb-2">
                          {msg.text.split('\n\n')[0]}
                        </Text>
                        <Text className="text-gray-700 text-xs mb-3">
                          {msg.text.split('\n\n').slice(1).join('\n')}
                        </Text>
                        <View className="flex-row">
                          <Pressable className="bg-orange-100 rounded-lg px-3 py-2 mr-2">
                            <Text className="text-orange-600 text-xs font-medium">Order Issues</Text>
                          </Pressable>
                          <Pressable className="bg-orange-100 rounded-lg px-3 py-2">
                            <Text className="text-orange-600 text-xs font-medium">Order not received</Text>
                          </Pressable>
                        </View>
                      </View>
                    ) : (
                      <View className="border-2 border-orange-300 rounded-2xl px-4 py-3 max-w-[85%]">
                        <Text className="text-gray-800 text-sm">{msg.text}</Text>
                      </View>
                    )}
                  </View>
                ) : (
                  // User messages (right side)
                  <View className="flex-row justify-end mb-4">
                    <View className="bg-yellow-200 rounded-2xl px-4 py-3 max-w-[80%]">
                      <Text className="text-gray-800 text-sm">{msg.text}</Text>
                    </View>
                  </View>
                )}
                {msg.time && (
                  <Text className={`text-xs text-gray-400 mb-4 ${msg.isUser ? 'text-left' : 'text-right'}`}>
                    {msg.time}
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>

          {/* Input Area  */}
          <View className="absolute bottom-7 left-0 right-0 bg-orange-50 px-4 py-3 flex-row items-center">
            {/* Attachment button */}
            <Pressable className="mr-3">
              <MaterialIcons name="attach-file" size={24} color="#9CA3AF" />
            </Pressable>

            {/* Text input */}
            <View className="flex-1 bg-white rounded-full px-4 mr-3">
              <TextInput
                placeholder="Write Here..."
                value={message}
                onChangeText={setMessage}
                className="text-gray-700"
                multiline
              />
            </View>

            {/* Voice and Send buttons */}
            <View className="flex-row">
              <Pressable className="mr-2">
                <MaterialIcons name="mic" size={24} color="#E95322" />
              </Pressable>
              <Pressable onPress={sendMessage}>
                <MaterialIcons name="send" size={24} color="#E95322" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Bottom Navigation */}
        <View className="bg-orange-100 flex-row justify-around items-center py-3">
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default support;