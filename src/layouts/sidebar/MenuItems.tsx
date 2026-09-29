import { LayoutDashboard, BookOpen, Mic, FileText, Settings, Languages } from 'lucide-react';

export type MenuItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export const mainMenuItems: MenuItem[] = [
  { path: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { path: '/translation', label: 'Translation', icon: <Languages size={20} /> },
  { path: '/vocabulary', label: 'Vocabulary', icon: <BookOpen size={20} /> },
  { path: '/speaking', label: 'Speaking', icon: <Mic size={20} /> },
  { path: '/grammar', label: 'Grammar', icon: <FileText size={20} /> },
];

export const bottomMenuItems: MenuItem[] = [
  { path: '/page5', label: 'Settings', icon: <Settings size={20} /> },
];
