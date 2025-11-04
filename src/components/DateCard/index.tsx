import { IDateAvailable } from "@/types/date-available";
import clsx from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type DateAvailableProps = PressableProps & {
  date: IDateAvailable,
  isSelected?: boolean,
}

export function DateCard({
  date,
  isSelected,
  ...rest
}: DateAvailableProps) {
  return (
    <Pressable
      {...rest}
      className={clsx(
        "rounded-[14px] p-4 gap-3 items-center",
        isSelected ? "border-2 border-bigodon-bg-button bg-bigodon-bg-button" : "bg-bigodon-bg-card"
      )}
    >
      <Text className={clsx("font-body text-sm", isSelected ? "text-bigodon-color-black" : "text-bigodon-color-informative")}>
        {date.dayName}
      </Text>
      <Text className={clsx("font-heading text-3xl", isSelected ? "text-bigodon-white" : "text-bigodon-white")}>
        {date.dayNumber}
      </Text>
      <Text className={clsx("font-body text-[10px]", isSelected ? "text-bigodon-color-black" : "text-bigodon-color-informative")}>
        {date.monthName}
      </Text>
    </Pressable>
  );
}
