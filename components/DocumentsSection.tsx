"use client";

import { Search, ChevronRight } from "lucide-react";

export default function DocumentsSection() {
    const sections = [
        {
            title: "Business and contracts",
            items: [
                "Non-Disclosure Agreement (NDA)",
                "Business Contract",
                "Independent Contractor Agreement",
                "LLC Operating Agreement",
            ],
            seeMore: "See more business documents"
        },
        {
            title: "Real estate",
            items: [
                "Lease Agreement",
                "Eviction Notice",
                "Intent to Purchase Real Estate",
                "Quitclaim Deed",
            ],
            seeMore: "See more real estate documents"
        },
        {
            title: "Family and personal",
            items: [
                "Last Will and Testament",
                "Living Will",
                "Divorce Settlement Agreement",
                "Child Care Authorization Form",
            ],
            seeMore: "See more family & personal documents"
        },
    ];

    return (
        <section className=" py-12 md:py-18 px-4 bg-gradient-to-b from-gray-50 to-gray-100">


            <div className="max-w-7xl mx-auto px-4">


                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Verify every detail before you invest
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        Smart verification. Real insights. Zero risk decisions.
                    </p>
                </div>


                <div className="grid md:grid-cols-3 gap-8">


                    <div className="group relative bg-white border border-gray-200/60 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">


                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Legal & Ownership Verification
                                </h3>
                                <div className="bg-orange-50 text-orange-600 w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm border border-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <ul className="text-gray-600 space-y-4 text-[15px]">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Document verification (EC, Patta, Approvals)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Ownership history & title clarity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Legal lawyer opinion</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="group relative bg-white border border-gray-200/60 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">

                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Ground Reality & Site Inspection
                                </h3>
                                <div className="bg-orange-50 text-orange-600 w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm border border-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <ul className="text-gray-600 space-y-4 text-[15px]">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>On-site photos & video proof</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Drone shoot (area view & access roads)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Surveyor check & boundary validation</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="group relative bg-white border border-gray-200/60 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">

                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Risk & Investment Analysis
                                </h3>
                                <div className="bg-orange-50 text-orange-600 w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm border border-orange-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <ul className="text-gray-600 space-y-4 text-[15px]">
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Area analysis & surrounding development</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>Investment potential & red flag check</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>5-year future outlook & guidance</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}