import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Search } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';


export default function SliderImage() {
    const images = [
        "https://www.figma.com/community/resource/5c7f9ef0-7aac-4e47-b9bc-fec3c3a35ef4/thumbnail",
        "https://www.shutterstock.com/image-photo/makassar-indonesia-10-april-2020-260nw-1699405885.jpg",
        "https://pasardana.id/media/65796/img-20241113-wa0054.jpg?crop=0,0.15202231520223142,0.0000000000000008842309600570,0.0000000000000007610834324460&cropmode=percentage&width=675&height=380&rnd=133759869670000000",
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
                                placeholder="Cari warung / toko"
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