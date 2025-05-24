'use client'

import SidebarUmkm from "./components/sidebarUmkm";
import SliderImage from "../components/slider";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const options = {
  kota: ["Semua", "Cimahi", "Bandung", "Jakarta", "Palembang"],
  jenis: ["Semua", "Makanan Snack", "Makanan Berat", "Minuman Kemasan", "Minuman Fresh"]
};

function Dropdown({ label, selected, setSelected, items, activeDropdown, setActiveDropdown, className }) {
  const isOpen = activeDropdown === label;

  return (
    <div className="relative w-full">
      <button
        onClick={() => setActiveDropdown(isOpen ? null : label)}
        className="w-full flex justify-between items-center px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-green-500"
      >
        {selected}
        <ChevronDown className="w-4 h-4 ml-2 text-gray-800" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 text-gray-800 rounded-md shadow-md">
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

export default function UmkmPage() {
  const [kota, setKota] = useState("Semua");
  const [jenis, setJenis] = useState("Semua");
  const [status, setStatus] = useState("Semua");
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Dummy data
  const warungs = [
    {
      nama: "Kantin SMAN 2",
      alamat: "Jl. K.H. Usman Dhomiri",
      gambar: "https://sman2bondowoso.sch.id/images/Fasilitas/kantin1.jpg",
      kontak: "#"
    },
    {
      nama: "Warung Bu Nini",
      alamat: "Jl. Merdeka No. 10",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh1g5a8a-BS5KTrAIhZGGb1aHwiv9vjHZ3A&s",
      kontak: "#"
    },
    {
      nama: "Warung Bu Eros",
      alamat: "Jl. Sukabumi",
      gambar: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/146/2024/03/08/WhatsApp-Image-2024-03-08-at-155437-40808901.jpeg",
      kontak: "#"
    }
  ];

  return (
    <SidebarUmkm>
      <SliderImage />
      <div className="p-4 bg-gray-50">
        {/* Search */}
        <div className="relative inset-0 flex items-center justify-center z-20">
          <div className="w-[95%] sm:w-[70%] md:w-[50%]">
            <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <button className="px-3 py-2 text-green-600"><Search /></button>
              <input
                type="search"
                placeholder="Cari Warung / toko / kantin"
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
              <p className="text-sm font-medium mb-1 text-gray-800">Cari Kota</p>
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
              <p className="text-sm font-medium mb-1 text-gray-800">Cari Jenis</p>
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

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {warungs.map((warung, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <img
                src={warung.gambar}
                alt={warung.nama}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="md:text-lg text-sm font-semibold text-gray-800 mb-1">{warung.nama}</h2>
                <p className="text-[12px] md:text-sm text-gray-600 mb-4">{warung.alamat}</p>
                <a
                  href={warung.kontak}
                  className="mt-auto bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 text-center"
                >
                  Hubungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarUmkm>
  );
}
