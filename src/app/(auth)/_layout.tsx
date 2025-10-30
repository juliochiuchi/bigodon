import { TabBar } from "@/components/TabBar";
import "@/global.css";
import { useAuth } from '@clerk/clerk-expo';
import { router, Slot, Tabs } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

export default function LayoutSignIn() {
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
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          sceneStyle: { backgroundColor: '#111827' },
          tabBarStyle: { backgroundColor: '#111827' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          headerStyle: { backgroundColor: '#111827' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' },
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </View>
  )
}
