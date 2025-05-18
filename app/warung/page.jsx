'use client'

import SidebarLayout from "./components/sidebarLayouts";
import SliderImage from "../components/slider";

export default function WarungPage() {
  return (
    <SidebarLayout>
      <SliderImage />
      <div className="p-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          Cari Produk Untuk Jualan <span className="text-green-600">Disini.</span>
        </h1>
        {/* Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-3xl mx-auto">
          {/* Kota */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Kota</label>
            <select className="w-full p-2 border border-gray-200 rounded text-black">
              <option>Semua</option>
              <option>Cimahi</option>
              <option>Bandung</option>
              <option>Jakarta</option>
            </select>
          </div>

          {/* Jenis Produk */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Jenis Produk</label>
            <select className="w-full p-2 border border-gray-200 rounded text-black">
              <option>Semua</option>
              <option>Makanan Snack</option>
              <option>Makanan Berat</option>
              <option>Minuman Kemasan</option>
              <option>Minuman Fresh</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Status</label>
            <select className="w-full p-2 border border-gray-200 rounded text-black">
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
