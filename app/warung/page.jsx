'use client'
import { useState } from "react";
import { Menu, X, Home, BoxIcon, FormInputIcon, User } from "lucide-react";
import SliderImage from "../components/slider";

export default function Warung() {
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
        <div className="space-y-4 mt-4">
          <a href="#" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><Home className="mr-2"/>Dashboard</a>
          <a href="#" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><BoxIcon className="mr-2"/>Produk</a>
          <a href="#" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><FormInputIcon className="mr-2"/>Pesanan</a>
          <a href="#" className="p-2 flex items-center hover:text-white hover:bg-green-600 hover:rounded transition-all border-b border-gray-200"><User className="mr-2"/>Akun</a>
        </div>
      </div>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Mobile Navbar */}
        <div className="sm:hidden flex items-center justify-between p-4 shadow">
          <h1 className="text-lg font-bold text-green-600">WarGo</h1>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-green-600" />
          </button>
        </div>

        {/* Main Content */}
        <SliderImage />
        <div className="px-4 py-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-700">
            Cari Produk Untuk Jualan <span className="text-green-600">Disini.</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-3xl mx-auto">
            {/* Kota */}
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Kota</label>
              <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-green-600 text-black">
                <option className="bg-white text-black">Cimahi</option>
                <option className="bg-white text-black">Bandung</option>
                <option className="bg-white text-black">Jakarta</option>
              </select>
            </div>

            {/* Jenis Produk */}
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Jenis Produk</label>
              <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-600">
                <option>Semua</option>
                <option>Makanan Snack</option>
                <option>Makanan Berat</option>
                <option>Minuman Kemasan</option>
                <option>Minuman Fresh</option>
              </select>
            </div>

            {/* Status Buka */}
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Status</label>
              <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-green-600">
                <option>Semua</option>
                <option>Buka</option>
                <option>Tutup</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
