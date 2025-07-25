import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { products } from './_data';
import SPACE from './_constants/SPACE';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './_constants/Colors';
import Font from './_constants/Font';

const IMAGE_HEIGHT = 440;

export default function ProductDetail() {
  const router = useRouter();
  const { goBack } = useNavigation();
  const { productId } = useLocalSearchParams();
  const product = products.find(item => item.id === Number(productId));
  const { SPACING: Spacing } = SPACE;

  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(0);

  if (!product) return <Text style={{ padding: 16 }}>PAGE NOT FOUND!</Text>;

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing / 2
          }}
        >
          <TouchableOpacity
            onPress={() => goBack()}
            style={{
              padding: Spacing / 2,
            }}
          >
            <Ionicons
              name="arrow-back-outline"
              size={Spacing * 3}
              color={Colors.text}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: Spacing * 2,
              color: Colors.text,
            }}
          >
            Detail
          </Text>
          <TouchableOpacity
            style={{
              padding: Spacing / 2,
            }}
          >
            <Ionicons
              name="cart-outline"
              size={Spacing * 3}
              color={Colors.text}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: Spacing * 2,
          }}
        >
          <Image
            source={product.image}
            style={{
              width: "100%",
              height: IMAGE_HEIGHT,
              borderRadius: Spacing * 6,
              marginVertical: Spacing,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: Spacing,
            }}
          >
            <Text
              style={{
                fontSize: Spacing * 3,
                fontFamily: Font["poppins-bold"],
                color: Colors.text,
              }}
            >
              {product.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {product.colors.map((color, index) => (
                <View
                  key={color.id}
                  style={[
                    {
                      margin: Spacing / 5,
                      borderRadius: Spacing * 2,
                    },
                    activeColorIndex === index && {
                      borderWidth: Spacing / 2,
                      borderColor: Colors.borderWithOpacity,
                    },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => setActiveColorIndex(index)}
                    style={{
                      backgroundColor: color.code,
                      height: Spacing * 2,
                      width: Spacing * 2,
                      borderRadius: Spacing,
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          <Text
            style={{
              color: Colors.text,
              fontFamily: Font["poppins-regular"],
              fontSize: Spacing * 1.4,
            }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: Spacing,
            }}
          >
            <Ionicons name="star" color={Colors.secondary} size={Spacing * 2} />
            <Text
              style={{
                marginLeft: Spacing,
                color: Colors.gray,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {product.rating}
            </Text>
            <Text
              style={{
                marginLeft: Spacing,
                color: Colors.gray,
                fontFamily: Font["poppins-regular"],
              }}
            >
              {product.reviews} Reviews
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {product.sizes.map((size, index) => (
              <TouchableOpacity
                key={size.id}
                onPress={() => setActiveSizeIndex(index)}
                style={[
                  {
                    paddingHorizontal: Spacing * 2,
                    paddingVertical: Spacing,
                    borderWidth: 1,
                    borderColor: Colors.border,
                    borderRadius: Spacing * 2,
                    marginRight: Spacing,
                  },
                  activeSizeIndex === index && {
                    backgroundColor: Colors.primary,
                    borderWidth: 0,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: Font["poppins-regular"],
                    fontSize: Spacing * 1.4,
                    color:
                      activeSizeIndex === index ? Colors.onPrimary : Colors.text,
                  }}
                >
                  {size.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingVertical: Spacing * 1.5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: Spacing * 3.5,
              color: Colors.text,
            }}
          >
            $ {product.price}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: Spacing * 3,
              paddingVertical: Spacing * 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "60%",
              borderRadius: Spacing * 5,
            }}
          >
            <Ionicons
              name="cart-outline"
              size={Spacing * 3}
              color={Colors.onPrimary}
            />
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                color: Colors.onPrimary,
                fontSize: Spacing * 2,
                marginLeft: Spacing / 2,
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}