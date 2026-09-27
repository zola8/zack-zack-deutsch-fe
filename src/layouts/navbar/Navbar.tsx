import { Menu } from 'lucide-react';
import NotificationBell from './NotificationBell';
import UserAvatar from './UserAvatar';

export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-20">

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="btn btn-sm btn-ghost hover:bg-gray-100 text-gray-600"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="hidden sm:block">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NotificationBell />
        <UserAvatar />
      </div>
    </header>
  );
}
