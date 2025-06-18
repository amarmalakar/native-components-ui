import { View, Text } from 'react-native'
import React from 'react'
import Font from '../_confings/Font'
import FontSize from '../_confings/FontSize'
import Spacing from '../_confings/Spacing'
import { Channels } from '../_data'
import HorizontalItems from './horizontal-items'

export default function HotNews() {
  return (
    <View>
      <Text
        style={{
          fontFamily: Font["poppins-bold"],
          fontSize: FontSize.xl,
          marginBottom: Spacing.margin.base,
        }}
      >
        Hot News
      </Text>
      <HorizontalItems items={Channels} showAddButton />
    </View>
  )
}