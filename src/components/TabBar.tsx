import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TabBarButton } from './TabBarButton';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const [dimensions, setDimensions] = useState({
    height: 20,
    width: 100,
  })

  const buttonWidth = dimensions.width / state.routes.length

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions(
      {
        height: e.nativeEvent.layout.height,
        width: e.nativeEvent.layout.width,
      }
    )
  }

  const tabPositionX = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }]
    }
  })

  // useEffect(() => {
  //   tabPositionX.value = withSpring(buttonWidth * state.index)
  // }, [buttonWidth, state.index])

  return (
    <View
      onLayout={onTabBarLayout}
      className="bottom-2 absolute flex-row justify-between items-center bg-white mx-12 py-4 rounded-3xl shadow-xl"
    >
      <Animated.View
        className="absolute bg-[#723feb] rounded-[30px] mx-3"
        style={[animatedStyle, {
          height: dimensions.height - 15,
          width: buttonWidth - 25
        }]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 200 })
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          // <PlatformPressable
          //   key={route.name}
          //   href={buildHref(route.name, route.params)}
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarButtonTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   className="flex-1 justify-center items-center gap-1"
          // >
          //   {
          //     icon[route.name as keyof typeof icon]?.({
          //       color: isFocused ? '#673ab7' : '#222'
          //     })
          //   }
          //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //     {
          //       typeof label === 'string'
          //         ? label
          //         : label({
          //           focused: isFocused, color: isFocused
          //             ? '#673ab7'
          //             : '#222', position: 'below-icon', children: ''
          //         })
          //     }
          //   </Text>
          // </PlatformPressable>
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#fff' : '#222'}
            label={label}
          />
        );
      })}
    </View>
  );
}
