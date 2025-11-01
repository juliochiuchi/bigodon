import { TabBar } from "@/components/TabBar";
import { colors } from '@/config/colors';
import "@/global.css";
import { useAuth } from '@clerk/clerk-expo';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { router, Slot, Tabs } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

export default function LayoutSignIn() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  function InitialLayout() {
    const { isLoaded, isSignedIn } = useAuth();

    useEffect(() => {
      if (!isLoaded) return

      if (isSignedIn)
        router.replace("/(auth)")
      else
        router.replace("/(public)")
    }, [isSignedIn])


    return isLoaded ? <Slot /> : <ActivityIndicator className="flex-1 items-center justify-center" />
  }

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor={colors['bigodon-bg-screen']} />
      <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          sceneStyle: { backgroundColor: colors['bigodon-bg-screen'] },
          tabBarStyle: { backgroundColor: colors['bigodon-bg-screen'] },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          headerStyle: { backgroundColor: colors['bigodon-bg-screen'] },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="about" options={{ title: "About" }} />
      </Tabs>
    </View>
  )
}
