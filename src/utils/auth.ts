export interface AuthUser {
  id: number;
  email: string;
  full_name: string | null;
}

export const API_BASE = (
  import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1'
).replace(/\/+$/, '');


export function loginWithGoogle(): void {
  window.location.assign(`${API_BASE}/auth/google/login`);
}

export function logout(): void {
  window.location.assign(`${API_BASE}/auth/logout`);
}


export async function fetchMe(): Promise<AuthUser | null> {
  try {
    // 1. Cheap gate — always 200, so no 401 console noise when logged out
    const statusResponse = await fetch(`${API_BASE}/auth/status`, {
      method: 'GET',
      credentials: 'include',
    });
    if (!statusResponse.ok) return null;

    const { authenticated } = (await statusResponse.json()) as {
      authenticated: boolean;
    };
    if (!authenticated) return null;

    // 2. Only fetch the profile when the token is valid
    const response = await fetch(`${API_BASE}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
