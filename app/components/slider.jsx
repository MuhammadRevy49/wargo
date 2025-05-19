import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function SliderImage() {
    const images = [
        'https://awsimages.detik.net.id/community/media/visual/2021/06/27/warung-pintar_169.jpeg?w=1200',
        'https://cobisnis.com/wp-content/uploads/2021/11/images-6-1.jpeg',
        'https://www.bee.id/wp-content/uploads/2020/04/Bisnis-Lebih-Mudah-Gunakan-Aplikasi-Warung-ini.jpg',
    ];

    return (
        <div className="relative w-full max-w-full mx-auto overflow-hidden shadow">
            {/* Search Floating */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="w-[90%] sm:w-[70%] md:w-[50%]">
                    {/** Kosong */}
                </div>
            </div>

            {/* Swiper with Gradient Overlay */}
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500 }}
                loop
                className="h-[26vh] sm:h-[35vh] md:h-[35vh]"
            >
                {images.map((data, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <img
                                src={data}
                                alt={`slide-${idx}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient Overlay only on mobile */}
                            <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-black/80 via-black/33 to-transparent z-10" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
