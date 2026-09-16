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
    ? 'bg-black text-white'
    : 'text-black/60 hover:bg-black/5 hover:text-black'
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive
    ? 'bg-black text-white'
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

function AuthButton({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  const { user, loading, isLoggedIn } = useAuth();

  const baseClass =
    'inline-flex items-center rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors';

  if (loading) {
    return (
      <span
        className={`${baseClass} text-transparent bg-black/5 animate-pulse ${className}`}
      >
        ...
      </span>
    );
  }

  if (isLoggedIn) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        {user?.full_name && (
          <span className="hidden text-sm text-black/60 lg:inline">
            {user.full_name}
          </span>
        )}
        <button
          type="button"
          onClick={() => {
            onClick?.();
            logout();
          }}
          className={`${baseClass} border border-black/10 bg-white text-black/70 hover:bg-black/5 hover:text-black`}
        >
          Abmelden
        </button>
      </span>
    );
  }

  return (
    <Link
      to="/login"
      onClick={onClick}
      className={`${baseClass} bg-black text-white hover:bg-black/85 ${className}`}
    >
      Anmelden
    </Link>
  );
}

function DesktopNav() {
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
      <AuthButton className="ml-2" />
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={`${open ? 'block' : 'hidden'
        } border-t border-black/10 bg-white px-4 pb-4 pt-3 md:hidden`}
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
      </nav>
      <div className="mt-3 border-t border-black/10 pt-3">
        <AuthButton onClick={onClose} className="w-full justify-center" />
      </div>
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
      <header className="sticky top-0 z-20 border-b border-black/10 bg-white">
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
