import { LinearGradient } from "expo-linear-gradient";
import { Button, Dimensions, ImageBackground, Text, TouchableOpacity } from "react-native";
import Spacing from "./_configs/Spacing";
import FontSize from "./_configs/FontSize";
import Colors from "./_configs/Colors";
import Font from "./_configs/Font";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function FitnessApp() {
  const router = useRouter();
  const handlePress = () => router.replace("/fitness-app/home");

  return (
    <ImageBackground
      source={require("./_images/onboarding.jpeg")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <LinearGradient
        style={{
          height: height / 2.5,
          paddingHorizontal: Spacing.padding.lg,
        }}
        colors={[`rgba(0,0,0,0.1)`, "#000"]}
      >
        <Text
          style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            textAlign: "center",
          }}
        >
          Stay health even if you stay at home
        </Text>

        <Text
          style={{
            fontSize: FontSize.base,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}
        >
          Staying fit to keep you in good condition can now go through mobile
          apps
        </Text>

        <TouchableOpacity style={{ backgroundColor: "green", alignItems: "center", padding: 16, borderRadius: 12 }} onPress={handlePress}>
          <Text style={{ color: "white", fontSize: 20 }}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  )
}