import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Spacing from '../_confings/Spacing'
import useColors from '../_hooks/use-colors';
import { Ionicons } from '@expo/vector-icons';
import FontSize from '../_confings/FontSize';

export default function Search() {
  const colors = useColors();
  return (
    <View
      style={{
        marginVertical: Spacing.margin.lg,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.lightBackground,
        padding: Spacing.padding.base,
        borderRadius: Spacing.borderRadius.base,
      }}
    >
      <Ionicons
        name='search-outline'
        size={FontSize.xl}
        color={colors.textGray}
      />
      <TextInput
        style={{
          fontSize: FontSize.lg,
          width: "85%",
          marginLeft: Spacing.margin.base,
        }}
        placeholder='Search'
        placeholderTextColor={colors.textGray}
      />
    </View>
  )
}