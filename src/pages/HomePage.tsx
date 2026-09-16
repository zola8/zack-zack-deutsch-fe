import { Link } from 'react-router';
import { Gloss } from '../components/Gloss';
import { Stripe } from '../components/Stripe';


export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-xl flex-col items-center justify-center text-center">
      <Stripe className="h-1.5 w-12 rounded-full" />

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
        Deutsch? Zack, zack!
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-black/60">
        <Gloss
          de="Übersetze Texte und lerne Deutsch Schritt für Schritt."
          en="Translate texts and learn German step by step."
        />
      </p>

      <Link
        to="/translate"
        className="mt-8 rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/85"
      >
        Jetzt übersetzen
      </Link>
    </section>
  );
}
