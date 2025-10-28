import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, Text, View } from "react-native";

export default function Home() {
  const { signOut, getToken } = useAuth()
  const { user } = useUser()
  
  return (
    <View className="flex-1 p-8 justify-center items-center gap-3">
      <Text className="text-lg font-bold text-white">Hello World!</Text>

      <Image source={{ uri: user?.imageUrl }} className="rounded-full w-24 h-24" />
      <Text className="text-lg font-bold text-white">{user?.fullName}</Text>
      <Text className="text-lg text-white">{user?.emailAddresses[0].emailAddress}</Text>
      <Button icon="exit" title="Sair" onPress={() => signOut()} />
    </View>
  )
}
