'use client'

import { Boxes, PackageCheck, User } from 'lucide-react';
import { useState } from 'react';
import SidebarLayout from '../components/sidebarLayouts';

export default function WarungDashboard() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Keripik Pisang', sender: 'UMKM Maju Jaya', status: 'lapor' },
        { id: 2, name: 'Sambal Roa', sender: 'UMKM Pedas Nikmat', status: 'lapor' },
        { id: 3, name: 'Brownies Kukus', sender: 'UMKM ChocoLove', status: 'lapor' },
    ]);

    return (
        <SidebarLayout>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl mb-6 text-green-700 text-center"><span className="text-gray-800">Daftar</span> Titipan</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <Boxes className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Total Titipan Produk</p>
                                <p className="font-bold text-lg text-gray-800">{products.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl overflow-hidden mb-5">
                        <div className="bg-green-600 text-white px-4 py-2">Daftar Produk Titipan</div>
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
                                    <button className="p-2 bg-white border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition-all hover:cursor-pointer">Lapor</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-6 text-gray-500 text-sm">
                        <User className="inline w-4 h-4 mr-1" /> WarGo Warung Panel
                    </div>
                </div>
            </div>
        </SidebarLayout>
    );
}