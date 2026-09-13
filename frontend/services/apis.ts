import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = process.env.EXPO_PUBLIC_API_URL!;

const TOKEN_KEY = '@tienditapp_token';

export async function authFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}

export default API_URL;