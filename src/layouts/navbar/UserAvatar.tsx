import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function UserAvatar() {
  const { user, isLoading, isAuthenticated, login, logout } = useAuth();

  const initials = user?.name ? user.name[0].toUpperCase() : 'U';

  if (isLoading) {
    return (
      <div className="avatar placeholder">
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <button
        onClick={login}
        className="avatar placeholder cursor-pointer hover:opacity-80 transition-opacity"
        title="Click to login"
      >
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ring-2 ring-white hover:ring-gray-300 transition-all">
          U
        </div>
      </button>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar placeholder cursor-pointer">
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ring-2 ring-white hover:ring-gray-300 transition-all">
          {user?.picture ? (
            <img src={user.picture} alt={user.name || 'User'} className="rounded-full" />
          ) : (
            initials
          )}
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-200">
        <li className="px-3 py-2 border-b border-gray-100 mb-2 pointer-events-none">
          <p className="text-sm font-medium text-gray-800 truncate">{user?.name || 'User'}</p>
          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        </li>
        <li>
          <Link to="/user/profile" className="hover:bg-gray-100"> Profile </Link>
        </li>
        <li>
          <Link to="/user/settings" className="hover:bg-gray-100"> Settings </Link>
        </li>
        <li>
          <a className="hover:bg-gray-100 text-red-600" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
