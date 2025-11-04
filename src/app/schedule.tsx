import { DateCard } from "@/components/DateCard";
import { HourCard } from "@/components/HourCard";
import { IDateAvailable } from "@/types/date-available";
import { IHourAvailable } from "@/types/hour-available";
import { dateAvailable } from "@/utils/functions/date-available";
import { formatCurrency } from "@/utils/functions/format-currency";
import { HourAvailable } from "@/utils/functions/hour-available";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function ScheduleModal() {
  const params = useLocalSearchParams<{
    id?: string;
    name?: string;
    price?: string;
    category?: string;
  }>();
  const [date, setDate] = useState<string>('');
  const [dateList, setDateList] = useState<IDateAvailable[]>([]);
  const [hour, setHour] = useState<string>('');
  const [hourList, setHourList] = useState<IHourAvailable>([]);


  useEffect(() => {
    setDateList(dateAvailable())
    setHourList(HourAvailable())
  }, [])

  function handleDatePress(dayNumber: string) {
    setDate(dayNumber)
  }

  function handleHourPress(hourSelected: string) {
    setHour(hourSelected)
  }

  return (
    <View className="flex-1 h-full bg-bigodon-bg-screen p-6 justify-between">
      <View>
        <View className="flex-row items-center justify-between mb-4 z-10">
          <Text className="text-bigodon-white font-heading text-2xl">Agendar Serviço</Text>
          <Pressable
            className="rounded-[14px] border border-gray-700 p-2"
            onPress={() => router.back()}
          >
            <Feather name="x" size={18} color="white" />
          </Pressable>
        </View>

        <View className="bg-bigodon-bg-card rounded-[14px] p-4 gap-3 z-10">
          <Text className="text-bigodon-white font-heading text-xl">{params.name}</Text>

          <View className="gap-1">
            <Text className="text-bigodon-color-informative font-body text-sm">
              Categoria: {params.category}
            </Text>

            <Text className="text-bigodon-color-informative font-body text-sm">
              Preço: <Text className="font-bold">{formatCurrency(Number(params.price))}</Text>
            </Text>
          </View>

          <View className="mt-4 gap-2">
            <Text className="text-bigodon-bg-button font-body text-xs italic">
              Aqui você pode selecionar data/horário e confirmar o agendamento.
            </Text>
          </View>
        </View>

        <View className="mt-8 z-0 gap-2 flex-row items-center border border-bigodon-bg-button p-4 rounded-[14px] ">
          <Feather name="map-pin" size={20} color="white" />
          <Text className="text-bigodon-white font-body text-sm">
            Rua Tiete, 011 - Jardim Alvorada (Votuporanga/SP)
          </Text>
        </View>

        <View className="mt-8 z-0 gap-2">
          <Text className="text-bigodon-white font-body text-base">
            Selecione um dia disponível
          </Text>

          <FlatList
            horizontal
            data={dateList}
            keyExtractor={(item) => `${item.dayName}-${item.monthName}-${item.dayNumber}`}
            renderItem={({ item }) => (
              <DateCard
                date={item}
                isSelected={item.dayNumber === date}
                onPress={() => { handleDatePress(item.dayNumber) }} />
            )}
            className="max-h-44"
            contentContainerStyle={{ gap: 12, paddingHorizontal: 0 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="mt-8 z-0 gap-2">
          <Text className="text-bigodon-white font-body text-base">
            Selecione um horário disponível
          </Text>
          <FlatList
            horizontal
            data={hourList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <HourCard
                hour={item}
                isSelected={item === hour}
                onPress={() => { handleHourPress(item) }} />
            )}
            className="max-h-44"
            contentContainerStyle={{ gap: 12, paddingHorizontal: 0 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View>
        <View className="mt-32 z-0 gap-4">
          <TouchableOpacity
            className="bg-bigodon-bg-button rounded-[14px] p-3"
            onPress={() => router.back()}
          >
            <Text className="text-bigodon-white font-bold text-xl text-center">Confirmar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-bigodon-bg-button rounded-[14px] p-3"
            onPress={() => router.back()}
          >
            <Text className="text-bigodon-white font-bold text-xl text-center">Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
