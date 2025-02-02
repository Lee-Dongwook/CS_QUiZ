import { Tabs } from "expo-router";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const router = useRouter();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            height: 85,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "white",
            borderTopColor: "#f0f0f0",
            borderTopWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 10,
            overflow: "visible",
          },
          tabBarShowLabel: false,
        }}
      ></Tabs>
      <StatusBar style="dark" />
    </>
  );
}
