import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#E95322",
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          paddingTop: 15,
          paddingBottom: 20,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 0,
        },
      }}
    >
      {[
        { name: "index", icon: images.homeIcon },
        { name: "menu", icon: images.menuIcon },
        { name: "favoritesOrder", icon: images.favIcon },
        { name: "myOrder", icon: images.myOrderIcon },
        { name: "helpCenter", icon: images.helpCenterIcon },
      ].map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View
                style={{
                  padding: 10,
                  // borderRadius: 50,
                }}
              >
                <Image
                  source={tab.icon}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
