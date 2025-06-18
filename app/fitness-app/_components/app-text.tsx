import { View, Text, TextProps, StyleProp, TextStyle } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../_configs/Colors'
import Font from '../_configs/Font'
import FontSize from '../_configs/FontSize'

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

export default function AppText({ children, style, ...OtherProps }: Props) {
  return (
    <Text
      style={[
        {
          color: Colors.text,
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.base,
        },
        style,
      ]}
      {...OtherProps}
    >
      {children}
    </Text>
  )
}