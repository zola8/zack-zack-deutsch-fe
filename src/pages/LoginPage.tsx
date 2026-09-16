import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Gloss } from '../components/Gloss';
import { GoogleLogo } from '../components/GoogleLogo';
import { loginWithGoogle } from '../utils/auth';

type Message = { de: string; en: string };

const FALLBACK_ERROR: Message = {
  de: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
  en: 'Something went wrong. Please try again.',
};

// Keys match the backend's callback redirects
const ERROR_MESSAGES: Record<string, Message> = {
  access_denied: {
    de: 'Anmeldung abgebrochen – Google-Zugriff wurde verweigert.',
    en: 'Sign-in cancelled – Google access was denied.',
  },
  auth_failed: {
    de: 'Anmeldung bei Google fehlgeschlagen. Bitte versuche es erneut.',
    en: 'Google sign-in failed. Please try again.',
  },
  no_userinfo: {
    de: 'Google-Profil konnte nicht gelesen werden.',
    en: 'Could not read your Google profile.',
  },
  user_failed: {
    de: 'Konto konnte nicht erstellt werden.',
    en: 'Could not create your account.',
  },
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Re-enables the button if navigation is blocked (e.g. backend down)
  useEffect(() => {
    if (!isRedirecting) return;

    const timeout = window.setTimeout(() => setIsRedirecting(false), 8000);
    return () => window.clearTimeout(timeout);
  }, [isRedirecting]);

  const handleGoogleLogin = () => {
    setIsRedirecting(true);
    loginWithGoogle();
  };

  const errorCode = searchParams.get('error');
  const errorText = errorCode
    ? (ERROR_MESSAGES[errorCode] ?? FALLBACK_ERROR)
    : null;

  return (
    <div className="mx-auto max-w-sm py-16">
      <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Anmelden
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-black/60">
            <Gloss
              de="Speichere deinen Lernfortschritt mit deinem Google-Konto."
              en="Save your learning progress with your Google account."
            />
          </p>
        </div>

        {errorText && (
          <p
            role="alert"
            className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-xs leading-relaxed text-red-600"
          >
            <Gloss de={errorText.de} en={errorText.en} />
          </p>
        )}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isRedirecting}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-black/[0.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <GoogleLogo className="h-5 w-5 shrink-0" />

          <span>
            {isRedirecting ? 'Weiterleitung…' : 'Mit Google anmelden'}
          </span>
        </button>

        <p className="mt-4 text-center text-xs text-black/40">
          <Gloss de="Kein Passwort nötig." en="No password needed." />
        </p>
      </div>
    </div>
  );
}
