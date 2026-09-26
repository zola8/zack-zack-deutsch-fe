import { Bell } from 'lucide-react';

export default function NotificationBell() {
  const hasNotifications = true;

  return (
    <button className="btn btn-sm btn-ghost btn-circle hover:bg-gray-100 text-gray-600">
      <div className="relative">
        <Bell size={20} />
        {hasNotifications && (
          <span className="absolute top-0 right-0 w-3 h-3 notification-badge rounded-full border-2 border-white"></span>
        )}
      </div>
    </button>
  );
}
