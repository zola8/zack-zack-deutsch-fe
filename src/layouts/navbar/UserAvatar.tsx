import { useAuth } from "../../context/AuthContext";


export default function UserAvatar() {
  const { user, isLoading, isAuthenticated, login, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="avatar placeholder">
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <button onClick={login} className="btn btn-sm btn-neutral text-white">
        Login
      </button>
    );
  }

  const initials = user.name
    ? user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
    : 'U';

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar placeholder cursor-pointer">
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ring-2 ring-white hover:ring-gray-300 transition-all">
          {user.picture ? (
            <img src={user.picture} alt={user.name || 'User'} className="rounded-full" />
          ) : (
            initials
          )}
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-200">
        <li className="px-3 py-2 border-b border-gray-100 mb-2">
          <p className="text-sm font-medium text-gray-800 truncate">{user.name || 'User'}</p>
          <p className="text-xs text-gray-500 truncate">{user.email}</p>
        </li>
        <li><a className="hover:bg-gray-100">Profile</a></li>
        <li><a className="hover:bg-gray-100">Settings</a></li>
        <li>
          <a className="hover:bg-gray-100 text-red-600" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
