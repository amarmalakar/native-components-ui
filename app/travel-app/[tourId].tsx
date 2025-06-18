import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import TOURS from "./_config/TOURS";
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SPACING from "./_config/SPACING";
import COLORS from "./_config/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TourDetails() {
  const router = useRouter()
  const { SPACE } = SPACING;
  const { tourId } = useLocalSearchParams();
  const tour = TOURS.find(item => item.id === Number(tourId));

  if (!tour) return <Text style={{ padding: 16 }}>PAGE NOT FOUND!</Text>;

  return (
    <>
      <ScrollView>
        <ImageBackground
          source={tour.image}
          style={{ width: "100%", height: 500 }}
        >
          <SafeAreaView>
            <View
              style={{
                paddingHorizontal: SPACE,
                justifyContent: "space-between",
                flexDirection: "row",
                height: "100%",
                paddingTop: 16
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.white,
                  width: SPACE * 4,
                  height: SPACE * 4,
                  borderRadius: SPACE * 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => { router.replace("/travel-app") }}
              >
                <Ionicons
                  name="chevron-back"
                  color={COLORS.primary}
                  size={SPACE * 3}
                />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingBottom: SPACE * 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    width: SPACE * 4,
                    height: SPACE * 4,
                    borderRadius: SPACE * 2,
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
                <View>
                  {tour.images.map((gallery, index) => (
                    <TouchableOpacity
                      style={{
                        width: SPACE * 6,
                        height: SPACE * 6,
                        padding: SPACE / 2,
                        backgroundColor: COLORS.white,
                        borderRadius: SPACE,
                        marginBottom: SPACE,
                      }}
                      key={index}
                    >
                      <Image
                        source={gallery.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: SPACE,
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SPACE * 2,
            borderRadius: SPACE * 3,
            bottom: SPACE * 3,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: SPACE * 2,
                fontWeight: "bold",
                color: COLORS.dark,
              }}
            >
              {tour.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: SPACE * 2,
                  fontWeight: "bold",
                  color: COLORS.dark,
                }}
              >
                {tour.price}
              </Text>
              <Text>/person</Text>
            </View>
          </View>
          <View style={{ marginVertical: SPACE * 2 }}>
            <View style={{ flexDirection: "row", marginBottom: SPACE * 2 }}>
              <TouchableOpacity
                style={{ paddingVertical: SPACE, marginRight: SPACE * 2 }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: SPACE * 1.7,
                  }}
                >
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingVertical: SPACE, marginRight: SPACE * 2 }}
              >
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: SPACE * 2, flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACE / 2, height: SPACE },
                    shadowRadius: SPACE / 2,
                    shadowOpacity: 0.1,
                    padding: SPACE / 2,
                    borderRadius: SPACE / 2,
                    marginRight: SPACE,
                  }}
                >
                  <Ionicons
                    name="time"
                    size={SPACE * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={{ marginRight: SPACE * 2 }}>
                  <Text
                    style={{
                      fontSize: SPACE + 1,
                      marginBottom: SPACE / 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Duration
                  </Text>
                  <Text style={{ fontSize: SPACE * 1.6, fontWeight: "700" }}>
                    {tour.duration}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACE / 2, height: SPACE },
                    shadowRadius: SPACE / 2,
                    shadowOpacity: 0.1,
                    padding: SPACE / 2,
                    borderRadius: SPACE / 2,
                    marginRight: SPACE,
                  }}
                >
                  <Ionicons
                    name="star"
                    size={SPACE * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={{ marginRight: SPACE * 2 }}>
                  <Text
                    style={{
                      fontSize: SPACE + 1,
                      marginBottom: SPACE / 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Rating
                  </Text>
                  <Text style={{ fontSize: SPACE * 1.6, fontWeight: "700" }}>
                    {tour.rating} out of 5
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ color: COLORS.dark }}>{tour.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ position: "absolute", bottom: SPACE * 2, width: "100%" }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SPACE * 1.5,
            marginHorizontal: SPACE * 1.6,
            borderRadius: SPACE * 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: SPACE * 2,
              fontWeight: "bold",
              marginRight: SPACE * 7,
              marginLeft: SPACE * 7,
            }}
          >
            Book Now
          </Text>
          <Ionicons
            name="arrow-forward"
            size={SPACE * 3}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}