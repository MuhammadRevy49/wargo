import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function SliderImage() {
    const images = [
        '/images/hp.png',
        '/images/patahgambar2.png',
        '/images/patahgambar2.png',
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
                className="h-[23vh] sm:h-[35vh] md:h-[35vh]"
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
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
