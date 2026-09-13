import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';
import { Stripe } from '../components/Stripe';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-4xl px-4 text-center">
        <Stripe className="mx-auto h-1.5 w-16 rounded-full" />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
          <Gloss de="Fehler" en="error" />
        </p>

        <p className="mt-2 text-8xl font-black leading-none tracking-tight text-black">
          404
        </p>

        <p className="mt-6 text-lg text-black/70">
          <Gloss de="Diese Seite existiert nicht." en="This page doesn't exist." />
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-black px-6 py-3 font-semibold text-german-gold transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
