"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-[60px] pb-[40px] bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">

                {/* Follow Us Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow us</h3>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.linkedin.com/company/grahatrush-com/" target="_blank" className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-100 transition-all shadow-sm hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2] hover:text-[#0A66C2]">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                            </svg>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61576648811754" target="_blank" className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-100 transition-all shadow-sm hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2] hover:text-[#1877F2]">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/grahatrust/" target="_blank" className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-100 transition-all shadow-sm hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E4405F] hover:text-[#E4405F]">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Work With Us Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Work With Us</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">Legal check</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">Site proof</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer">Risk report</Link>
                        </li>
                    </ul>
                </div>

                {/* Assistance Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Assistance</h3>
                    <div className="space-y-5">
                        <a href="https://wa.me/919840752850?text=Welcome%20to%20Graha%20Trust%20-%20How%20can%20we%20help%20you%20today" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer w-fit">
                            <div className="bg-white border border-gray-200 p-2.5 rounded-full group-hover:bg-gray-100 transition-all shadow-sm">
                                <MessageCircle className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="text-gray-700 font-medium group-hover:text-gray-900">Chat with us ›</span>
                        </a>
                        <div className="flex items-start gap-3">
                            <div className="bg-white border border-gray-200 p-2.5 rounded-full mt-1 shadow-sm">
                                <Phone className="w-5 h-5 text-gray-700" />
                            </div>
                            <div className="flex flex-col">
                                <a href="tel:+919840752850" className="text-[22px] font-bold text-gray-900 transition-colors tracking-tight">+91 98407 52850</a>
                                <span className="text-sm text-gray-500 font-medium mt-0.5">Call us Monday-Friday 9am-6pm </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-500 text-[13px] font-medium">
                    © 2026 Graha Trust. All rights reserved.
                </div>
            </div>
        </footer>
    );
}