import React from 'react'
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const router = useRouter()
  return <>
    <TouchableOpacity style={{
      position: "absolute",
      bottom: 30,
      right: 10,
      width: 60,
      height: 60,
      backgroundColor: "rgb(0, 122, 255)",
      zIndex: 1000,
      padding: 10,
      borderRadius: "100%",

      // iOS shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      // Android shadow
      elevation: 5,

      alignItems: "center",
      justifyContent: "center"
    }}
      onPress={() => router.replace("/")}
    >
      <Ionicons
        name="home"
        color="white"
        size={24}
      />
    </TouchableOpacity>

    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  </>;
}
