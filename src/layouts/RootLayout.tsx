import { NavLink, Outlet } from 'react-router';
import { Stripe } from '../components/Stripe';
import { Footer } from './Footer';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3.5 py-1.5 text-sm font-semibold transition-colors ${isActive
    ? 'bg-black text-german-gold'
    : 'text-black/60 hover:bg-black/5 hover:text-black'
  }`;


export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-olive-25">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-olive-50/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <NavLink to="/" className="flex items-center gap-2.5">
            <Stripe className="h-2 w-9 rounded-sm" />
            <span className="text-lg font-bold tracking-tight text-black">
              zack-zack-deutsch
            </span>
          </NavLink>
          <nav className="flex items-center gap-1.5">
            <NavLink to="/" end className={navLinkClass}>Start</NavLink>
            <NavLink to="/translate" className={navLinkClass}>Übersetzen</NavLink>
            <NavLink to="/about" className={navLinkClass}>Über</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
