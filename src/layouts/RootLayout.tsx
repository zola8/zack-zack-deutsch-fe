import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      
      <aside
        className={`
          transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden
          ${isSidebarOpen ? 'w-64' : 'w-0'}
          fixed inset-y-0 left-0 z-40 lg:relative lg:z-auto
        `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">[ Main Content Area ]</h2>
              <p className="text-gray-500">The sidebar is currently <strong>{isSidebarOpen ? 'OPEN' : 'CLOSED'}</strong>.</p>
              <p className="text-sm text-gray-400 mt-4">Click the menu icon in the top left to toggle it.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
