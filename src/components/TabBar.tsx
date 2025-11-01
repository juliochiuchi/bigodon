import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TabBarButton } from './TabBarButton';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
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

  return (
    <View
      onLayout={onTabBarLayout}
      className="bottom-2 absolute flex-row justify-between items-center bg-bigodon-bg-tab-menu mx-12 py-4 rounded-3xl shadow-xl"
    >
      <Animated.View
        className="absolute bg-[#6d5ae6] rounded-[30px] mx-3"
        style={[animatedStyle, {
          height: dimensions.height - 15,
          width: buttonWidth - 20
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
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 733,
            dampingRatio: 0.5,
            mass: 4,
            overshootClamping: undefined,
            energyThreshold: 6e-9,
            reduceMotion: ReduceMotion.System,
          })
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }

          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#fff' : '#fff'}
            label={label}
          />
        );
      })}
    </View>
  );
}
