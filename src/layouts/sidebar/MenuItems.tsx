import { LayoutDashboard, BookOpen, Mic, FileText, Settings, Languages } from 'lucide-react';

export type MenuItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export const mainMenuItems: MenuItem[] = [
  { path: '/page1', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { path: '/page2', label: 'Vocabulary', icon: <BookOpen size={20} /> },
  { path: '/page3', label: 'Speaking', icon: <Mic size={20} /> },
  { path: '/page4', label: 'Grammar', icon: <FileText size={20} /> },
  { path: '/translation', label: 'Translation', icon: <Languages size={20} /> },
];

export const bottomMenuItems: MenuItem[] = [
  { path: '/page5', label: 'Settings', icon: <Settings size={20} /> },
];
