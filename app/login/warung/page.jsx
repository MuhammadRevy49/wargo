'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import BackToHomeButton from '@/app/components/buttonBack';

const images = [
  'https://awsimages.detik.net.id/community/media/visual/2021/06/27/warung-pintar_169.jpeg?w=1200',
  'https://cobisnis.com/wp-content/uploads/2021/11/images-6-1.jpeg',
  'https://www.bee.id/wp-content/uploads/2020/04/Bisnis-Lebih-Mudah-Gunakan-Aplikasi-Warung-ini.jpg',
];

export default function Login() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // ganti gambar tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Slider gambar di sebelah kiri untuk desktop, atas untuk mobile */}
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
        <div className="absolute inset-0 bg-black opacity-50 z-33"></div>
        <div className="absolute bottom-6 left-6 text-white z-36 max-w-xs">
          <h1 className="text-2xl font-bold mb-1">Selamat Datang di War<span className="text-green-600">Go</span></h1>
          <p className="text-sm md:text-base">
            Raih banyak keuntungan untuk warung / toko anda di platform kami.
          </p>
        </div>
      </div>

      {/* Form login */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-white">
        <BackToHomeButton />
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Masuk ke Toko Anda</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md -space-y-px">
              <div className="flex flex-row items-center mb-3 bg-yellow-100 w-full p-2 rounded-full">
                <Info className="text-[12px] text-gray-800 h-4" />
                <span className="text-[12px] text-gray-800">Belum Berfungsi, Klik masuk saja.</span>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm text-black"
                  placeholder="Email"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="password" className="sr-only text-black">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm text-black"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <a
                href="/warung"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Masuk
              </a>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600 flex flex-col items-center justify-center">
            <div className="flex">
              <p>Belum punya akun?{' '}</p>
              <Link href="/register/warung">
                <p className="ml-1 font-medium text-green-600 hover:text-green-700">
                  Daftar
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
