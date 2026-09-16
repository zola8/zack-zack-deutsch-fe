import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Gloss } from '../components/Gloss';
import { getToken, logout } from '../utils/auth';

interface User {
  id: number;
  email: string;
  full_name: string | null;
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = getToken();

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${API_BASE}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Could not load user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="mt-32 flex flex-col items-center gap-5">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-german-gold" />
          <p className="text-lg font-semibold text-black/60">
            <Gloss de="Lade Benutzerdaten…" en="Loading user data…" />
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          <Gloss de="Fehler" en="error" />
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
          <Gloss de="Fehler beim Laden" en="Failed to load" />
        </h1>
        <p className="mt-4 text-lg text-black/70">{error}</p>
        <button
          onClick={() => navigate('/login')}
          className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-german-gold hover:bg-black/80"
        >
          <Gloss de="Zur Anmeldung" en="Go to login" />
        </button>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
        <Gloss de="Profil" en="profile" />
      </p>

      <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
        <Gloss de="Dein Konto" en="Your account" />
      </h1>

      <div className="mt-10 space-y-6">
        {/* User Info Card */}
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-german-gold/20 text-2xl font-bold text-black/70">
              {user.full_name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-black">
                {user.full_name || 'Anonymous'}
              </h2>
              <p className="mt-1 text-sm text-black/60">{user.email}</p>
              <p className="mt-2 text-xs text-black/40">
                <Gloss de="Benutzer-ID" en="User ID" />: {user.id}
              </p>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-black">
            <Gloss de="Authentifizierung" en="Authentication" />
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-black/70">
              <Gloss de="Angemeldet" en="Logged in" />
            </span>
          </div>
          <p className="mt-2 text-sm text-black/50">
            <Gloss
              de="Du bist erfolgreich mit Google angemeldet."
              en="You are successfully signed in with Google."
            />
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={logout}
            className="rounded-lg border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 transition hover:bg-black/5"
          >
            <Gloss de="Abmelden" en="Log out" />
          </button>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-german-gold transition hover:bg-black/80"
          >
            <Gloss de="Zur Startseite" en="Go to home" />
          </button>
        </div>
      </div>
    </div>
  );
}
