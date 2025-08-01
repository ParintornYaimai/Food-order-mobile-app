import React from "react";
import { Pressable, TextInput, View } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Header = () => {
  return (
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
  );
};

export default Header;
