import { Header } from "@/components/Header";
import { Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 mt-10 gap-3">
      <Header />
      <Text className="mt-6 text-lg font-bold text-white">About Screen</Text>
    </View>
  )
}
