'use client'

import SidebarLayout from "./components/sidebarLayouts";
import SliderImage from "../components/slider";
import { Search } from "lucide-react";

export default function WarungPage() {
  return (
    <SidebarLayout>
      <SliderImage />
      <div className="p-4">
        <div className="relative inset-0 flex items-center justify-center z-20">
          <div className="w-[95%] sm:w-[70%] md:w-[50%]">
            <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <button className="px-3 py-2 text-green-600"><Search /></button>
              <input
                type="search"
                placeholder="Cari disini..."
                className="w-full px-2 py-2 text-sm text-black focus:outline-none"
              />
              <button className="bg-green-600 text-white px-4 py-3 text-sm hover:bg-green-700 transition-all duration-300">
                Cari
              </button>
            </div>
          </div>
        </div>
        {/** */}
        {/* Filter */}
        <div className="flex flex-wrap gap-4 items-end justify-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-4">
          {/* Kota */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-1">Kota</label>
            <select className="px-2 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-green-500">
              <option>Semua</option>
              <option>Cimahi</option>
              <option>Bandung</option>
              <option>Jakarta</option>
            </select>
          </div>

          {/* Jenis Produk */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-1">Jenis Produk</label>
            <select className="px-2 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-green-500">
              <option>Semua</option>
              <option>Makanan Snack</option>
              <option>Makanan Berat</option>
              <option>Minuman Kemasan</option>
              <option>Minuman Fresh</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-1">Status</label>
            <select className="px-2 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-green-500">
              <option>Semua</option>
              <option>Buka</option>
              <option>Tutup</option>
            </select>
          </div>
        </div>

      </div>
    </SidebarLayout>
  );
}
