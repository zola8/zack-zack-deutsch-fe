import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { Stripe } from '../components/Stripe';
import { Footer } from './Footer';
import { useAuth } from '../auth/AuthContext';
import { logout } from '../utils/auth';

type MenuItem = {
  to: string;
  label: string;
  end?: boolean;
};

const menuItems: MenuItem[] = [
  { to: '/', label: 'Start', end: true },
  { to: '/translate', label: 'Übersetzen' },
  { to: '/about', label: 'Über' },
  { to: '/me', label: 'Profil' },
];

const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${isActive
    ? 'bg-german-gold/30 text-black'
    : 'text-black/60 hover:bg-black/5 hover:text-black'
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive
    ? 'bg-german-gold/30 text-black'
    : 'text-black/70 hover:bg-black/5 hover:text-black'
  }`;

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <NavLink to="/" onClick={onClick} className="flex items-center gap-2.5">
      <Stripe className="h-1.5 w-7 rounded-full" />
      <span className="text-base font-semibold tracking-tight text-black">
        zack-zack-deutsch
      </span>
    </NavLink>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M3 5h14M3 10h14M3 15h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function DesktopNav() {
  const { loading, isLoggedIn } = useAuth();

  return (
    <nav className="hidden items-center gap-1.5 md:flex">
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={desktopNavLinkClass}
        >
          {item.label}
        </NavLink>
      ))}

      {loading ? (
        <span className="rounded-md px-3.5 py-1.5 text-sm font-medium text-transparent bg-black/5 animate-pulse">
          ...
        </span>
      ) : isLoggedIn ? (
        <button
          type="button"
          onClick={logout}
          className="rounded-md px-3.5 py-1.5 text-sm font-medium text-black/60 transition-colors hover:bg-black/5 hover:text-black"
        >
          Abmelden
        </button>
      ) : (
        <NavLink
          to="/login"
          className={desktopNavLinkClass}
        >
          Anmelden
        </NavLink>
      )}
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { loading, isLoggedIn } = useAuth();

  return (
    <div
      id="mobile-menu"
      className={`${open ? 'block' : 'hidden'
        } border-t border-german-gold/30 bg-german-gold/10 px-4 pb-4 pt-3 md:hidden`}
    >
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onClose}
            className={mobileNavLinkClass}
          >
            {item.label}
          </NavLink>
        ))}

        {loading ? (
          <span className="block rounded-md px-3 py-2 text-base font-medium text-transparent bg-black/5 animate-pulse">
            ...
          </span>
        ) : isLoggedIn ? (
          <button
            type="button"
            onClick={() => {
              onClose();
              logout();
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-black"
          >
            Abmelden
          </button>
        ) : (
          <NavLink
            to="/login"
            onClick={onClose}
            className={mobileNavLinkClass}
          >
            Anmelden
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="sticky top-0 z-20 border-b border-german-gold/30 bg-german-gold/10">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <Logo onClick={() => setMobileMenuOpen(false)} />
          <DesktopNav />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-black/70 transition-colors hover:bg-black/5 hover:text-black md:hidden"
          >
            <span className="sr-only">Menü umschalten</span>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
