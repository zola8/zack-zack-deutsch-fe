import { NavLink, Outlet } from 'react-router';
import { Stripe } from '../components/Stripe';
import { Footer } from './Footer';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
    ? 'bg-black text-german-gold'
    : 'text-gray-600 hover:bg-black/5 hover:text-black'
  }`;

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-olive-100">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-olive-50/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <NavLink to="/" className="flex items-center gap-2.5">
            <Stripe className="h-1.5 w-8" />
            <span className="text-lg font-bold tracking-tight text-black">
              zack-zack-deutsch
            </span>
          </NavLink>
          <nav className="flex gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Start
            </NavLink>
            <NavLink to="/translate" className={navLinkClass}>
              Übersetzen
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Über
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
