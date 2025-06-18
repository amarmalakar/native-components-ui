import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Spacing from './_confings/Spacing'
import Header from './_components/header'
import Search from './_components/search'
import HotNews from './_components/hot-news'
import Popular from './_components/popular'

export default function NewsApp() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <Header />
        <Search />
        <HotNews />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  )
}