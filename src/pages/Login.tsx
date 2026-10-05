import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google/login`;
  }, []);

  return null;
}
