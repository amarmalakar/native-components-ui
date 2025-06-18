import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from './_components/screen'
import Spacing from './_configs/Spacing'
import { user, workoutPlans, workouts } from './_data'
import AppText from './_components/app-text'
import Font from './_configs/Font'
import IconButton from './_components/icon-button'
import Colors from './_configs/Colors'
import { Ionicons } from '@expo/vector-icons'
import FontSize from './_configs/FontSize'
import CategoryList from './_components/category-list'
import SectionHeader from './_components/section-header'
import Workout from './_components/workout'
import Rating from "react-native-easy-rating";
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter();
  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={user.profile}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
              }}
            >
              <AppText>Hello, Welcome</AppText>
              <AppText
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  textTransform: "capitalize",
                }}
              >
                {user.name}
              </AppText>
            </View>
          </View>
          <IconButton name='notifications' />
        </View>

        <View
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            marginVertical: Spacing.margin.xl,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name='search-outline' size={24} color={Colors.text} />
          <TextInput
            placeholder='Search Workouts..'
            placeholderTextColor={Colors.text}
            style={{
              fontSize: FontSize.base,
              width: "80%",
            }}
          />
          <IconButton
            name='options-outline'
            style={{
              backgroundColor: Colors.accent,
            }}
            color={Colors.black}
          />
        </View>

        <CategoryList />

        <SectionHeader title='Featured Workouts' />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate='fast'
          pagingEnabled
          snapToInterval={270 + Spacing.margin.lg}
        >
          {workouts.map((workout) => (
            <Workout
              // onPress={() => navigate("PlanOverview", { workout: workout })}
              onPress={() => router.replace(`/fitness-app/${workout.id}`)}
              workout={workout}
              key={workout.id}
            />
          ))}
        </ScrollView>
        
        <SectionHeader title='Trending Plans' />

        {workoutPlans.map((plan) => (
          <TouchableOpacity
            style={{
              padding: Spacing.padding.sm,
              marginBottom: Spacing.margin.base,
              backgroundColor: Colors.primary,
              borderRadius: Spacing.borderRadius.base,
              flexDirection: "row",
            }}
            key={plan.id}
          >
            <Image
              source={plan.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacing.borderRadius.base,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
                justifyContent: "space-between",
              }}
            >
              <AppText
                style={{
                  fontFamily: Font["poppins-semiBold"],
                }}
              >
                {plan.name}
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name='calendar-outline'
                  size={16}
                  color={Colors.text}
                />
                <AppText
                  style={{
                    marginLeft: Spacing.margin.base,
                  }}
                >
                  {plan.duration} | {plan.location}
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Rating
                  rating={plan.rating}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                />
                <AppText
                  style={{
                    marginLeft: Spacing.margin.sm,
                  }}
                >
                  {plan.rating}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  )
}