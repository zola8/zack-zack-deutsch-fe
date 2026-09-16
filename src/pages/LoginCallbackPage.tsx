import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Gloss } from '../components/Gloss';
import { useAuth } from '../auth/AuthContext';

type Message = { de: string; en: string };

const FALLBACK_ERROR: Message = {
  de: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
  en: 'Something went wrong. Please try again.',
};

const ERROR_MESSAGES: Record<string, Message> = {
  access_denied: {
    de: 'Anmeldung abgebrochen – Google-Zugriff wurde verweigert.',
    en: 'Sign-in cancelled – Google access was denied.',
  },
  auth_failed: {
    de: 'Anmeldung bei Google fehlgeschlagen.',
    en: 'Google sign-in failed.',
  },
  no_userinfo: {
    de: 'Google-Profil konnte nicht gelesen werden.',
    en: 'Could not read your Google profile.',
  },
  user_failed: {
    de: 'Konto konnte nicht erstellt werden.',
    en: 'Could not create your account.',
  },
  not_authenticated: {
    de: 'Die Anmeldung konnte nicht abgeschlossen werden.',
    en: 'Login could not be completed.',
  },
};

export default function LoginCallbackPage() {
  const { refresh } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<Message | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const fail = (code: string) => {
      if (cancelled) return;
      setError(ERROR_MESSAGES[code] ?? FALLBACK_ERROR);
      timers.push(
        window.setTimeout(() => navigate('/login', { replace: true }), 3000),
      );
    };

    const oauthError = searchParams.get('error');
    if (oauthError) {
      fail(oauthError);
    } else {
      void refresh().then((user) => {
        if (cancelled) return;
        if (user) {
          navigate('/', { replace: true });
        } else {
          fail('not_authenticated');
        }
      });
    }

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [searchParams, navigate, refresh]);

  if (error) {
    return (
      <div className="mx-auto flex max-w-sm flex-col items-center justify-center py-24 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-lg font-semibold text-red-600">!</div>
        <h1 className="mt-5 text-xl font-semibold tracking-tight text-black">
          <Gloss de="Anmeldung fehlgeschlagen" en="Login failed" />
        </h1>
        <p className="mt-2 text-sm text-black/60">
          <Gloss de={error.de} en={error.en} />
        </p>
        <p className="mt-6 text-xs text-black/40">
          <Gloss de="Du wirst zur Anmeldeseite weitergeleitet…" en="Redirecting you back to login…" />
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center py-24 text-center">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-black/10 border-t-black" />
      <p className="mt-5 text-sm font-medium text-black/70">
        <Gloss de="Anmeldung läuft…" en="Signing you in…" />
      </p>
    </div>
  );
}
