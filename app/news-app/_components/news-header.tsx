import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import useColors from '../_hooks/use-colors';
import { Categories } from '../_data';
import FontSize from '../_confings/FontSize';
import { Ionicons } from '@expo/vector-icons';
import Spacing from '../_confings/Spacing';
import Font from '../_confings/Font';

export default function NewsHeader({ categoryId }: {
  categoryId: number;
}) {
  const { goBack } = useNavigation();
  const colors = useColors();
  const category = Categories.find((category) => category.id === categoryId);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Spacing.padding.base,
        paddingTop: Spacing.padding.base,
      }}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          height: 50,
          width: 50,
          borderWidth: 2,
          borderColor: colors.border,
          borderRadius: Spacing.borderRadius.xxl,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name='chevron-back' size={FontSize.lg} color={colors.text} />
      </TouchableOpacity>
      {category && (
        <Text
          style={{
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.lg,
          }}
        >
          {category.name}
        </Text>
      )}
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          borderWidth: 2,
          borderColor: colors.border,
          borderRadius: Spacing.borderRadius.xxl,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name='bookmark-outline'
          size={FontSize.lg}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  )
}