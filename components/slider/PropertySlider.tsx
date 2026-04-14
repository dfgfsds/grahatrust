"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { sliderImages } from "./sliderData";

export default function PropertySlider() {
    return (
        <section className="bg-gray-50 py-12 md:py-18 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
                    Property Insights
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            centeredSlides: false
                        },
                    }}
                    className="w-full"
                >
                    {sliderImages.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden group shadow-sm border border-gray-200/50">
                                <Image
                                    src={img.src}
                                    alt={`Property ${img.id}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}