const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error('VITE_BACKEND_URL is not defined in environment variables');
}

export class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.name = 'ApiError';
  }
}

export const api = {
  async post<T>(path: string, body: unknown): Promise<T> {
    try {
      const response = await fetch(`${BACKEND_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(response.status, errorData.detail || `Server error: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new ApiError(0, 'Cannot connect to server. Please check your connection.');
      }
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'An unexpected error occurred.');
    }
  },

  async get<T>(path: string): Promise<T> {
    try {
      const response = await fetch(`${BACKEND_URL}${path}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(response.status, errorData.detail || `Server error: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new ApiError(0, 'Cannot connect to server. Please check your connection.');
      }
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'An unexpected error occurred.');
    }
  },
};
