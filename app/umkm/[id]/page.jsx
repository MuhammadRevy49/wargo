'use client'

import { useState } from "react";
import SidebarUmkm from "../components/sidebarUmkm";
import { useParams } from "next/navigation";
import { X, Eye } from "lucide-react";

const warung = [
    {
        id: 1,
        nama: "Kantin SMAN 2",
        jenis: "Kantin Sekolah",
        alamat: "Jl. K.H. Usman Dhomiri RT.006/RW.008 Kel.Padasuka",
        gambar: "https://sman2bondowoso.sch.id/images/Fasilitas/kantin1.jpg",
        status: "Menerima Produk UMKM",
        lihat: "1RB+ dilihat oleh UMKM",
        kontak: "#"
    },
    {
        id: 2,
        nama: "Warung Bu Nini",
        jenis: "Warung",
        alamat: "Jl. Merdeka No. 10, Cimahi Selatan RT.012/RW.003",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh1g5a8a-BS5KTrAIhZGGb1aHwiv9vjHZ3A&s",
        status: "Tidak Menerima Produk UMKM",
        lihat: "989 dilihat oleh UMKM",
        kontak: "#"
    },
    {
        id: 3,
        nama: "Warung Bu Eros",
        jenis: "Toko Kelontong",
        alamat: "Jl. Bandung Kota Perum. Citra Lestari Indah",
        gambar: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/146/2024/03/08/WhatsApp-Image-2024-03-08-at-155437-40808901.jpeg",
        status: "Menerima Produk UMKM",
        lihat: "2RB+ dilihat oleh UMKM",
        kontak: "#"
    },
]

const produk = [
    {
        id: 1,
        nama: "Keripik Cireng",
        harga: "3000",
        margin: "1000",
    },
    {
        id: 2,
        nama: "Keripik Basreng",
        harga: "3000",
        margin: "1000",
    },
    {
        id: 3,
        nama: "Keripik Tahu",
        harga: "3000",
        margin: "1000",
    },
]

export default function warungDetail() {

    const [modal, setModal] = useState(false);

    const params = useParams();
    const id = params.id;
    // Simpan Data
    const data = id - 1;
    // Data Warung
    const dataWarung = warung[data];
    return (
        <SidebarUmkm>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <a href="/umkm" className="p-2 bg-green-600 text-white rounded">Kembali</a>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                        <img
                            src={dataWarung.gambar}
                            alt=""
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="md:text-lg text-[16px] font-semibold text-gray-800 mb-1">{dataWarung.nama}</h2>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-2">Jenis : {dataWarung.jenis}</p>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-2">Alamat : {dataWarung.alamat}</p>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-4">Status : {dataWarung.status}</p>
                            <p className="flex items-center text-[12px] md:text-sm text-gray-400 mb-4"><Eye className="mr-1" /> {dataWarung.lihat}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setModal(true)}
                                    className="mt-auto bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 text-center transition-all"
                                >
                                    Ajukan
                                </button>
                                <button
                                    onClick={() => setModal(true)}
                                    className="mt-auto border border-green-600 text-green-600 bg-white text-sm py-2 px-4 rounded hover:opacity-30 text-center transition-all"
                                >
                                    Lihat Lokasi
                                </button>
                            </div>
                        </div>
                    </div>

                    {/** Modal */}
                    {modal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-opacity duration-300">
                            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative transform transition-all duration-30 ">
                                <div className="flex justify-end">
                                    <X onClick={() => setModal(false)} className="text-gray-400 hover:text-gray-600 transition-all" />
                                </div>
                                <h1 className="text-gray-800 text-xl text-center mb-3">Ajukan Produk <span className="text-green-600">Anda</span></h1>
                                <p className="text-sm text-gray-800">Pilih Produk Yang Ingin Dititipkan :</p>
                                <div>
                                    {produk.map(data => (
                                        <label className="flex flex-row items-center my-3 select-none">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 accent-green-600"
                                            />
                                            <span className="ml-2 text-gray-800">{data.nama}</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="w-full">
                                    <button onClick={() => setModal(false)} className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700 transition-all hover:cursor-pointer">Ajukan</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SidebarUmkm>
    );
}