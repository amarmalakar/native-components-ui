import { View, Text, Platform, SafeAreaView, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export default function Screen({ style, children }: Props) {
  return (
    <SafeAreaView
      style={[
        {
          paddingTop: Platform.OS === "android" ? 30 : 0,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  )
}