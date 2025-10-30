import { icon } from "@/app/constants/icon";
import { useEffect } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

export function TabBarButton({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label
}: {
  onPress?: PressableProps['onPress'],
  onLongPress?: PressableProps['onLongPress'],
  isFocused: boolean,
  routeName: string,
  color: string,
  label: string | React.ReactNode | ((props: { focused: boolean; color: string; position: 'below-icon' | 'beside-icon'; children: string; }) => React.ReactNode)
}) {
  // const { buildHref } = useLinkBuilder();
  const scale = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 })
  }, [scale, isFocused])

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])
    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
      transform: [{ scale: scaleValue }],
      top
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0])

    return { opacity }
  })

  const labelColor = isFocused ? '#673ab7' : '#222'
  const labelContent = typeof label === 'function'
    ? label({ focused: isFocused, color: labelColor, position: 'below-icon', children: '' })
    : label

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 justify-center items-center gap-1"
    >
      <Animated.View style={animatedIconStyle}>
        {
          icon[routeName as keyof typeof icon]?.({
            color
          })
        }
      </Animated.View>

      {typeof labelContent === 'string' ? (
        <Animated.Text style={[{ color: labelColor, fontSize: 12 }, animatedTextStyle]}>
          {labelContent}
        </Animated.Text>
      ) : (
        <Animated.View style={animatedTextStyle}>
          {labelContent}
        </Animated.View>
      )}
    </Pressable>
  )
}
