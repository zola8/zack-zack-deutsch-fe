import { Languages, LayoutDashboard, Settings, SpellCheck } from 'lucide-react';

export type MenuItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export const mainMenuItems: MenuItem[] = [
  { path: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { path: '/translation', label: 'Translation', icon: <Languages size={20} /> },
  { path: '/grammar-check', label: 'Grammar check', icon: <SpellCheck size={20} /> },
];

export const bottomMenuItems: MenuItem[] = [
  { path: '/page5', label: 'Settings', icon: <Settings size={20} /> },
];
