import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SPACE from '../_configs/SPACE';
import Colors from '../_configs/Colors';
import Font from '../_configs/Font';
import FontSize from '../_configs/FontSize';
import Movie from './movie';
import { Movie as MovieType } from "../_data";
import { useRouter } from 'expo-router';

interface Props {
  movies: MovieType[];
  title?: string;
}

const { SPACING: Spacing } = SPACE;

export default function MoviesList({ movies, title }: Props) {
  const router = useRouter()
  return (
    <View
      style={{
        paddingHorizontal: Spacing * 2,
        paddingTop: Spacing * 2,
      }}
    >
      {title && (
        <Text
          style={{
            color: Colors.text,
            fontFamily: Font["poppins-bold"],
            fontSize: FontSize.large,
          }}
        >
          {title}
        </Text>
      )}
      <ScrollView
        horizontal
        style={
          title
            ? {
              paddingTop: Spacing,
            }
            : {}
        }
        showsHorizontalScrollIndicator={false}
      >
        {movies.map((movie) => (
          <Movie
            // onPress={() => navigation.navigate("Detail", { movie })}
            onPress={() => {
              router.replace(`/disney-app/${movie.id}`)
            }}
            key={movie.id}
            movie={movie}
          />
        ))}
      </ScrollView>
    </View>
  )
}