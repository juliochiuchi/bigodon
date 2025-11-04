import { useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export function Header() {
  const { user } = useUser()

  return (
    <View className="gap-3">
      <View className="w-full flex-row items-center justify-between">
        <Image source={{ uri: user?.imageUrl }} className="rounded-full w-10 h-10" />
        <Pressable className="items-center justify-center rounded-[14px] border border-gray-700 p-2">
          <Feather name="search" size={16} color="white" />
        </Pressable>
      </View>

      <View>
        <Text className="text-2xl font-bold text-bigodon-white">Olá, {user?.fullName}</Text>
        <Text className="text-sm font-body text-bigodon-color-informative">{user?.emailAddresses[0].emailAddress}</Text>
      </View>
    </View>
  )
}
