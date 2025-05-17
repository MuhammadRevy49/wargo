// app/register/page.jsx
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-green-600 mb-6">
          Daftar Akun <span className="font-bold">WarGo</span>
        </h1>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="contoh@email.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Kata Sandi</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-green-600 font-medium hover:underline">
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  );
}