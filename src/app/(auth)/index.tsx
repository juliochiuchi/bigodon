import { CardAppointment } from "@/components/CardApponitment";
import { Offer } from "@/components/Offer";
import { cardAppointmentList, OFFER_LIST } from "@/constants/services/data";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";

export default function Home() {
  const { signOut, getToken } = useAuth()
  const { user } = useUser()

  return (
    <View className="flex-1 px-0 py-14">
      <View className="gap-3">
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

          {/* <Button icon="exit" title="Sair" onPress={() => signOut()} /> */}
        </View>

        <View className="mt-6 gap-2">
          <Text className="font-heading text-2xl text-bigodon-white">Seu próximo horário</Text>
          <CardAppointment appointment={cardAppointmentList[0]} />
        </View>

        <View className="mt-6 gap-2">
          <Text className="font-heading text-2xl text-bigodon-white">Ofertas especiais e Combos</Text>
          <FlatList
            horizontal
            data={OFFER_LIST}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <Offer offer={item} onPress={() => Alert.alert("Abrir detalhe da oferta")} />
            )}
            className="max-h-44"
            contentContainerStyle={{ gap: 12, paddingHorizontal: 0 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}
