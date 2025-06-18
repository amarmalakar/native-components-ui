import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useColors from '../_hooks/use-colors';
import Spacing from '../_confings/Spacing';
import { NewsList } from '../_data';
import Font from '../_confings/Font';
import FontSize from '../_confings/FontSize';
import Dot from './dot';
import { useRouter } from 'expo-router';

export default function HorizontalNewsList() {
  const colors = useColors();
  const router = useRouter();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={250 + Spacing.margin.lg}
    >
      {NewsList.map((item) => (
        <TouchableOpacity
          onPress={() => {router.replace(`/news-app/${item.id}`)}}
          key={item.id}
          style={{
            width: 250,
            marginRight: Spacing.margin.lg,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: 300,
              borderRadius: Spacing.borderRadius.lg,
            }}
          />
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.lg,
              marginVertical: Spacing.margin.sm,
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.sm,
                color: colors.textGray,
              }}
            >
              {item.author}
            </Text>
            <Dot />
            <Text
              style={{
                fontSize: FontSize.sm,
                color: colors.textGray,
              }}
            >
              {item.length}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}