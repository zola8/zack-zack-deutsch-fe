import { Link } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Mic, FileText, Settings } from 'lucide-react';


export default function SidebarNav() {
  return (
    <>
      <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
        <SidebarItem to="/page1" icon={<LayoutDashboard size={20} />} label="Dashboard" active />
        <SidebarItem to="/page2" icon={<BookOpen size={20} />} label="Vocabulary" />
        <SidebarItem to="/page3" icon={<Mic size={20} />} label="Speaking" />
        <SidebarItem to="/page4" icon={<FileText size={20} />} label="Grammar" />

        <div className="pt-6 mt-6 border-t border-white/10">
          <SidebarItem to="/page5" icon={<Settings size={20} />} label="Settings" />
        </div>
      </nav>
    </>
  );
}

function SidebarItem({ to, icon, label, active = false }: { to: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link
      to={to}
      className={`
        w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer
        ${active
          ? 'sidebar-active text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white'}
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
