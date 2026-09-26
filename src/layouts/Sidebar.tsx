import { LayoutDashboard, BookOpen, Mic, FileText, Settings, X } from 'lucide-react';

export default function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full w-64 sidebar-bg">
      
      {/* Header with Logo */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        {/* Logo SVG */}
        <Logo />

        <div className="flex-1">
          <h1 className="text-lg font-bold text-white tracking-tight leading-tight">DeutschLernen</h1>
          <p className="text-xs text-white/50">Your German journey</p>
        </div>

        {/* Close button for mobile */}
        <button onClick={onClose} className="btn btn-sm btn-ghost text-white/70 hover:text-white lg:hidden">
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
        <SidebarItem icon={<BookOpen size={20} />} label="Vocabulary" />
        <SidebarItem icon={<Mic size={20} />} label="Speaking" />
        <SidebarItem icon={<FileText size={20} />} label="Grammar" />

        <div className="pt-6 mt-6 border-t border-white/10">
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </div>
      </nav>

      {/* Bottom Profile/Streak */}
      <div className="p-4 border-t border-white/10">
        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
          <p className="text-xs text-white/60 mb-1">Daily Streak</p>
          <p className="text-lg font-bold text-white flex items-center gap-2">
            <span className="streak-gold">🔥</span> 12 Days
          </p>
          <progress className="progress w-full mt-2 h-2" value="60" max="100" style={{ '--progress-color': '#D97706' } as React.CSSProperties}></progress>
        </div>
      </div>
    </div>
  );
}

// Logo Component
function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="w-10 h-10 flex-shrink-0"
    >
      <defs>
        <clipPath id="pill">
          <rect x="6" y="22" width="52" height="20" rx="10" />
        </clipPath>
      </defs>
      {/* Olive background */}
      <rect width="64" height="64" rx="14" fill="#EEF0E0" />
      {/* German flag stripes */}
      <g clipPath="url(#pill)">
        <rect x="6" y="22" width="52" height="20" fill="#000000" />
        <rect x="23.33" y="22" width="17.34" height="20" fill="#DD0000" />
        <rect x="40.67" y="22" width="17.33" height="20" fill="#FFCE00" />
      </g>
    </svg>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`
      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
      ${active
        ? 'sidebar-active text-white'
        : 'text-white/70 hover:bg-white/10 hover:text-white'}
    `}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
