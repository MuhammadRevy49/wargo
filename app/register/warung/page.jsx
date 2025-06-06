'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BackToHomeButton from '@/app/components/buttonBack';

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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
        <div className="absolute bottom-6 left-6 text-white z-20 max-w-xs">
          <h1 className="text-3xl font-bold mb-2">Bergabunglah dengan War<span className="text-green-600">Go</span></h1>
          <p className="text-sm md:text-base">
            Raih banyak keuntungan untuk warung / toko anda di platform kami.
          </p>
        </div>
      </div>

      {/* Form register */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-white">
        <BackToHomeButton />
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Daftar Toko Anda</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Nama Toko / Warung</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nama Toko / Warung"
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
              <a
                href="/login/warung"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Daftar
              </a>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600 flex flex-col items-center justify-center">
            <div className="flex">
              <p>Sudah punya akun?{' '}</p>
              <Link href="/login/warung">
                <p className="ml-1 font-medium text-green-600 hover:text-green-700">
                  Masuk
                </p>
              </Link>
            </div>
            <div className="mt-5 font-bold">
              <h1 className="text-xl">War<span className="text-green-600">GO</span> &reg;</h1>
              <p className="text-[10px] text-gray-600">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}