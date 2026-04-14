export default function AISection() {
    return (
        <section className="w-full py-12 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-8 sm:gap-12">
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
                        <div className="absolute w-full h-full bg-green-100 rounded-full"></div>
                        <div className="relative bg-white rounded-xl shadow-md p-4 sm:p-6 w-[200px] sm:w-[220px] text-center">

                            <div className="flex justify-center mb-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                                </svg>
                            </div>

                            <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                                Get your AI insights <br /> in seconds!
                            </h3>

                            <p className="text-xs text-gray-500 mt-2">
                                Select from your documents to get started.
                            </p>

                            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-sm px-4 py-2 rounded-md font-medium">
                                Upload document
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                        Don't leave your <br /> contracts to luck!
                    </h2>

                    <p className="mt-4 sm:mt-6 text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
                        It's easy to misunderstand a contract — even for the most experienced small business owners.
                        Before you negotiate or sign anything, get a FREE Contract Review to look for red flags and missing info!
                    </p>

                    <button className="mt-4 sm:mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 text-sm sm:text-base">
                        Try it now
                    </button>
                </div>
            </div>
        </section>
    );
}
