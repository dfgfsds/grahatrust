"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#051a0b] overflow-hidden text-white min-h-[600px] flex flex-col justify-between">
      {/* Background "R" Graphic */}
      <div className="absolute right-[-100px] top-[-50px] w-[600px] h-[800px] pointer-events-none opacity-20 border-[80px] border-[#001203] rounded-[150px] rotate-[-15deg] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-15 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl lg:text-[75px] font-bold leading-[1.1] tracking-tight">
            Clear answers. <br />No matter the distance
            {/* <span className="text-3xl align-top ml-1">®</span> */}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-light">
            With proof-based verification & expert legal support, Graha Trust
            helps you make safe property decisions with confidence.
          </p>

          {/* Trustpilot Section */}
          {/* <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-[#00b67a] p-2  rounded-sm">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 font-semibold ml-2">
                <svg className="w-12 h-12 text-[#00b67a] fill-current" viewBox="0 0 20 20">
                  <path d="M10 0L2.5 4v9c0 4.5 7.5 7 7.5 7s7.5-2.5 7.5-7V4L10 0z" />
                </svg>
                <span className="text-xl leading-relaxed">Trustpilot</span>
              </div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              8,348 reviews • 4.7 stars • Excellent
            </p>
          </div> */}
        </div>

        {/* RIGHT IMAGE WITH OVERLAYS */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl">
            <Image
              src="/professional.png"
              alt="Person working on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS SECTION */}
      <div className="w-full bg-[#051a0b] py-10 sm:py-12 lg:py-16 mt-4 lg:mt-0">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-400/10 hover:bg-gray-500/20 rounded-[16px] sm:rounded-[20px] 
        p-4 sm:p-6 flex flex-col justify-between 
        min-h-[120px] sm:min-h-[150px] 
        transition-all duration-300 group cursor-pointer 
        border border-transparent hover:border-white/5 shadow-lg"
            >

              {/* Title */}
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-snug group-hover:text-gray-100">
                {card.title}
              </h3>

              {/* Arrow */}
              <div className="flex justify-end mt-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#d97706] text-white transition-transform group-hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M7 17L17 7m0 0H8m9 0v9"
                    />
                  </svg>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Don’t be fooled by a property deal",
  },
  {
    title: "Verify with experts live",
  },
  {
    title: "Give your property a risk check",
  },
  {
    title: "Ask Graha Trust",
  },
];