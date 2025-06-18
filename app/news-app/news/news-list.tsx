import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Spacing from '../_confings/Spacing'
import HorizontalItems, { HorizontalItem } from '../_components/horizontal-items'
import { Categories, News, NewsList } from '../_data'
import useColors from '../_hooks/use-colors'
import FontSize from '../_confings/FontSize'
import Font from '../_confings/Font'
import Dot from '../_components/dot'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function NewsListScreen() {
  const colors = useColors();
  const router = useRouter();
  const [news, setNews] = useState<News[]>(NewsList);

  const handleCategory = ({ id }: HorizontalItem) => {
    setNews(NewsList.filter((news) => news.categoryId === id));
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <HorizontalItems onClick={handleCategory} items={Categories} />

        <ScrollView
          style={{
            paddingVertical: Spacing.padding.base,
          }}
          showsVerticalScrollIndicator={false}
        >
          {news.map((newsItem) => (
            <TouchableOpacity
              // onPress={() => navigate("Details", { news: newsItem })}
              onPress={() => {router.replace(`/news-app/${newsItem.id}`)}}
              key={newsItem.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: Spacing.padding.base,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
              }}
            >
              <View
                style={{
                  width: "65%",
                  paddingRight: Spacing.padding.sm,
                }}
              >
                <Text
                  style={{
                    fontSize: FontSize.base,
                    fontFamily: Font["poppins-semiBold"],
                    color: colors.secondary,
                    textTransform: "uppercase",
                  }}
                >
                  {
                    Categories.find(
                      (category) => category.id === newsItem.categoryId
                    )?.name
                  }
                </Text>
                <Text
                  style={{
                    fontSize: FontSize.lg,
                    fontFamily: Font["poppins-semiBold"],
                    marginVertical: Spacing.margin.sm,
                  }}
                  numberOfLines={3}
                >
                  {newsItem.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: Spacing.margin.base,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: FontSize.sm,
                      color: colors.textGray,
                    }}
                  >
                    {newsItem.time}
                  </Text>
                  <Dot />
                  <Text
                    style={{
                      fontSize: FontSize.sm,
                      color: colors.textGray,
                    }}
                  >
                    {newsItem.length}
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={{
                    height: 110,
                    width: 130,
                    borderRadius: Spacing.borderRadius.sm,
                  }}
                  source={newsItem.image}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      padding: Spacing.padding.sm,
                      marginRight: Spacing.margin.base,
                    }}
                  >
                    <Ionicons
                      name='bookmark-outline'
                      size={FontSize.lg}
                      color={colors.textGray}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: Spacing.padding.sm,
                    }}
                  >
                    <MaterialCommunityIcons
                      name='dots-horizontal'
                      size={FontSize.lg}
                      color={colors.textGray}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}