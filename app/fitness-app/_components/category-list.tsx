import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../_data';
import Spacing from '../_configs/Spacing';
import Colors from '../_configs/Colors';
import AppText from './app-text';
import FontSize from '../_configs/FontSize';

export default function CategoryList() {
  const [active, setActive] = useState<number>(0);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[{ id: 0, name: "All" }, ...categories].map((category) => (
        <TouchableOpacity
          onPress={() => setActive(category.id)}
          style={{
            paddingHorizontal: Spacing.padding.base,
            paddingVertical: Spacing.padding.sm,
            backgroundColor:
              active === category.id ? Colors.accent : Colors.primary,
            marginRight: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.base,
          }}
          key={category.id}
        >
          <AppText
            style={{
              color: active === category.id ? Colors.onAccent : Colors.text,
              fontSize: FontSize.sm,
            }}
          >
            {category.name}
          </AppText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}