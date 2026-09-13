import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Fehler
        </p>

        <p className="mt-2 text-8xl font-black leading-none tracking-tight text-black">
          404
        </p>

        <p className="mt-6 text-lg text-gray-700">
          <Gloss de="Diese Seite existiert nicht" en="this page doesn't exist." />
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-german-gold transition-opacity hover:opacity-80"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
