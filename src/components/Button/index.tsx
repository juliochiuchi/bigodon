import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  isLoading?: boolean,
  icon: keyof typeof Ionicons.glyphMap
}

export function Button({
  title,
  isLoading = false,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity className="bg-white rounded-lg px-8 py-2 flex-row items-center justify-center gap-2" disabled={isLoading} activeOpacity={0.8} {...rest}>
      {
        isLoading ? <ActivityIndicator /> : (
          <>
            <Ionicons size={20} name={icon} />
            <Text>{title}</Text>
          </>
        )
      }
    </TouchableOpacity>
  )
}
