import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, Image } from 'react-native'
import { Movie as MovieType } from "../_data";
import SPACE from '../_configs/SPACE';

interface Props {
  movie: MovieType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const movieHeight = 170;
const movieWidth = 110;
const { SPACING: Spacing } = SPACE;

export default function Movie({ movie, onPress, style }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: movieHeight,
          width: movieWidth,
          marginRight: Spacing,
          overflow: "hidden",
          borderRadius: Spacing / 2,
        },
        style,
      ]}
    >
      <Image source={movie.image} style={{ height: "100%", width: "100%" }} />
    </TouchableOpacity>
  )
}