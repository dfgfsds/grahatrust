"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
    const testimonials = [
        {
            text: "I was about to finalize a plot in Chennai, but Graha Trust found issues in ownership history that even my broker didn’t mention. This saved me from a risky investment.",
            author: "Rajesh K.",
            role: "UAE",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            text: "The detailed report with site photos and videos gave me complete clarity. I felt like I was physically there inspecting the property.",
            author: "Priya S.",
            role: "Singapore",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            text: "The legal verification and ground inspection together is what makes them different. Worth the investment before buying any property.",
            author: "Meena D.",
            role: "USA",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            text: "Graha Trust advised me not to proceed with a property due to hidden risks. That one decision probably saved me lakhs.",
            author: "Suresh P.",
            role: "Dubai",
            img: "https://randomuser.me/api/portraits/men/45.jpg",
        },
    ];

    return (
        <section className="bg-[#f8f9fa] py-12 md:py-18 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex justify-center">
                <div className="w-full max-w-7xl relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">

                    {/* Maroon Quote Icon */}
                    <div className="mb-2 sm:mb-0">
                        <span className="text-[#800000] text-[60px] sm:text-[90px] leading-[0] font-serif inline-block h-4 sm:h-8">“</span>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-0">
                                    {/* Quote Text */}
                                    <p className="text-[18px] sm:text-[22px] md:text-[24px] leading-[30px] sm:leading-[36px] text-[#4b5563] font-normal italic">
                                        {item.text}
                                    </p>

                                    {/* Profile */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full p-1.5 sm:p-2 border border-blue-50/50 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-[#1f2937]">
                                                {item.author}
                                            </h4>
                                            <p className="text-[14px] sm:text-[16px] text-gray-500">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
                        <button className="swiper-button-prev-custom w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-800 transition-all cursor-pointer">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="swiper-button-next-custom w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-800 transition-all cursor-pointer">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}