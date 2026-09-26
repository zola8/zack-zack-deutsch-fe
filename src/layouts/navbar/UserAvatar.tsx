export default function UserAvatar() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar placeholder cursor-pointer">
        <div className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ring-2 ring-white hover:ring-gray-300 transition-all">
          U
        </div>
      </div>

      {/* Dropdown menu */}
      <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-200">
        <li><a className="hover:bg-gray-100">Profile</a></li>
        <li><a className="hover:bg-gray-100">Settings</a></li>
        <li><a className="hover:bg-gray-100 text-red-600">Logout</a></li>
      </ul>
    </div>
  );
}
