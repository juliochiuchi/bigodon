import { formatCurrency } from "@/utils/functions/format-currency"
import { clsx } from "clsx"
import { Image, ImageProps, Pressable, PressableProps, Text, View } from "react-native"

type OfferProps = PressableProps & {
  offer: {
    title: string,
    Economy: number,
    price: number,
    description: string,
    validate: string,
    cover: ImageProps,
  },
}

export function Offer({
  offer,
  ...rest
}: OfferProps) {
  return (
    <Pressable className={clsx(
      "bg-bigodon-bg-card rounded-[14px]", ""
    )} {...rest}>
      <View className="flex-row items-stretch justify-stretch gap-4">
        <View className="p-4 gap-2 justify-between max-w-[200px]">
          <Text
            className="text-bigodon-white border border-bigodon-border-offer-economy p-2 text-center rounded-md font-heading"
          >
            Economize {formatCurrency(offer.Economy)}
          </Text>

          <Text
            className="text-bigodon-white font-heading text-xl"
          >
            {offer.title}
          </Text>

          <Text
            className="text-bigodon-white font-body text-sm"
          >
            {offer.description}
          </Text>

          <Text
            className="text-bigodon-color-informative font-body text-xs italic"
          >
            {offer.validate}
          </Text>
        </View>

        <View>
          <Image source={offer.cover} className="w-44 h-44 rounded-[14px]" />
        </View>
      </View>
    </Pressable>
  )
}
