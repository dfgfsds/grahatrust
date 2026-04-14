"use client";

export default function PricingCards() {
    const singlePropertyFeatures = [
        { text: "Complete Legal Verification", bold: true },
        { text: "Ownership & Title Check", bold: false },
        { text: "Site Inspection (Photos + Video)", bold: false },
        { text: "Area Risk Analysis", bold: false },
        { text: "Detailed Property Risk Report", bold: false },
    ];

    const doublePropertyFeatures = [
        { text: "All services included in Plan 1", bold: true },
        { text: "Verification for 2 properties", bold: false },
        { text: "Comparative Risk Analysis", bold: false },
        { text: "Better decision support", bold: false },
    ];

    const investorPlanFeatures = [
        { text: "All services included in Plan 1", bold: true },
        { text: "Verification for up to 5 properties", bold: false },
        { text: "Priority processing", bold: false },
        { text: "Investment-focused insights", bold: false },
        { text: "Dedicated support", bold: false },
    ];

    return (
        <section className="bg-white py-12 md:py-18 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-[32px] sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Premium Property Verification — Without Costly Mistakes
                    </h2>
                    <p className="text-base sm:text-lg md:text-[20px] text-gray-600 max-w-3xl mx-auto px-2">
                        Know the truth before you invest your money.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">

                    {/* PLAN 1 */}
                    <div className="bg-white rounded-[24px] border border-gray-300 sm:border-gray-400 p-6 sm:p-8 md:p-10 flex flex-col shadow-sm">
                        <h3 className="text-base sm:text-[18px] font-bold text-gray-900 mb-3 sm:mb-4">
                            PLAN 1 — SINGLE PROPERTY
                        </h3>

                        <div className="mb-2">
                            <span className="text-[36px] sm:text-[40px] md:text-[44px] font-black text-gray-900 tracking-tight">₹30,000</span>
                            <span className="text-sm sm:text-[16px] text-gray-500 ml-1">/property</span>
                        </div>

                        <div className="flex-grow space-y-3 sm:space-y-4 my-6 sm:my-8 text-left">
                            {singlePropertyFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className={`text-sm sm:text-[15px] text-gray-700 leading-snug ${feature.bold ? 'font-medium' : ''}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <a href="tel:+919840752850" className="mt-auto w-full block text-center border-2 border-[#d97706] text-[#d97706] font-bold py-3 sm:py-3.5 rounded-lg hover:bg-orange-50 transition-colors text-[15px] sm:text-base">
                            Get Started
                        </a>
                    </div>

                    {/* PLAN 2 */}
                    <div className="bg-white rounded-[24px] border border-gray-300 sm:border-gray-400 p-6 sm:p-8 md:p-10 flex flex-col shadow-md relative">
                        {/* Optional highlight accent for middle plan */}


                        <h3 className="text-base sm:text-[18px] font-bold text-gray-900 mb-3 sm:mb-4">
                            PLAN 2 — DOUBLE PROPERTY
                        </h3>

                        <div className="mb-2">
                            <span className="text-[36px] sm:text-[40px] md:text-[44px] font-black text-gray-900 tracking-tight">₹50,000</span>
                            <span className="text-sm sm:text-[16px] text-gray-500 ml-1">/2 properties</span>
                        </div>

                        <div className="flex-grow space-y-3 sm:space-y-4 my-6 sm:my-8 text-left">
                            {doublePropertyFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className={`text-sm sm:text-[15px] text-gray-700 leading-snug ${feature.bold ? 'font-medium' : ''}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <a href="tel:+919840752850" className="mt-auto w-full block text-center bg-[#d97706] text-white font-bold py-3 sm:py-3.5 rounded-lg hover:bg-[#c26a05] transition-colors text-[15px] sm:text-base shadow-sm">
                            Get Started
                        </a>
                    </div>

                    {/* PLAN 3 */}
                    <div className="bg-white rounded-[24px] border border-gray-300 sm:border-gray-400 p-6 sm:p-8 md:p-10 flex flex-col shadow-sm">
                        <h3 className="text-base sm:text-[18px] font-bold text-gray-900 mb-3 sm:mb-4">
                            PLAN 3 — INVESTOR PLAN
                        </h3>

                        <div className="mb-2">
                            <span className="text-[36px] sm:text-[40px] md:text-[44px] font-black text-gray-900 tracking-tight">₹1,00,000</span>
                            <span className="text-sm sm:text-[16px] text-gray-500 ml-1">/5 properties</span>
                        </div>

                        <div className="flex-grow space-y-3 sm:space-y-4 my-6 sm:my-8 text-left">
                            {investorPlanFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className={`text-sm sm:text-[15px] text-gray-700 leading-snug ${feature.bold ? 'font-medium' : ''}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <a href="tel:+919840752850" className="mt-auto w-full block text-center border-2 border-[#d97706] text-[#d97706] font-bold py-3 sm:py-3.5 rounded-lg hover:bg-orange-50 transition-colors text-[15px] sm:text-base">
                            Get Started
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}