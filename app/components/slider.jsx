import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Search } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';


export default function SliderImage() {
    const images = [
        'https://awsimages.detik.net.id/community/media/visual/2021/06/27/warung-pintar_169.jpeg?w=1200',
        'https://cobisnis.com/wp-content/uploads/2021/11/images-6-1.jpeg',
        'https://www.bee.id/wp-content/uploads/2020/04/Bisnis-Lebih-Mudah-Gunakan-Aplikasi-Warung-ini.jpg',
    ];
    return (
        <>
            {/* Hero + Search */}
            <div className="relative w-full max-w-full mx-auto overflow-hidden shadow">
                {/* Search Floating */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-[90%] sm:w-[70%] md:w-[50%]">
                        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-300">
                            <button className="px-3 py-2 text-green-600"><Search /></button>
                            <input
                                type="search"
                                placeholder="Cari disini..."
                                className="w-full px-2 py-2 text-sm text-black focus:outline-none"
                            />
                            <button className="bg-green-600 text-white px-4 py-3 text-sm hover:bg-green-700 transition-all duration-300">
                                Cari
                            </button>
                        </div>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                    loop
                    className="h-[20vh] sm:h-[35vh] md:h-[35vh]"
                >
                    {images.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="w-full h-full">
                                <img
                                    src={data}
                                    alt={`slide-${idx}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}