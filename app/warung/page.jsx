'use client'
import SliderImage from "../components/slider";

export default function Warung() {
  return (
    <div className="bg-white h-screen">
      <SliderImage />
      <div className="px-4 py-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-700">
          Cari Produk Untuk Jualan <span className="text-green-600">Disini.</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-3xl mx-auto">
          {/* Kota */}
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Kota</label>
            <select className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring focus:ring-green-600">
              <option className="bg-white text-black">Cimahi</option>
              <option className="bg-white text-black">Bandung</option>
              <option className="bg-white text-black">Jakarta</option>
            </select>
          </div>

          {/* Jenis Warung */}
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
  );
}