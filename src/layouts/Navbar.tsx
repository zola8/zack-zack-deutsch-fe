import { Menu, Search, Bell } from 'lucide-react';

export default function Navbar({ onToggleSidebar, isSidebarOpen }: { onToggleSidebar: () => void, isSidebarOpen: boolean }) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-20">

      {/* Left: Toggle Button & Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="btn btn-sm btn-ghost hover:bg-gray-100 text-gray-600"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Breadcrumbs / Page Title */}
        <div className="hidden sm:block">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search words..."
            className="input input-sm input-bordered pl-9 w-64 bg-gray-50 focus:bg-white border-gray-200"
          />
        </div>

        {/* Notifications */}
        <button className="btn btn-sm btn-ghost btn-circle hover:bg-gray-100 text-gray-600">
          <div className="indicator">
            <Bell size={20} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Replace the avatar section in Navbar.tsx */}
        <div className="avatar placeholder">
          <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ring-2 ring-white">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
