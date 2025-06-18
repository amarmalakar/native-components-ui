import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import Colors from '../_configs/Colors';
import Spacing from '../_configs/Spacing';

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  name: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export default function IconButton({
  style,
  size = 24,
  color = Colors.text,
  name,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: Colors.border,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: Spacing.borderRadius.base,
        },
        style,
      ]}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}