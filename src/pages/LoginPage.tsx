import { Gloss } from '../components/Gloss';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE}/auth/google/login`;
  };

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
        <Gloss de="Anmelden" en="sign in" />
      </p>

      <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
        <Gloss de="Willkommen zurück" en="Welcome back" />
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-black/70">
        <Gloss
          de="Melde dich mit deinem Google-Konto an, um deinen Lernfortschritt zu speichern."
          en="Sign in with your Google account to save your learning progress."
        />
      </p>

      <div className="mt-16 flex flex-col items-center gap-6">
        <button
          onClick={handleGoogleLogin}
          className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-8 py-4 shadow-sm transition-all hover:border-black/20 hover:bg-black/[0.02] hover:shadow-md active:scale-[0.98]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-base font-semibold text-black">
            <Gloss de="Mit Google anmelden" en="Sign in with Google" />
          </span>
        </button>

        <p className="text-sm text-black/40">
          <Gloss
            de="Kein Passwort nötig. Schnell und sicher."
            en="No password needed. Fast and secure."
          />
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Was passiert als Nächstes?" en="What happens next?" />
        </h2>
        <ul className="mt-4 space-y-2">
          {[
            { de: 'Du wirst zu Google weitergeleitet', en: 'You\'ll be redirected to Google' },
            { de: 'Bestätige den Zugriff', en: 'Confirm access' },
            { de: 'Du kommst automatisch zurück', en: 'You\'ll be brought right back' },
          ].map((step, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-german-gold/20 text-xs font-bold text-black/70">
                {i + 1}
              </span>
              <span className="font-semibold text-black/80">
                <Gloss de={step.de} en={step.en} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
