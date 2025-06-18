import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Products } from './_data';
import Spacing from './_constants/Spacing';
import { Ionicons } from '@expo/vector-icons';
import Colors from './_constants/Colors';
import FontSize from './_constants/FontSize';
import Font from './_constants/Font';
import { AirbnbRating, Rating } from "react-native-ratings";

export default function ProductDetails() {
  const router = useRouter();
  const { goBack } = useNavigation();
  const { productId } = useLocalSearchParams();
  const product = Products.find(item => item.id === Number(productId));

  if (!product) return <Text style={{ padding: 16 }}>PAGE NOT FOUND!</Text>;

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: Spacing.padding.base,
          paddingTop: Spacing.padding.base,
        }}
      >
        <View
          style={{
            paddingHorizontal: Spacing.padding.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name='chevron-back' size={24} color={Colors.text} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='grid-outline' size={30} color={Colors.text} />
          </TouchableOpacity>
        </View>
        <Image
          source={product.cover}
          style={{
            width: "100%",
            height: 400,
            marginVertical: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.lg,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginVertical: Spacing.margin.lg,
          }}
        >
          {product.ingredients.map((ingredient) => (
            <View
              key={ingredient.id}
              style={{
                backgroundColor: Colors.primary,
                padding: Spacing.padding.base,
                borderRadius: Spacing.borderRadius.xxl,
                alignItems: "center",
              }}
            >
              <Image
                source={ingredient.image}
                style={{
                  width: 90,
                  height: 70,
                }}
              />
              <Text
                style={{
                  color: Colors.textGray,
                  marginVertical: Spacing.margin.base,
                }}
              >
                {ingredient.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.primary,
          padding: Spacing.padding.lg,
          borderTopLeftRadius: Spacing.borderRadius.xxl,
          borderTopRightRadius: Spacing.borderRadius.xxl,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: FontSize.lg,
                fontFamily: Font["poppins-semiBold"],
                color: Colors.text,
              }}
            >
              {product.title}
            </Text>
            <Text
              style={{
                fontSize: FontSize.sm,
                fontFamily: Font["poppins-regular"],
                color: Colors.textGray,
              }}
            >
              Size: {product.size}
            </Text>
          </View>

          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <AirbnbRating
              count={5}
              showRating={false}
              size={16}
              selectedColor={Colors.text}
              defaultRating={product.rating}
              isDisabled
            />
            <Text
              style={{
                fontSize: FontSize.sm,
                fontFamily: Font["poppins-regular"],
                color: Colors.textGray,
              }}
            >
              ({product.reviewsCount} Reviews)
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}