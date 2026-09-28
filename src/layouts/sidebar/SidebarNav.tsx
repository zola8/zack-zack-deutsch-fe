import { Link, useLocation } from 'react-router-dom';
import { mainMenuItems, bottomMenuItems } from './MenuItems';


export default function SidebarNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
        {mainMenuItems.map((item) => (
          <SidebarItem
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.label}
            active={currentPath === item.path}
          />
        ))}

        <div className="pt-6 mt-6 border-t border-white/10">
          {bottomMenuItems.map((item) => (
            <SidebarItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              active={currentPath === item.path}
            />
          ))}
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