import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacing from '../_configs/Spacing'
import AppText from './app-text'
import FontSize from '../_configs/FontSize';
import Colors from '../_configs/Colors';

export default function SectionHeader({ title }: {
  title?: string;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Spacing.margin.lg,
      }}
    >
      <AppText>{title}</AppText>
      <TouchableOpacity>
        <AppText
          style={{
            fontSize: FontSize.sm,
            color: Colors.accent,
          }}
        >
          See all
        </AppText>
      </TouchableOpacity>
    </View>
  )
}