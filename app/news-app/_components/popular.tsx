import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacing from '../_confings/Spacing'
import FontSize from '../_confings/FontSize'
import Font from '../_confings/Font'
import useColors from '../_hooks/use-colors'
import HorizontalNewsList from './horizontal-news-list'
import { useRouter } from 'expo-router'

export default function Popular() {
  const router = useRouter()
  const colors = useColors();
  return (
    <View
      style={{
        paddingVertical: Spacing.margin.lg,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-bold"],
          }}
        >
          Popular
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/news-app/news/news-list")}
        >
          <Text
            style={{
              color: colors.secondary,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: Spacing.padding.base,
        }}
      >
        <HorizontalNewsList />
      </View>
    </View>
  )
}