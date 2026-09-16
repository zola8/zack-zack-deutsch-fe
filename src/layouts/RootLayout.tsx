import { NavLink, Outlet, Link } from 'react-router';
import { Stripe } from '../components/Stripe';
import { Footer } from './Footer';
import { isAuthenticated, logout } from '../utils/auth';
import { Gloss } from '../components/Gloss';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3.5 py-1.5 text-sm font-semibold transition-colors ${isActive ? 'bg-black text-german-gold' : 'text-black/60 hover:bg-black/5 hover:text-black'
  }`;

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2.5">
      <Stripe className="h-2 w-9 rounded-sm" />
      <span className="text-lg font-bold tracking-tight text-black">
        zack-zack-deutsch
      </span>
    </NavLink>
  );
}

function NavLinks() {
  const isLoggedIn = isAuthenticated();

  return (
    <>
      <NavLink to="/" end className={navLinkClass}>Start</NavLink>
      <NavLink to="/translate" className={navLinkClass}>Übersetzen</NavLink>
      <NavLink to="/about" className={navLinkClass}>Über</NavLink>

      {isLoggedIn && (
        <NavLink to="/me" className={navLinkClass}>Profil</NavLink>
      )}
    </>
  );
}

function AuthButton() {
  const isLoggedIn = isAuthenticated();

  if (isLoggedIn) {
    return (
      <button
        onClick={logout}
        className="ml-2 rounded-md border border-black/10 px-3.5 py-1.5 text-sm font-semibold text-black/70 transition-colors hover:bg-black/5 hover:text-black"
      >
        <Gloss de="Abmelden" en="Log out" />
      </button>
    );
  }

  return (
    <Link
      to="/login"
      className="ml-2 rounded-md bg-black px-3.5 py-1.5 text-sm font-semibold text-german-gold transition-colors hover:bg-black/80"
    >
      <Gloss de="Anmelden" en="Log in" />
    </Link>
  );
}

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-olive-25">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-olive-50/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="flex items-center gap-1.5">
            <NavLinks />
            <AuthButton />
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
