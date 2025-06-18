import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ADVANTURES from './_config/ADVANTURES'
import SPACING from './_config/SPACING';
import COLORS from './_config/COLORS';
import CATEGORIES from './_config/CATEGORIES';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from 'expo-router';

const WIDTH = Dimensions.get("screen").width;

export default function TravelHome() {
  const { SPACE } = SPACING;
  const [activeCategory, setActiveCategory] = useState(0);
  const router = useRouter()
  return (
    <SafeAreaView>
      <View style={{ padding: SPACE * 2 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SPACE * 3,
              fontWeight: "bold",
              color: COLORS.dark,
            }}
          >
            Discover
          </Text>
          <Image
            style={{
              height: SPACE * 5,
              width: SPACE * 5,
              borderRadius: SPACE * 5,
            }}
            source={require("./_images/Avatar.png")}
          />
        </View>

        <ScrollView style={{ marginVertical: SPACE * 2 }} horizontal>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(index)}
              style={{ marginRight: SPACE }}
              key={category.id}
            >
              <Text
                style={[
                  { fontSize: SPACE * 2, color: COLORS.dark },
                  activeCategory === index && { color: COLORS.primary },
                ]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{ fontSize: SPACE * 1.7, color: COLORS.dark }}>
          {CATEGORIES[activeCategory].tours.length + " "}
          {CATEGORIES[activeCategory].title}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH * 0.7}
          decelerationRate="fast"
          pagingEnabled
          style={{ marginVertical: SPACE * 2 }}
        >
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={{
                width: WIDTH * 0.7,
                // width: 200,
                height: WIDTH * 0.9,
                // height: 272,
                overflow: "hidden",
                borderRadius: SPACE * 2,
                marginRight: SPACE * 2,
              }}
              key={index}
              onPress={() => {
                router.replace(`/travel-app/${tour.id}`)
              }}
            >
              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  height: "100%",
                  width: "100%",
                  backgroundColor: COLORS.transparent,
                  justifyContent: "space-between",
                  padding: SPACE,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    padding: SPACE / 2,
                    backgroundColor: COLORS.white,
                    borderRadius: SPACE * 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={SPACE * 3}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: SPACE * 2,
                    color: COLORS.white,
                    fontWeight: "700",
                    marginLeft: SPACE,
                  }}
                >
                  {tour.title}
                </Text>
              </View>
              <Image
                source={tour.image}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SPACE * 2,
              fontWeight: "bold",
              color: COLORS.dark,
            }}
          >
            Feeling Adventurous?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: SPACE * 1.4,
                fontWeight: "500",
                color: COLORS.primary,
              }}
            >
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ marginVertical: SPACE * 2 }}
          showsHorizontalScrollIndicator={false}
        >
          {ADVANTURES.map((adventure) => (
            <TouchableOpacity
              key={adventure.id}
              style={{
                marginRight: SPACE * 3,
                padding: SPACE,
                alignItems: "center",
              }}
            >
              <View style={{ width: SPACE * 3, height: SPACE * 3 }}>
                <Image
                  source={adventure.image}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: SPACE,
                  marginTop: SPACE,
                }}
              >
                {adventure.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}