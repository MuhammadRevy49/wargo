'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Store, Send, PackageCheck, Menu, X, LayoutDashboard, Notebook } from 'lucide-react';
import Link from 'next/link';

const images = [
  'https://awsimages.detik.net.id/community/media/visual/2021/06/27/warung-pintar_169.jpeg?w=1200',
  'https://cobisnis.com/wp-content/uploads/2021/11/images-6-1.jpeg',
  'https://www.bee.id/wp-content/uploads/2020/04/Bisnis-Lebih-Mudah-Gunakan-Aplikasi-Warung-ini.jpg',
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-33 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <a href="/" className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>War<span className="text-green-600">Go</span></a>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-4">
          <a href="#Keuntungan" className={`font-semibold transition py-1 px-2 ${scrolled ? 'text-green-600' : 'text-white'}`}>Keuntungan</a>
          <a href="#tentang" className={`font-semibold transition py-1 px-2 ${scrolled ? 'text-green-600' : 'text-white'}`}>Tentang</a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 font-bold text-white hover:bg-green-700 rounded py-1 px-2 transition-all drop-shadow-md"
          >
            Daftar / Masuk
          </button>
          <div className="absolute top-full mt-1 text-sm bg-gray-700 text-white p-2 rounded w-48 z-10">
            ingin lanjut? klik masuk.
          </div>

        </div>

        {/* Hamburger menu for mobile */}
        <button className="sm:hidden text-white z-50" onClick={() => setSidebarOpen(true)}>
          <Menu className={`${scrolled ? 'text-green-600' : 'text-white'}`} />
        </button>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-49" onClick={() => setSidebarOpen(false)} />
      )}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 sm:hidden"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-green-600 font-bold text-xl">WarGo</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="text-green-600" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 ">
          <a href="#tentang" className="text-gray-800 font-medium" onClick={() => setSidebarOpen(false)}>Tentang</a>
          <a href="#Keuntungan" className="text-gray-800 font-medium" onClick={() => setSidebarOpen(false)}>Keuntungan</a>
          <button
            onClick={() => {
              setSidebarOpen(false);
              setShowModal(true);
            }}
            className="bg-green-600 text-center text-white px-4 py-2 rounded mt-4"
          >
            Daftar / Masuk
          </button>
          <p className="text-[12px] text-green-800 bg-green-100 rounded-full pl-2">Ingin Lanjut? klik masuk.</p>
        </nav>
      </motion.div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen md:h-screen overflow-hidden">
        {prev !== null && (
          <img
            src={images[prev]}
            alt="Previous"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-75 z-10 transition-opacity duration-500"
            draggable={false}
          />
        )}
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="Current"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setPrev(null)}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75 z-10"
          draggable={false}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30" />

        <div className="z-30 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg max-w-3xl"
          >
            Jembatan Digital untuk UMKM dan Warung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-white max-w-xl mb-6 drop-shadow-md"
          >
            WarGo menghubungkan para pelaku usaha kuliner dengan warung atau toko yang membutuhkan produk makanan lokal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <a href="#Keuntungan" className="bg-green-600 bg-opacity-90 text-white px-6 py-2 hover:bg-green-700 rounded drop-shadow-md transition-all">
              Mulai Sekarang
            </a>
          </motion.div>
        </div>
      </section>

      {/* Keuntungan UMKM */}
      <section id="Keuntungan" className="px-6 py-20 bg-white relative z-10">
        <h3 className="text-center text-2xl font-bold mb-10 text-green-600"><span className="text-gray-800">Keuntungan</span> UMKM</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Store className="w-8 h-8 text-green-600" />}
            title="Lihat Warung"
            desc="Cari warung / toko / kantin sekolah untuk menjual produk anda."
          />
          <FeatureCard
            icon={<Send className="w-8 h-8 text-green-600" />}
            title="Kirim Penawaran"
            desc="Ajukan produk langsung ke warung / toko dari dashboard Anda."
          />
          <FeatureCard
            icon={<PackageCheck className="w-8 h-8 text-green-600" />}
            title="Pantau Pesanan"
            desc="Lacak pengiriman dan status penawaran dengan mudah."
          />
        </div>
      </section>

      {/* Keuntungan Warung */}
      <section id="Keuntungan" className="px-6 py-20 bg-gray-100 relative z-10">
        <h3 className="text-center text-2xl font-bold mb-10 text-green-600"><span className="text-gray-800">Keuntungan</span> Warung</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FeatureCard
            icon={<LayoutDashboard className="w-8 h-8 text-green-600" />}
            title="Kelola Warung"
            desc="Menampilkan permintaan dan pengajuan di warung / toko anda ."
          />
          <FeatureCard
            icon={<Send className="w-8 h-8 text-green-600" />}
            title="Kirim Penawaran"
            desc="Ajukan permintaan produk ke UMKM dari dashboard warung / toko Anda."
          />
          <FeatureCard
            icon={<Notebook className="w-8 h-8 text-green-600" />}
            title="Catatan Produk"
            desc="Lihat daftar produk UMKM yang dititipkan di warung / toko anda."
          />
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="px-6 py-20 bg-white relative z-10">
        <h3 className="text-center text-2xl font-bold mb-10 text-green-600"><span className="text-gray-800">Tentang</span> WarGo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <img src="/images/muhammadrevy.jpeg" className="rounded-lg" />
          </div>
          <div>
            <div className="mb-3">
              <p>Halo! Nama saya Muhammad Revy Rizqy Pratama Kelas XII SMK Negeri 1 Cimahi Jurusan Sistem Informasi Jaringan dan Aplikasi, Alhamdulillah saya memiliki usaha yang memproduksi keripik rumahan. Ide WarGo lahir dari pengalaman pribadi saya ketika mencoba menitipkan produk ke warung-warung dan toko makanan. Awalnya saya pikir cukup mudah datang, menawarkan, dan produk bisa langsung diterima. Tapi ternyata tidak semudah itu. Bagaimana jika sudah jauh-jauh ke warung, tapi warung menolak karena stok penuh, belum butuh produk baru, atau bahkan tidak saya kenal. Prosesnya menguras tenaga, waktu, dan biaya, padahal skala usaha saya masih kecil. Saya juga melihat banyak pelaku UMKM lain mengalami hal yang sama harus berkeliling dari satu toko ke toko lain tanpa kepastian. Dari situlah saya sadar, kita butuh solusi digital. WarGo saya ciptakan sebagai jembatan antara UMKM makanan/minuman dan warung atau toko kecil agar proses titip jual lebih mudah, cepat, dan efisien. Lewat platform ini, UMKM bisa menawarkan produknya secara online, dan warung bisa memilih mana yang ingin mereka terima. Semoga WarGo bisa membantu banyak pelaku usaha kecil lain yang sedang berjuang seperti saya. Dan Jujur ide ini lahir ketika saya diberikan tugas oleh jurusan membuat projek web, dan saya memikirkan ingin menghasilkan web / aplikasi yang berguna untuk masyarakat. Ide dan web baru terselesaikan pada 27 Mei 2025, sehingga masih banyak fitur yang belum berfungsi.</p>
            </div>
            <button onClick={() => setShowModal(true)} className="py-2 px-2 bg-green-600 rounded text-white">Pelajari lebih lanjut</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 text-center relative z-10">
        <p>&copy; {new Date().getFullYear()} WarGo. Semua hak dilindungi.</p>
      </footer>

      {/* Modal Pilihan Pengguna */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative"
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                <X />
              </button>
              <div className="flex justify-center text-center pb-2 font-bold">
                <h1 className="text-2xl">War<span className="text-green-600">GO</span></h1>
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-4">Pilih Jenis Pengguna</h3>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/login/warung"
                  className="bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition"
                >
                  Saya Pemilik Warung / Toko
                </Link>
                <Link
                  href="/login/umkm"
                  className="bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition"
                >
                  Saya Pelaku UMKM
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow rounded-xl p-6 text-left border border-gray-100 hover:shadow-md transition-all flex items-start gap-4"
    >
      <div>{icon}</div>
      <div>
        <h4 className="font-semibold text-lg text-green-700 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
