'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Lock scroll when sidebar open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-green-600 flex items-center gap-2">
          <span>WarGo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-700 transition-all">Beranda</Link>
          <Link href="/warung" className="hover:text-green-700 transition-all">Untuk Warung</Link>
          <Link href="/umkm" className="hover:text-green-700 transition-all">Untuk UMKM</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="text-gray-700"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 text-sm font-semibold transition-all duration-300"
          >
            Daftar / Masuk
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl font-bold text-green-600">WarGo</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-green-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-3 px-4 py-4 text-gray-700 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-all">Beranda</Link>
          <Link href="/warung" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-all">Untuk Warung</Link>
          <Link href="/umkm" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-all">Untuk UMKM</Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-green-600 text-white text-center py-2 rounded-full hover:bg-green-700 text-sm font-semibold transition-all"
          >
            Daftar / Masuk
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu overlay"
        />
      )}
    </nav>
  );
}
