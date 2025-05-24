'use client'

import { Boxes, PackageCheck, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import SidebarUmkm from '../components/sidebarUmkm';

export default function ProdukUmkm() {
    const [modal, setModal] = useState(false);
    const [showModal, setShowModal] = useState(false); // untuk animasi

    const [products, setProducts] = useState([
        { id: 1, name: 'Keripik Cireng', sender: 'Varian rasa gurih, balado, pedas' },
        { id: 2, name: 'Keripik Basreng', sender: 'Varian rasa gurih, balado, pedas' },
        { id: 3, name: 'Keripik Tahu', sender: 'Varian rasa gurih, balado, pedas' },
    ]);

    useEffect(() => {
        if (modal) {
            setTimeout(() => setShowModal(true), 10);
        } else {
            setShowModal(false);
        }
    }, [modal]);

    return (
        <SidebarUmkm>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6 text-green-700 text-center">
                        <span className="text-gray-800">Produk</span> Anda
                    </h1>
                    <button
                        onClick={() => setModal(true)}
                        className="p-2 bg-green-600 mb-3 rounded text-white hover:bg-green-700 transition-all"
                    >
                        + Tambah Produk
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
                            <Boxes className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-500">Total Produk</p>
                                <p className="font-bold text-lg text-gray-800">{products.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl overflow-hidden mb-5">
                        <div className="bg-green-600 text-white px-4 py-2 font-semibold">Permintaan Minat Produk Anda</div>
                        <div className="divide-y">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm sm:text-base"
                                >
                                    <div>
                                        <p className="font-semibold text-gray-800">{product.name}</p>
                                        <p className="text-gray-500">Desk: {product.sender}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <button className="p-1 bg-green-500 text-white rounded m-1">Ubah</button>
                                        <button className="p-1 bg-red-500 text-white rounded m-1">Hapus</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-6 text-gray-500 text-sm">
                        <User className="inline w-4 h-4 mr-1" /> WarGo Warung Panel
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-opacity duration-300">
                    <div
                        className={`bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative transform transition-all duration-300 ${
                            showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                    >
                        <button
                            onClick={() => setModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Tambah Produk</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target;
                                const newProduct = {
                                    id: products.length + 1,
                                    name: form.name.value,
                                    sender: form.sender.value,
                                };
                                setProducts([...products, newProduct]);
                                setModal(false);
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
                                <input
                                    name="name"
                                    required
                                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                                    placeholder="Contoh: Keripik Pisang"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                <textarea
                                    name="sender"
                                    required
                                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                                    placeholder="Deskripsi produk..."
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Foto Produk</label>
                                <input type="file" className="w-full hover:cursor-pointer text-gray-800 border border-gray-300 p-2 rounded"/>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setModal(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </SidebarUmkm>
    );
}
