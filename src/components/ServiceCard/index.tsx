import { formatCurrency } from "@/utils/functions/format-currency";
import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ServiceCardProps = {
  id: number,
  serviceName: string,
  serviceDescription: string,
  servicePrice: number,
  serviceImage: ImageProps,
  serviceCategory: string,
}

type ServiceProps = TouchableOpacityProps & {
  data: ServiceCardProps,
}

export const ServiceCard = forwardRef<typeof TouchableOpacity, ServiceProps>(({ data, ...rest }, ref) => {
  return (
    <View className="w-full bg-bigodon-bg-card rounded-[14px] p-4 flex-row gap-4">
      <View>
        <Image source={data.serviceImage} className="rounded-[14px] w-32 h-32" />
      </View>

      <View className="flex-1 justify-between">
        <View>
          <Text className="text-bigodon-white text-lg font-bold">{data.serviceName}</Text>
          <Text className="text-bigodon-color-informative text-sm font-body">{data.serviceDescription}</Text>
        </View>

        <View className="flex-row gap-4 items-end justify-between">
          <Text className="text-bigodon-color-informative text-sm font-body">{formatCurrency(data.servicePrice)}</Text>
          <TouchableOpacity>
            <Text className="text-bigodon-color-button text-sm font-body p-3 bg-bigodon-bg-button rounded-2xl">Agendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})
