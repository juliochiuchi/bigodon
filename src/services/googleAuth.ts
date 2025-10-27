import { authorize, AuthorizeResult } from 'react-native-app-auth';

const config = {
  issuer: 'https://accounts.google.com',
  clientId: '901932677425-u2fbnd2j6kk9ik4m3k9d1jhok30aa9c2.apps.googleusercontent.com',
  redirectUrl: 'com.bigodon.ios:/oauth2redirect/google',
  scopes: [
    'openid',
    'profile',
    'email',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
  ],
};

export async function signInWithGoogle(): Promise<AuthorizeResult | null> {
  try {
    const result = await authorize(config);
    console.log('Access Token:', result.accessToken);
    return result;
  } catch (error) {
    console.error('Erro ao autenticar:', error);
    return null;
  }
}
