import "@/global.css";
// import {
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_600SemiBold,
//   Inter_700Bold,
//   useFonts,
// } from "@expo-google-fonts/inter";

// import { Loading } from "@/components/loading";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
// import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { tokenCache } from '@/storage/tokenCache';
import { router, Slot } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const PUBLIC_CLERK_PUBLISHABLE_KEY = 
process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function Layout() {
  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  // })

  // if (!fontsLoaded) {
  //   return <Loading />
  // }

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
    <View className="bg-gray-900 flex-1 p-8">
      <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <InitialLayout />
      </ClerkProvider>
    </View>
  )
}
