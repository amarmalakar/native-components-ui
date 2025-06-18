import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useColors from '../_hooks/use-colors';
import Spacing from '../_confings/Spacing';
import { user } from '../_data';
import { Ionicons } from '@expo/vector-icons';
import FontSize from '../_confings/FontSize';
import Font from '../_confings/Font';

export default function Header() {
  const colors = useColors();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: Spacing.borderRadius.xxl,
          }}
          source={user.profile}
        />
      </TouchableOpacity>

      <View
        style={{
          width: "65%",
        }}
      >
        <Text
          style={{
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            color: colors.textGray,
          }}
        >
          Welcome back!
        </Text>
        <Text
          style={{
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          {user.name} 👋
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: 60,
          width: 60,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: Spacing.borderRadius.xxl,
          borderColor: colors.border,
        }}
      >
        <Ionicons
          name='notifications-outline'
          size={FontSize.xl}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  )
}