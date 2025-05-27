'use client'

import { useState } from "react";
import SidebarLayout from "../components/sidebarLayouts";
import { useParams } from "next/navigation";
import { X, Eye, ArrowLeft } from "lucide-react";

const produk = [
    {
        id: 1,
        nama: "Keripik Basreng",
        dari: "Keripik Bandung",
        jenis: "Makanan Snack",
        harga: "3.000",
        margin: "1.000",
        lihat: "10RB+ dilihat oleh Warung",
        gambar: "https://down-id.img.susercontent.com/file/37376d9518e20493a7677e3fb432c26b",
        kontak: "#"
    },
    {
        id: 2,
        nama: "Kerupuk Jengkol",
        dari: "Kedai Kriuk",
        jenis: "Makanan Snack",
        harga: "2.000",
        margin: "500",
        lihat: "10RB+ dilihat oleh Warung",
        gambar: "https://homemadeindonesia.com/apihmi/images/datatoko/K29384DE132_brg13613.jpg",
        kontak: "#"
    },
    {
        id: 3,
        nama: "Roti Sisir",
        dari: "Kue Meledaks",
        jenis: "Makanan Kue",
        harga: "2.000",
        margin: "500",
        lihat: "10RB+ dilihat oleh Warung",
        gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/17/16dac5c7-2afd-4342-9666-4932e0d732af.jpg",
        kontak: "#"
    }
];

export default function warungDetail() {

    const [modal, setModal] = useState(false);

    const params = useParams();
    const id = params.id;
    // Simpan Data
    const data = id - 1;
    // Data Warung
    const dataProduk = produk[data];
    return (
        <SidebarLayout>
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-16">
                <div className="flex items-center mt-3">
                    <a href="/warung" className="flex items-center bg-green-600 py-1 pl-1 pr-3 rounded-full text-white transition-all hover:opacity-30">
                        <ArrowLeft className="h-4" />
                        Kembali
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                        <img
                            src={dataProduk.gambar}
                            alt=""
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="md:text-lg text-[16px] font-semibold text-gray-800 mb-1">{dataProduk.nama}</h2>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-2">Jenis : {dataProduk.jenis}</p>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-2">Dari : {dataProduk.dari}</p>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-2">Harga Jual : Rp. {dataProduk.harga}</p>
                            <p className="text-[12px] md:text-sm text-gray-600 mb-4">Untung Warung : Rp. {dataProduk.margin}</p>
                            <p className="flex items-center text-[12px] md:text-sm text-gray-400 mb-4"><Eye className="mr-1" /> {dataProduk.lihat}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setModal(true)}
                                    className="mt-auto bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 text-center transition-all"
                                >
                                    Ajukan
                                </button>
                                <button
                                    className="mt-auto border border-green-600 text-green-600 bg-white text-sm py-2 px-4 rounded hover:opacity-30 text-center transition-all"
                                >
                                    Lihat UMKM
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
                                <h1 className="text-gray-800 text-xl text-center mb-3">Ajukan Ke <span className="text-green-600">UMKM</span></h1>
                                <p className="text-sm text-gray-800 my-6">Anda ingin mengajukan produk ini dijual di warung anda ?</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => setModal(true)} className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700 transition-all hover:cursor-pointer">Ajukan</button>
                                    <button onClick={() => setModal(false)} className="bg-white text-green-600 w-full p-2 rounded hover:opacity-30 border border-green-600 transition-all hover:cursor-pointer">Batal</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SidebarLayout>
    );
}