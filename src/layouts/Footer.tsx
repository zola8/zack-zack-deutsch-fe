import { Stripe } from '../components/Stripe';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-olive-50/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-8 text-center">
        <div className="flex items-center gap-2.5">
          <Stripe className="h-2 w-9 rounded-sm" />
          <span className="text-sm font-bold tracking-tight text-black">
            zack-zack-deutsch
          </span>
        </div>

        <p className="text-xs text-black/40">© 2026, Zoltán M.</p>
      </div>
    </footer>
  );
}
