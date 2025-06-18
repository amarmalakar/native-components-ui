import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import SPACE from '../_configs/SPACE';
import Colors from '../_configs/Colors';
import Font from '../_configs/Font';
import FontSize from '../_configs/FontSize';
import { movies } from '../_data';
import Movie from './movie';

const { SPACING: Spacing } = SPACE;
const { width } = Dimensions.get("window");
const MovieWidth = width / 2 - Spacing * 3;
const MovieHeight = 260;
const items = ["RELATED", "EXTRAS", "DETAILS"];

export default function DetailFooter() {
  const [active, setActive] = useState<number>(0);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: Spacing,
          borderBottomColor: Colors.border,
          borderBottomWidth: 1,
        }}
      >
        {items.map((item, index) => (
          <View
            key={item}
            style={{
              marginRight: Spacing,
            }}
          >
            <TouchableOpacity onPress={() => setActive(index)}>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.text,
                  fontSize: FontSize.large,
                }}
              >
                {item}
              </Text>
              {active === index && (
                <View
                  style={{
                    marginTop: Spacing / 2,
                    height: Spacing / 2,
                    backgroundColor: Colors.secondary,
                    borderTopRightRadius: Spacing / 2,
                    borderTopLeftRadius: Spacing / 2,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View
        style={{
          marginVertical: Spacing * 2,
        }}
      >
        {items[active] == "RELATED" && (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {movies.slice(0, 4).map((movie) => (
              <Movie
                style={{
                  width: MovieWidth,
                  height: MovieHeight,
                  marginBottom: Spacing,
                }}
                movie={movie}
              />
            ))}
          </View>
        )}
        {items[active] == "EXTRAS" && (
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.text,
            }}
          >
            EXTRAS
          </Text>
        )}
        {items[active] == "DETAILS" && (
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.text,
            }}
          >
            DETAILS
          </Text>
        )}
      </View>
    </>
  )
}