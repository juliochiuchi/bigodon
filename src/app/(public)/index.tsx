import { Button } from '@/components/Button';
import { useSSO } from '@clerk/clerk-expo';
import * as Liking from 'expo-linking';
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const { startSSOFlow } = useSSO();
  

  async function onGoogleSignIn() {
    try {
      setIsLoading(true)
      const redirectURL = Liking.createURL('/(auth)')
      const { 
        authSessionResult,
        setActive, 
        createdSessionId } = await startSSOFlow({ 
          strategy: 'oauth_google', 
          redirectUrl: redirectURL, 
        })

      if (authSessionResult?.type === 'success') {
        if (setActive && createdSessionId) {
          await setActive({
            session: createdSessionId,
          })
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])

  return (
   <View className="flex-1 justify-center items-center">
    <Button 
      icon="logo-google"
      title="Entrar com Google"
      onPress={onGoogleSignIn}
      isLoading={isLoading}
    />
   </View>
  );
}
