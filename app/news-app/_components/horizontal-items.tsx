import { View, Text, ImageSourcePropType, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import useColors from '../_hooks/use-colors';
import Spacing from '../_confings/Spacing';
import { Ionicons } from '@expo/vector-icons';
import FontSize from '../_confings/FontSize';
import Font from '../_confings/Font';

export type HorizontalItem = {
  id: number;
  name: string;
  image?: ImageSourcePropType;
};

const AddButton = ({ rounded = false }) => {
  const colors = useColors();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.lightBackground,
          marginRight: Spacing.margin.base,
          justifyContent: "center",
          alignItems: "center",
        },
        rounded
          ? {
            height: 70,
            width: 70,
            padding: Spacing.padding.sm,
            borderRadius: Spacing.borderRadius.xxl,
          }
          : {
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.lg,
          },
      ]}
    >
      <Ionicons name='add' size={rounded ? FontSize.lg : FontSize.sm} />
    </TouchableOpacity>
  );
};

export default function HorizontalItems({
  items,
  onClick,
  showAddButton,
}: {
  items: HorizontalItem[];
  onClick?: (item: HorizontalItem) => void;
  showAddButton?: boolean;
}) {
  const colors = useColors();
  const [active, setActive] = useState<number>(-1);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <>
        {showAddButton && <AddButton rounded={!!items[0].image} />}
        {items.map((item, index) =>
          item.image ? (
            <TouchableOpacity
              key={item.id}
              onPress={() => (setActive(index), onClick?.(item))}
              style={{
                height: 70,
                width: 70,
                backgroundColor: colors.primary,
                borderRadius: Spacing.borderRadius.xxl,
                padding: Spacing.padding.sm,
                marginRight: Spacing.margin.base,
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: "100%",
                  width: "100%",
                }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={item.id}
              onPress={() => (setActive(index), onClick?.(item))}
              style={{
                backgroundColor:
                  active === index ? colors.primary : colors.background,
                paddingHorizontal: Spacing.padding.lg,
                paddingVertical: Spacing.margin.base,
                borderRadius: Spacing.borderRadius.xl,
                marginRight: Spacing.margin.base,
                borderWidth: 1,
                borderColor: active === index ? colors.primary : colors.border,
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.sm,
                  fontFamily: Font["poppins-semiBold"],
                  color: active === index ? colors.onPrimary : colors.text,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        )}
      </>
    </ScrollView>
  )
}