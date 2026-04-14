import { CheckCircle, MessageSquare, Shield, FileText, ArrowRight } from "lucide-react";

export default function WorkWithUs() {
    return (
        <section className="relative py-12 md:py-18 px-4 sm:px-6 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-[#821616]/5 blur-[80px] md:blur-[120px]" />
                <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#101242]/5 blur-[80px] md:blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* LEFT CONTENT */}
                <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                    <div className="space-y-4 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051a0b]/5 border border-[#051a0b]/10 text-[#051a0b] text-xs sm:text-sm font-semibold tracking-wide justify-center lg:justify-start">
                            <span className="w-2 h-2 rounded-full bg-[#d97706]"></span>
                            Simple Process
                        </div>
                        <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Work With <br className="hidden lg:block" />
                            <span className="text-gray-900">Graha Trust</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Verify every detail before you invest. Make safe property decisions with expert support and comprehensive ground realities.
                        </p>
                    </div>

                    {/* FEATURES GRID */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
                        {[
                            { title: "Legal Check", icon: <FileText className="w-5 h-5 text-[#051a0b]" /> },
                            { title: "Site Proof", icon: <CheckCircle className="w-5 h-5 text-[#051a0b]" /> },
                            { title: "Risk Report", icon: <Shield className="w-5 h-5 text-[#051a0b]" /> },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#051a0b]/20 transition-all duration-300 group cursor-default text-left">
                                <div className="w-10 h-10 shrink-0 rounded-full bg-[#051a0b]/5 flex items-center justify-center group-hover:bg-[#051a0b]/10 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="font-semibold text-gray-800 text-[15px] sm:text-base">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a href="tel:+919840752850" className="w-full sm:w-auto group mt-2 md:mt-4 inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#051a0b] text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:bg-[#051a0b] transition-all duration-300 hover:-translate-y-1">
                        Start Your Verification
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* RIGHT CARD / STEPPER */}
                <div className="relative mt-4 lg:mt-0 max-w-lg lg:max-w-none mx-auto w-full">
                    {/* Decorative card backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#101242] to-[#1a1d60] rounded-[2rem] sm:rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-10"></div>

                    <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-2xl bg-[#051a0b]/5 flex items-center justify-center border border-[#101242]/10 shrink-0">
                                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#051a0b]" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-[#101242]">
                                Connect With Us
                            </h2>
                        </div>

                        {/* STEPS */}
                        <div className="space-y-6 sm:space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-[19px] sm:before:left-[23px] before:w-[2px] before:bg-gradient-to-b before:from-[#101242]/20 before:to-transparent">
                            {[
                                {
                                    title: "Share Your Details",
                                    desc: "Send property location or documents on WhatsApp",
                                },
                                {
                                    title: "Get Expert Review",
                                    desc: "Our team checks legal, site, and risk factors",
                                },
                                {
                                    title: "Receive Your Report",
                                    desc: "Clear insights with proof, within 2 weeks",
                                },
                            ].map((step, i) => (
                                <div key={i} className="relative flex items-start gap-4 sm:gap-6 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#051a0b] flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="pt-0 sm:pt-1.5 flex-1">
                                        <h3 className="text-lg sm:text-xl font-bold text-[#101242] mb-1">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <a href="https://wa.me/919840752850?text=Welcome%20to%20Graha%20Trust%20-%20How%20can%20we%20help%20you%20today" target="_blank" rel="noopener noreferrer" className="mt-10 sm:mt-12 w-full py-3.5 sm:py-4 bg-[#051a0b] text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-md hover:bg-[#051a0b] transition-colors relative overflow-hidden group flex items-center justify-center gap-2 sm:gap-3">
                            <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                            <span className="relative z-10">Contact on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}