import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Gloss } from '../components/Gloss';
import { saveToken } from '../utils/auth';

export default function LoginCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      saveToken(token);
      setTimeout(() => navigate('/', { replace: true }), 600);
    } else {
      setError('missing_token');
      setTimeout(() => navigate('/login', { replace: true }), 2500);
    }
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          <Gloss de="Fehler" en="error" />
        </p>
        <h1 className="mt-2 text-2xl font-bold text-black">
          <Gloss de="Anmeldung fehlgeschlagen" en="Login failed" />
        </h1>
        <p className="mt-4 text-black/50">
          <Gloss
            de="Du wirst zur Anmeldeseite weitergeleitet…"
            en="Redirecting you back to login…"
          />
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mt-32 flex flex-col items-center gap-5">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-german-gold" />
        <p className="text-lg font-semibold text-black/60">
          <Gloss de="Anmeldung läuft…" en="Signing you in…" />
        </p>
        <p className="text-sm text-black/30">
          <Gloss de="Einen Moment bitte" en="Just a moment" />
        </p>
      </div>
    </div>
  );
}
