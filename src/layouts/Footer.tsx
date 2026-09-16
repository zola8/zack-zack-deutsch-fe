import { Stripe } from '../components/Stripe';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-german-gold/30 bg-german-gold/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center">
        <div className="flex items-center gap-2.5">
          <Stripe className="h-1.5 w-7 rounded-full" />
          <span className="text-sm font-semibold tracking-tight text-black">
            zack-zack-deutsch
          </span>
        </div>

        <p className="text-xs text-black/50">© 2026, Zoltán M.</p>
      </div>
    </footer>
  );
}
