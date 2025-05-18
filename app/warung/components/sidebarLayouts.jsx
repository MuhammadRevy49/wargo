'use client'
import { useState } from "react";
import { Menu, X, Home, LayoutDashboard, ClipboardList, User } from "lucide-react";
import Link from "next/link";

export default function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`fixed sm:static shadow-md top-0 left-0 h-full w-64 bg-white text-gray-700 p-6 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="flex justify-between items-center sm:hidden mb-6">
          <h2 className="text-xl font-bold">War<span className="text-green-600">Go</span></h2>
          <button onClick={() => setSidebarOpen(false)} className="text-green-600">
            <X />
          </button>
        </div>
        <div className="justify-center items-center hidden sm:flex">
          <h1 className="font-bold text-2xl">War<span className="text-green-600">GO</span></h1>
        </div>
        <div className="space-y-4 mt-4">
          <Link href="/warung" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><Home className="mr-2"/>Beranda</Link>
          <Link href="/warung/dashboard" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><LayoutDashboard className="mr-2"/>Dashboard</Link>
          <Link href="/warung/titipan" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><ClipboardList className="mr-2"/>Titipan</Link>
          <Link href="/warung/akun" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><User className="mr-2"/>Akun</Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Topbar for mobile */}
        <div className="sm:hidden flex items-center justify-between p-4 shadow">
          <h1 className="text-lg font-bold text-green-600">WarGo</h1>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-green-600" />
          </button>
        </div>

        {/* Children content */}
        <main className="">
          {children}
        </main>
      </div>
    </div>
  );
}
