import { View, Text } from 'react-native'
import React from 'react'
import useColors from '../_hooks/use-colors';
import Spacing from '../_confings/Spacing';

export default function Dot() {
  const colors = useColors();
  return (
    <View
      style={{
        width: 5,
        height: 5,
        backgroundColor: colors.textGray,
        marginHorizontal: Spacing.margin.base,
        borderRadius: Spacing.borderRadius.base,
      }}
    />
  )
}