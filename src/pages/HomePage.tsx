import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';
import { Stripe } from '../components/Stripe';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl pb-20 pt-16 text-center">
      <Stripe className="mx-auto h-2 w-24 rounded-full" />

      <h1 className="mt-8 text-5xl font-black tracking-tight text-black sm:text-6xl">
        Deutsch? Zack, zack!
      </h1>

      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-black/70">
        <Gloss
          de="Lerne Deutsch schnell und ohne Umwege."
          en="Learn German fast — no detours."
        />
      </p>

      <div className="mt-10 flex items-center justify-center gap-3">
        <Link
          to="/translate"
          className="rounded-md bg-black px-5 py-2.5 font-semibold text-german-gold transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Jetzt übersetzen
        </Link>
        <Link
          to="/about"
          className="rounded-md border border-black/15 px-5 py-2.5 font-semibold text-black/70 transition-colors hover:bg-black/5 hover:text-black"
        >
          Mehr erfahren
        </Link>
      </div>
    </section>
  );
}
