import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const buttons = [
  { label: "Travel", route: "/travel-app/index" },
  { label: "Food Recipe", route: "/food-recipe/welcome" },
  { label: "Coffee App", route: "/coffee-app" },
  { label: "NFT Marketplace", route: "/nft-marketplace" },
  { label: "Auth App", route: "/auth-app" },
  { label: "Fashion App", route: "/fashion-app" },
  { label: "Disney App", route: "/disney-app" },
  { label: "Fitness App", route: "/fitness-app" },
  { label: "Skincare App", route: "/skincare-app" },
  { label: "News App", route: "/news-app" },
];

export default function Index() {
  const router = useRouter();

  return (
    <FlatList
      contentContainerStyle={{ padding: 20 }}
      data={buttons}
      keyExtractor={(item) => item.route}
      numColumns={2}
      columnWrapperStyle={{ gap: 12, marginBottom: 12 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            padding: 20,
            flex: 1,
            borderRadius: 8,
          }}
          onPress={() => router.replace(item.route)}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
