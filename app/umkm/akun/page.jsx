'use client'

import { User, Mail, Lock } from 'lucide-react';
import SidebarUmkm from '../components/sidebarUmkm';

export default function AkunPage() {
  return (
    <SidebarUmkm>
      <div className="w-full h-full p-4 sm:p-6 overflow-y-auto pt-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl mb-6 text-green-700 text-center"><span className="text-gray-800">Profil</span> Akun</h1>

          <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
            {/* Nama */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Nama Lengkap</label>
              <div className="flex items-center border border-gray-200 rounded p-2 bg-gray-50">
                <User className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full bg-transparent outline-none text-gray-700"
                  defaultValue="Kribi"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <div className="flex items-center border border-gray-200 rounded p-2 bg-gray-50">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none text-gray-700"
                  defaultValue="kribi@gmail.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-200 rounded p-2 bg-gray-50">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Simpan Button */}
            <div className="text-center flex flex-row justify-center">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
                Simpan
              </button>
              <a href="/" className="ml-3 py-3 px-5 bg-red-500 rounded-lg text-white">Logout</a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Pastikan data akun kamu selalu <span className="font-medium text-green-600">terupdate</span>.
          </p>
        </div>
      </div>
    </SidebarUmkm>
  );
}