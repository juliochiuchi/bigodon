import { Feather } from "@expo/vector-icons";
import { Image, ImageProps, Text, View } from "react-native";

type AppointmentCardProps = {
  appointment: {
    serviceName: string;
    serviceDate: string;
    serviceDateText: string;
    serviceHour: string;
    cover: ImageProps;
  }
}

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  return (
    // <View className="bg-bigodon-bg-button p-4 rounded-[14px] items-center flex-row gap-2">
    //   <Feather name="calendar" size={14} color="white" />
    //   <Text className="text-bigodon-white font-body text-base">
    //     {`${appointment.serviceName} - ${appointment.serviceDate}, ${appointment.serviceHour}.`}
    //   </Text>
    // </View>

    <View className="bg-bigodon-bg-card text-bigodon-white p-4 rounded-[14px] flex-row justify-stretch gap-4">
      <Image source={appointment?.cover} className="rounded-2xl w-32 h-32" />

      <View className="flex-1 justify-between">
        <View>
          <Text className="text-2xl font-bold text-bigodon-white">{appointment.serviceName}</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Feather name="calendar" size={16} color="white" />
          <Text className="text-xl font-body text-bigodon-white">{`${appointment.serviceDateText}`}</Text>
        </View>

        <View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Feather name="clock" size={16} color="white" />
              <Text className="text-xl font-body text-bigodon-white">{`${appointment.serviceHour}`}</Text>
            </View>

            <View className="bg-bigodon-bg-confirm-appointment rounded-full px-2 py-1 flex-row gap-2 items-center">
              <Feather name="check-circle" size={16} color="black" />
              <Text className="text-lg font-body text-bigodon-color-black">Agendado</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
