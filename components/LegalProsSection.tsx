"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const lawyers = [
    {
        name: "Mario Jaramillo",
        location: "Pasadena, CA",
        experience: "In practice since: 2008",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Wendy Calvert",
        location: "Chicago, IL",
        experience: "In practice since: 1995",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "David Buono",
        location: "Austin, TX",
        experience: "In practice since: 1997",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Kelsi Larsen",
        location: "Salt Lake City, UT",
        experience: "In practice since: 2012",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
];

export default function LegalProsSection() {
    return (
        <section className="bg-gray-100 py-12 md:py-18 px-4">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-[28px] md:text-[42px] font-bold text-gray-900 leading-tight mb-4">
                    Face the "What ifs" and the "What nows" with a pro by your side
                </h2>

                {/* Subtext */}
                <p className="text-[15px] md:text-[18px] text-gray-600 mb-10 md:mb-14">
                    No more waiting. No more overpaying. Get affordable legal help when you need it.
                </p>

                {/* ✅ Mobile Slider */}
                <div className="block md:hidden">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = ".pros-prev";
                            // @ts-ignore
                            swiper.params.navigation.nextEl = ".pros-next";
                        }}
                        navigation={true}
                        className="mb-8"
                    >
                        {lawyers.map((lawyer, index) => (
                            <SwiperSlide key={index}>
                                <Card lawyer={lawyer} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ✅ Navigation Buttons at the Bottom */}
                    <div className="flex justify-center items-center gap-4">
                        <button className="pros-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-800 transition-all cursor-pointer bg-white z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="pros-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-800 transition-all cursor-pointer bg-white z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ✅ Grid - Tab Responsive */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {lawyers.map((lawyer, index) => (
                        <Card key={index} lawyer={lawyer} />
                    ))}
                </div>

                {/* Button */}
                <div className="mt-10 md:mt-14">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-[14px] md:text-[15px] font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-md shadow-md">
                        Connect with a Legal Pro
                    </button>
                </div>

            </div>
        </section>
    );
}

interface Lawyer {
    name: string;
    location: string;
    experience: string;
    img: string;
}

/* ✅ Reusable Card */
function Card({ lawyer }: { lawyer: Lawyer }) {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-md group">

            {/* Image */}
            <Image
                src={lawyer.img}
                alt={lawyer.name}
                width={400}
                height={400}
                className="w-full h-[320px] md:h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-lg">
                <h3 className="text-[18px] md:text-[24px] font-semibold text-gray-700">
                    {lawyer.name}
                </h3>
                <p className="text-[14px] md:text-[16px] text-gray-600 mt-1">
                    {lawyer.location}
                </p>
                <p className="text-[12px] md:text-[14px] text-gray-500">
                    {lawyer.experience}
                </p>
            </div>

        </div>
    );
}