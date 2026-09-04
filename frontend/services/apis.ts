import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://10.132.175.89:3000';

const TOKEN_KEY = '@tienditapp_token';

/**
 * Wrapper de fetch que adjunta automáticamente el JWT en el header Authorization.
 * Úsalo en lugar de `fetch` para llamadas a rutas protegidas.
 */
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