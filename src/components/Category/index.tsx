import { clsx } from "clsx"
import { Pressable, PressableProps, Text } from "react-native"

type CategoryProps = PressableProps & {
  title: string,
  isSelected?: boolean,
}

export function Category({
  title,
  isSelected,
  ...rest
}: CategoryProps) {
  return (
    <Pressable className={clsx(
      "px-4 justify-center rounded-3xl h-10",
      isSelected && "border-2 border-bigodon-white bg-bigodon-white"
    )} {...rest}>
      <Text className={clsx(
        "font-subtitle text-sm",
        isSelected ? "text-black" : "text-bigodon-color-informative"
      )}>
        {title}
      </Text>
    </Pressable>
  )
}
