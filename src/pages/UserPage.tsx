import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';
import { useAuth } from '../auth/AuthContext';
import { logout } from '../utils/auth';

export default function UserPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-black/10 border-t-black" />
        <p className="mt-5 text-sm font-medium text-black/70">
          <Gloss de="Lade Profil…" en="Loading profile…" />
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          <Gloss de="Dein Konto" en="Your account" />
        </h1>
        <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 text-center">
          <p className="text-sm text-black/60">
            <Gloss
              de="Du bist nicht angemeldet."
              en="You are not logged in."
            />
          </p>
          <Link
            to="/login"
            className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/85"
          >
            <Gloss de="Anmelden" en="Log in" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight text-black">
        <Gloss de="Dein Konto" en="Your account" />
      </h1>
      <div className="mt-8 rounded-xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold text-black">
          {user.full_name || 'Anonymous'}
        </h2>
        <p className="mt-1 text-sm text-black/60">{user.email}</p>
        <p className="mt-2 text-xs text-black/40">
          <Gloss de="Benutzer-ID" en="User ID" />: {user.id}
        </p>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={logout}
          className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-black"
        >
          <Gloss de="Abmelden" en="Log out" />
        </button>
        <Link
          to="/"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/85"
        >
          <Gloss de="Zur Startseite" en="Go to home" />
        </Link>
      </div>
    </div>
  );
}
