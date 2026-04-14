export default function MembershipSection() {
    return (
        <section className="py-12 sm:py-20 text-center">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-red-600 font-bold tracking-wide text-xl sm:text-2xl mb-4">
                    ROCKET<span className="text-gray-700">LEGAL</span><span className="text-red-500">+</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
                    One membership for everything legal
                </h2>

                <p className="text-gray-500 mb-8 sm:mb-12 text-base sm:text-lg">
                    Start your free 7-day trial
                </p>

                <div className="bg-[#e9e1d2] rounded-2xl py-8 sm:py-10 px-4 sm:px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
                    <div className="text-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor"
                            strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M7 3h7l5 5v13H7z" />
                        </svg>

                        <h3 className="text-base sm:text-lg font-semibold text-red-600">Documents</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-snug">
                            Create and sign personalized<br />legal documents
                        </p>

                        <div className="text-green-600 text-xl mt-3">✔</div>
                    </div>

                    <div className="text-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor"
                            strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zM2 22c0-4 4-7 10-7s10 3 10 7" />
                        </svg>

                        <h3 className="text-base sm:text-lg font-semibold text-red-600">Legal Pros</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-snug">
                            Connect with a Legal Pro any<br />question online or consult live
                        </p>

                        <div className="text-green-600 text-xl mt-3">✔</div>
                    </div>

                    <div className="text-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor"
                            strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 2l8 4v6c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V6l8-4z" />
                        </svg>

                        <h3 className="text-base sm:text-lg font-semibold text-red-600">Filings</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-snug">
                            Register your business, protect<br />your brand and stay compliant
                        </p>

                        <div className="text-green-600 text-xl mt-3">✔</div>
                    </div>

                    <div className="text-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor"
                            strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M20 12l-8-8-8 8M4 12v8h16v-8" />
                        </svg>

                        <h3 className="text-base sm:text-lg font-semibold text-red-600">Partner offers</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-snug">
                            Save on tax filing, website<br />creation, and more
                        </p>

                        <div className="text-green-600 text-xl mt-3">✔</div>
                    </div>

                </div>

                <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4">
                    <button
                        className="bg-black text-white px-8 py-3 rounded-md w-full max-w-xs sm:w-80 hover:bg-gray-800 text-sm sm:text-base">
                        Yes, start my free trial
                    </button>

                    <button
                        className="border border-gray-400 px-8 py-3 rounded-md w-full max-w-xs sm:w-80 text-gray-700 hover:bg-gray-200 text-sm sm:text-base">
                        Membership details
                    </button>
                </div>
            </div>
        </section>
    );
}
