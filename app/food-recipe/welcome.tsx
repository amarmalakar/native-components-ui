import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from './_configs/COLORS'
import SPACE from './_configs/SPACE';
import { useRouter } from 'expo-router';

const { SPACING } = SPACE;

export default function FoodRecipeWelcome() {
  const router = useRouter()
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("./_images/pexels-william-choquette-2641886.jpeg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "800",
              fontSize: SPACING * 4.5,
              textTransform: "capitalize",
            }}
          >
            Let your favorite food find you
          </Text>
          <Text
            style={{
              color: colors.white,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
          </Text>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
            onPress={() => router.replace("/food-recipe")}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Explorer Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}