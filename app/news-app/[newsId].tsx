import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { NewsList } from './_data';
import NewsHeader from './_components/news-header';
import Spacing from './_confings/Spacing';
import FontSize from './_confings/FontSize';
import Font from './_confings/Font';
import useColors from './_hooks/use-colors';
import Dot from './_components/dot';
import Markdown from "react-native-markdown-package";

export default function NewsDetails() {
  const colors = useColors();
  const router = useRouter();
  const { newsId } = useLocalSearchParams();
  const news = NewsList.find(item => item.id === Number(newsId));

  if (!news) return <Text style={{ padding: 16 }}>PAGE NOT FOUND!</Text>;

  return (
    <SafeAreaView>
      <NewsHeader categoryId={news.categoryId} />

      <ScrollView
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <View
          style={{
            paddingVertical: Spacing.padding.base,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xl,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {news.title}
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
              {news.author}
            </Text>
            <Dot />
            <Text
              style={{
                fontSize: FontSize.sm,
                color: colors.textGray,
              }}
            >
              {news.length}
            </Text>
          </View>
          <Image
            source={news.image}
            style={{
              width: "100%",
              height: 250,
              borderRadius: Spacing.borderRadius.lg,
            }}
          />
          <Markdown
            styles={{
              text: {
                color: colors.text,
              },
              view: {
                marginVertical: Spacing.margin.base,
              },
              heading2: {
                fontFamily: Font["poppins-semiBold"],
              },
            }}
          >
            {news.body}
          </Markdown>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}