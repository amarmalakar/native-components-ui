import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import SPACE from './_configs/SPACE';
import colors from './_configs/COLORS';
import Ionicons from '@expo/vector-icons/Ionicons';
import CATEGORIES from './_configs/CATEGORIES';

const { SPACING } = SPACE;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - SPACING * 3;

export default function FoodRecipeHome() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: SPACING * 4.5,
                  height: SPACING * 4.5,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING,
                }}
                source={require("./_images/avatar.jpg")}
              />
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "800",
                  color: colors.dark,
                }}
              >
                Erikaasav
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginRight: SPACING }}>
                <Ionicons
                  name="notifications-outline"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="menu"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: "60%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
              What would you like to order?
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.light,
              marginVertical: SPACING * 3,
              padding: SPACING * 1.5,
              borderRadius: SPACING,
            }}
          >
            <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
            <TextInput
              placeholder="Want to .."
              placeholderTextColor={colors.gray}
              style={{
                color: colors.gray,
                fontSize: SPACING * 2,
                marginLeft: SPACING,
              }}
            />
          </View>

          <ScrollView horizontal>
            {CATEGORIES.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 }}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: SPACING * 1.7,
                      fontWeight: "600",
                      color: colors.gray,
                    },
                    activeCategory === index && {
                      color: colors.black,
                      fontWeight: "700",
                      fontSize: SPACING * 1.8,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}
          >
            {CATEGORIES[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
                onPress={() => router.replace(`/food-recipe/${item.id}` as const)}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  Today discount {item.discount}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                  $ {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}