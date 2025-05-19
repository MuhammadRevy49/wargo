'use client'

import SidebarLayout from "./components/sidebarLayouts";
import SliderImage from "../components/slider";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const options = {
  kota: ["Semua", "Cimahi", "Bandung", "Jakarta", "Palembang"],
  jenis: ["Semua", "Makanan Snack", "Makanan Berat", "Minuman Kemasan", "Minuman Fresh"]
};

function Dropdown({ label, selected, setSelected, items, activeDropdown, setActiveDropdown }) {
  const isOpen = activeDropdown === label;

  return (
    <div className="relative w-full">
      <button
        onClick={() => setActiveDropdown(isOpen ? null : label)}
        className="w-full flex justify-between items-center px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-green-500"
      >
        {selected}
        <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item);
                setActiveDropdown(null);
              }}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-green-100 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WarungPage() {
  const [kota, setKota] = useState("Semua");
  const [jenis, setJenis] = useState("Semua");
  const [status, setStatus] = useState("Semua");
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <SidebarLayout>
      <SliderImage />
      <div className="p-4">
        {/* Search */}
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

        {/* Filter */}
        <div className="w-full flex justify-center pt-4 px-4">
          <div className="w-full max-w-4xl flex gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex-1 min-w-[140px]">
              <p className="text-sm font-medium mb-1 text-gray-700">Cari Kota</p>
              <Dropdown
                label="Kota"
                selected={kota}
                setSelected={setKota}
                items={options.kota}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <p className="text-sm font-medium mb-1 text-gray-700">Cari Jenis</p>
              <Dropdown
                label="Jenis Produk"
                selected={jenis}
                setSelected={setJenis}
                items={options.jenis}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
