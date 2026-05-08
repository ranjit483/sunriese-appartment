'use client';
import { Sidebar } from './components/sidebar';
import { Topbar } from './components/topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <Topbar />
        {children}
        <footer className="bg-white border-t border-gray-200 px-8 py-3 flex items-center justify-between text-[11px] text-gray-400 font-medium shrink-0">
           <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Database Connected</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Firebase Authenticated</span>
           </div>
           <div>© 2024 Sunrise Apartment ERP • Nakhhu-13, Lalitpur, Nepal</div>
        </footer>
      </main>
    </div>
  );
}
