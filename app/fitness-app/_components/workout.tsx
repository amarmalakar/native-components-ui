import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Workout as WorkoutType } from "../_data";
import Colors from '../_configs/Colors';
import Spacing from '../_configs/Spacing';
import AppText from './app-text';
import Font from '../_configs/Font';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  workout: WorkoutType;
  onPress?: () => void;
}

export default function Workout({ workout, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <Image
        source={workout.image}
        style={{
          width: 270,
          height: 200,
        }}
      />
      <View
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <View
          style={{
            marginBottom: Spacing.margin.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {workout.name}
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name='star' color={Colors.yellow} size={24} />
            <AppText style={{ marginLeft: Spacing.margin.sm }}>
              {workout.rating}
            </AppText>
          </View>
        </View>
        <AppText>{workout.coach}</AppText>
      </View>
    </TouchableOpacity>
  )
}