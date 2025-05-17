'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BackToHomeButton from '../components/buttonBack';

const images = [
  'https://awsimages.detik.net.id/community/media/visual/2021/06/27/warung-pintar_169.jpeg?w=1200',
  'https://cobisnis.com/wp-content/uploads/2021/11/images-6-1.jpeg',
  'https://www.bee.id/wp-content/uploads/2020/04/Bisnis-Lebih-Mudah-Gunakan-Aplikasi-Warung-ini.jpg',
];

export default function Register() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Gambar slider */}
      <div className="relative md:flex-1 h-60 md:h-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slider-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
        <div className="absolute bottom-6 left-6 text-white z-20 max-w-xs">
          <h1 className="text-3xl font-bold mb-2">Bergabunglah dengan WarGo</h1>
          <p className="text-sm md:text-base">
            Buka peluang usaha kuliner lebih luas bersama kami.
          </p>
        </div>
      </div>

      {/* Form register */}
      <BackToHomeButton/>
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Daftar Akun Baru</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Nama Lengkap</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Daftar
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}