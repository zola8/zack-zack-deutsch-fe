import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';


export default function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="max-w-md text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          Fehler
        </p>

        <h1 className="mt-2 text-6xl font-semibold tracking-tight text-black">
          404
        </h1>

        <p className="mt-4 text-sm text-black/60">
          <Gloss
            de="Diese Seite existiert nicht."
            en="This page doesn't exist."
          />
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/85"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
