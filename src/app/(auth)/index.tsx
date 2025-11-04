import { CardAppointment } from "@/components/CardApponitment";
import { Category } from "@/components/Category";
import { Header } from "@/components/Header";
import { Offer } from "@/components/Offer";
import { ServiceCard } from "@/components/ServiceCard";
import { cardAppointmentList, CATEGORIES, OFFER_LIST, ServiceProps, SERVICES } from "@/constants/services/data";
import { useAuth, useUser } from "@clerk/clerk-expo";
import React, { useRef, useState } from "react";
import { Alert, FlatList, SectionList, Text, View } from "react-native";

export default function Home() {
  const { signOut, getToken } = useAuth()
  const { user } = useUser()
  const sectionListRef = useRef<SectionList<ServiceProps>>(null)
  const [category, setCategory] = useState(CATEGORIES[0])

  const handleCategorySelect = (item: string) => {
    setCategory(item)
    const sectionIndex = CATEGORIES.findIndex((category) => category === item)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="flex-1 mt-10">
      <SectionList
        ref={sectionListRef}
        className="flex-1"
        style={{ flexGrow: 1 }}
        sections={SERVICES}
        keyExtractor={(item) => item.id.toString()}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <ServiceCard data={item} />
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-bigodon-color-informative font-heading mt-8 mb-3">{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <View className="gap-3">
            <Header />

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

            <View className="mt-6 gap-2">
              <Text className="font-heading text-2xl text-bigodon-white">Categorias</Text>
              <FlatList
                horizontal
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Category title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)} />
                )}
                className="max-h-10 mt-2"
                contentContainerStyle={{ gap: 12, paddingHorizontal: 0 }}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        }
      />
    </View>
  )
}
