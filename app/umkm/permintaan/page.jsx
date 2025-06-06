'use client'

import { Boxes, PackageCheck, User, X, Eye } from 'lucide-react';
import { useState } from 'react';
import SidebarUmkm from '../components/sidebarUmkm';

export default function WarungDashboard() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Warung Bu Denis', sender: 'Jl. Mahar, Cimahi', jenis: 'Toko Kelontong' },
        { id: 2, name: 'Kantin SMKN 1', sender: 'Desa Ngamprah', jenis: 'Kantin Sekolah' },
        { id: 3, name: 'Kantin SMPN 3', sender: 'Cimahi Tengah', jenis: 'Warung' },
    ]);

    const [ditolak, setDitolak] = useState([]);
    const [diterimaCount, setDiterimaCount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleTerima = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleTerimaFinal = () => {
        setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
        setDiterimaCount(prev => prev + 1);
        closeModal();
    };

    const handleTolak = () => {
        setDitolak(prev => [...prev, selectedProduct]);
        setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
        closeModal();
    };

    const handleBatalkan = (product) => {
        setDitolak(prev => prev.filter(p => p.id !== product.id));
        setProducts(prev => [...prev, product]);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <SidebarUmkm>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl mb-6 text-green-600 text-center"><span className="text-gray-800">Daftar</span> Permintaan</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <Boxes className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Total Permintaan</p>
                                <p className="font-bold text-lg text-gray-800">{products.length}</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <PackageCheck className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Sudah Diterima</p>
                                <p className="font-bold text-lg text-gray-800">{diterimaCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl overflow-hidden mb-5">
                        <div className="bg-green-600 text-white px-4 py-2">Permintaan Minat Produk Anda</div>
                        <div className="divide-y">
                            {products.length === 0 ? (
                                <div className="px-4 py-6 text-center text-gray-500 text-sm">
                                    Belum ada permintaan.
                                </div>
                            ) : (
                                products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm sm:text-base"
                                    >
                                        <div>
                                            <p className="font-semibold text-gray-800">{product.name}</p>
                                            <p className="text-gray-500">Dari: {product.sender}</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <button onClick={() => handleTerima(product)} className="p-1 bg-green-500 text-white rounded m-1 hover:cursor-pointer hover:bg-green-700 transition-all flex flex-row items-center"><Eye className="mr-1"/>Lihat</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl overflow-hidden mb-5">
                        <div className="bg-green-600 text-white px-4 py-2">Ditolak Oleh Anda</div>
                        <div className="divide-y">
                            {ditolak.length === 0 ? (
                                <div className="px-4 py-6 text-center text-gray-500 text-sm">
                                    Belum ada warung yang ditolak.
                                </div>
                            ) : (
                                ditolak.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm sm:text-base"
                                    >
                                        <div>
                                            <p className="font-semibold text-gray-800">{product.name}</p>
                                            <p className="text-gray-500">{product.sender}</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <button onClick={() => handleBatalkan(product)} className="p-1 bg-white border border-green-600 text-green-600 rounded m-1 transition-all hover:bg-green-600 hover:text-white">
                                                Batalkan
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {showModal && selectedProduct && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 transition-opacity duration-300">
                            <div className="relative bg-white w-full max-w-md rounded-xl shadow-lg p-6 transform transition-all duration-300 opacity-100 scale-100">
                                <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition-all">
                                    <X className="w-5 h-5" />
                                </button>
                                <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">Detail Warung</h2>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><span className="font-semibold">Nama :</span> {selectedProduct.name}</p>
                                    <p><span className="font-semibold">Jenis :</span> {selectedProduct.jenis}</p>
                                    <p><span className="font-semibold">Alamat :</span> {selectedProduct.sender}</p>
                                </div>
                                <div className="mt-6 text-right">
                                    <button onClick={handleTerimaFinal} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all">Terima</button>
                                    <button onClick={handleTolak} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all ml-1">Tolak</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-center mt-6 text-gray-500 text-sm">
                        <User className="inline w-4 h-4 mr-1" /> Kribi
                    </div>
                </div>
            </div>
        </SidebarUmkm>
    );
}
