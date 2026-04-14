"use client";

import { HelpCircle } from "lucide-react";
import Link from "next/link";

function Header() {
    return (
        <header className="w-full flex flex-col">

            {/* Top Announcement Banner */}
            <div className="w-full bg-[#061a0c] border-b border-gray-50/10 py-3.5 md:py-4 px-4 text-center">
                <p className="text-[14px] md:text-[16px] text-[#fff]">
                    Graha Trust helps you verify property with complete clarity and proof before you invest your money.
                </p>
            </div>

            {/* Main Header */}
            <div className="w-full bg-[#051a0b]  text-white">
                <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

                    <div className="flex items-center gap-[40px]">

                        {/* Logo */}
                        <div className="flex items-baseline cursor-pointer">
                            <span className="text-[18px] sm:text-[22px] font-black tracking-tighter">
                                GRAHA
                            </span>

                            <span className="text-[18px] sm:text-[22px] font-normal tracking-tighter">
                                TRUST
                            </span>

                            <span className="text-[10px] sm:text-[12px] ml-0.5">
                                ®
                            </span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center">
                        {/* Help Button */}
                        <Link href="tel:+919840752850" className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-[11px] sm:text-[13px] font-bold tracking-wide">HELP</span>
                        </Link>
                    </div>

                </div>
            </div>

        </header>
    );
}

export default Header;