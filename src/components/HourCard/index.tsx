import clsx from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type HourAvailableProps = PressableProps & {
  hour: string,
  isSelected?: boolean,
}

export function HourCard({
  hour,
  isSelected,
  ...rest
}: HourAvailableProps) {
  return (
    <Pressable
      {...rest}
      className={clsx(
        "rounded-[14px] p-4 gap-3 items-center",
        isSelected ? "border-2 border-bigodon-bg-button bg-bigodon-bg-button" : "bg-bigodon-bg-card"
      )}
    >
      <Text className={clsx("font-body text-sm", isSelected ? "text-bigodon-white font-bold" : "text-bigodon-color-informative")}>
        {hour}
      </Text>
    </Pressable>
  );
}
