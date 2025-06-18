import { View, Text, TextInput } from 'react-native'
import React from 'react'
import SPACE from '../_config/SPACE';
import { BlurView } from 'expo-blur';
import colors from '../_config/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const { SPACING } = SPACE;

export default function SearchField() {
  return (
    <View
      style={{
        borderRadius: SPACING,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: SPACING,
          }}
          name="search"
          color={colors.light}
          size={SPACING * 2}
        />
      </BlurView>
    </View>
  )
}