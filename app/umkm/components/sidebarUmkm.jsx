'use client'
import { useState } from "react";
import { Menu, X, Search, SquareArrowOutDownLeft, SquareArrowOutUpRight, ClipboardList, Box, User } from "lucide-react";
import Link from "next/link";

export default function SidebarUmkm({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`fixed sm:static shadow-md top-0 left-0 h-full w-64 bg-white text-gray-800 p-6 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="flex justify-between items-center sm:hidden mb-6">
          <h2 className="text-xl font-bold text-gray-800">War<span className="text-green-600">Go</span></h2>
          <button onClick={() => setSidebarOpen(false)} className="text-green-600">
            <X />
          </button>
        </div>
        <div className="justify-center items-center hidden sm:flex">
          <h1 className="font-bold text-2xl text-gray-800">War<span className="text-green-600">GO</span></h1>
        </div>
        <div className="space-y-4 mt-4">
          <Link href="/umkm" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><Search className="mr-2"/>Cari Warung</Link>
          <Link href="/umkm/permintaan" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><SquareArrowOutDownLeft className="mr-2"/>Permintaan</Link>
          <Link href="/umkm/pengajuan" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><SquareArrowOutUpRight className="mr-2"/>Pengajuan</Link>
          <Link href="/umkm/titipan" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><ClipboardList className="mr-2"/>Titipan</Link>
          <Link href="/umkm/produk" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><Box className="mr-2"/>Produk</Link>
          <Link href="/umkm/akun" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><User className="mr-2"/>Akun</Link>
          <p className="text-[10px] text-gray-800 p-2 rounded bg-green-100">Note : Jika ingin jadi pemilik warung. masuk ke akun lalu Logout dan login ulang masuk sebagai pemilik warung.</p>
          <p className="text-[10px] text-gray-800 p-2 rounded bg-gray-100">Web ini masih prototipe masih dalam pengembangan fitur. Fitur belum berjalan dengan sempurna.</p>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-33 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Topbar for mobile */}
        <div className="sm:hidden flex items-center justify-between p-4 bg-transparent fixed z-31 w-full">
          <h1 className="text-lg font-bold text-gray-800 bg-white shadow rounded-full px-2">War<span className="text-green-600">Go</span></h1>
          <button className="bg-white rounded shadow-md p-1" onClick={() => setSidebarOpen(true)}>
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
