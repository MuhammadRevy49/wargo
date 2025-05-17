import Link from 'next/link';

function BackToHomeButton() {
    return (
        <div className="mb-6">
            {/* Tombol kembali */}
            <Link
                href="/"
                className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full font-bold bg-green-600 shadow-md text-sm text-white hover:bg-white hover:text-green-800 transition duration-200 z-50"
            >
                <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali
            </Link>
        </div>
    );
}

export default BackToHomeButton;
