import Image from "next/image";

export default function ContactSection() {
    return (
        <section className="py-12 sm:py-[80px] bg-gray-50">
            <div className="max-w-[720px] mx-auto text-center px-4">
                <h2 className="text-2xl sm:text-[34px] sm:leading-[44px] font-medium text-[#1f2937]">
                    Questions? We're here to help
                </h2>

                <p className="mt-[14px] text-sm sm:text-[16px] leading-[26px] text-[#6b7280]">
                    Check out our
                    <span className="text-[#f97316] font-medium cursor-pointer ml-1">FAQs</span>,
                    or talk to a live customer care specialist by phone, chat, or email.
                </p>

                <div className="mt-8 sm:mt-[36px] flex justify-center">
                    <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]">
                        <Image
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Customer care"
                            width={180}
                            height={180}
                            className="w-full h-full rounded-full object-cover"
                        />
                        <div
                            className="absolute bottom-[4px] left-[4px] w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] bg-[#dc2626] text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center rounded-full">
                            R
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mt-[36px] flex justify-center">
                    <button
                        className="w-full max-w-[420px] border font-semibold border-[#9ca3af] text-[#111827] py-[12px] rounded-[4px] text-[14px] sm:text-[15px] hover:bg-white transition shadow-sm bg-transparent">
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    );
}
