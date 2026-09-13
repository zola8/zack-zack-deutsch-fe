import { Gloss } from '../components/Gloss';
import { Stripe } from '../components/Stripe';

export function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-8 text-center">
        <Stripe className="h-1 w-24" />
        <p className="text-sm text-gray-300">
          © 2026, zack-zack-deutsch
        </p>
        <p className="text-xs text-gray-400">
          <Gloss
            de="Deutsch lernen — zack, zack."
            en="Learn German — quick, quick."
          />
        </p>
      </div>
    </footer>
  );
}
