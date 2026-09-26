import { X } from 'lucide-react';
import Logo from './Logo';
import SidebarNav from './SidebarNav';

export default function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full w-[400px] sidebar-bg">

      <div className="flex items-center gap-4 p-5 border-b border-white/10">
        <Logo />

        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-white tracking-tight leading-tight truncate">
            Zack-Zack-Deutsch
          </h1>
          <p className="text-xs text-white/50 mt-0.5 truncate">
            Your quick German journey
          </p>
        </div>

        <button onClick={onClose} className="btn btn-sm btn-ghost text-white/70 hover:text-white lg:hidden">
          <X size={20} />
        </button>
      </div>

      <SidebarNav />

      <div className="p-5 border-t border-white/10">
        Profile streak ...
      </div>
    </div>
  );
}
