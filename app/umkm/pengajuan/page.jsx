'use client'

import { Boxes, PackageCheck, User } from 'lucide-react';
import { useState } from 'react';
import SidebarUmkm from '../components/sidebarUmkm';

export default function WarungDashboard() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Warung Babeh', sender: 'Jl. Pakuhaji', status: 'Menunggu' },
        { id: 2, name: 'Kantin SMP 3', sender: 'Desa Tanimulya', status: 'Diterima' },
        { id: 3, name: 'Warung Bu Ani', sender: 'Cimahi Tengah', status: 'Menunggu' },
    ]);

    return (
        <SidebarUmkm>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6 text-green-700 text-center"><span className="text-gray-800">Pengajuan</span> Anda</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <Boxes className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Total Pengajuan</p>
                                <p className="font-bold text-lg text-gray-800">{products.length}</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <PackageCheck className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Sudah Diterima</p>
                                <p className="font-bold text-lg text-gray-800">{products.filter(p => p.status === 'Diterima').length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="bg-green-600 text-white px-4 py-2 font-semibold">Pengajuan Anda</div>
                        <div className="divide-y">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm sm:text-base"
                                >
                                    <div>
                                        <p className="font-semibold text-gray-800">{product.name}</p>
                                        <p className="text-gray-500">Dari: {product.sender}</p>
                                    </div>
                                    <span
                                        className={`px-3 py-1 text-xs rounded-full font-medium ${product.status === 'Diterima'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-6 text-gray-500 text-sm">
                        <User className="inline w-4 h-4 mr-1" /> WarGo Warung Panel
                    </div>
                </div>
            </div>
        </SidebarUmkm>
    );
}
