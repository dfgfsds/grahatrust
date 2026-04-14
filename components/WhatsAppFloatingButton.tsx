"use client";

import Link from "next/link";

export default function WhatsAppFloatingButton({
    phone = "919840752850",
    message = "Welcome to Graha Trust - How can we help you today",
}: {
    phone?: string;
    message?: string;
}) {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (

        <Link
            href={href}
            target="_blank"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-16 md:bottom-6 right-4 z-[100] group"
        >
            <div className="relative flex items-center">
                {/* WhatsApp Button */}
                <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center 
                        rounded-full bg-gradient-to-br from-[#25D366] to-[#027e1d] 
                        backdrop-blur-xl border-2 border-[#25D366] 
                        shadow-[0_0_20px_rgba(37,211,102,0.3)] 
                        transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {/* WhatsApp SVG Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-7 w-7 md:h-8 md:w-8 fill-gray-50 hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.92L0 24l6.38-1.67a11.83 11.83 0 0 0 5.67 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.16-1.23-6.13-3.39-8.44zM12.06 21.6h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.8 9.8 0 0 1-1.5-5.09c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.43-4.42 9.85-9.85 9.85zm5.39-7.37c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.2.29-.76.95-.93 1.14-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.35-1.43-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.12-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.04.14.19 2 3.05 4.85 4.28 2.85 1.23 2.85.82 3.36.77.51-.05 1.72-.7 1.96-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.19-.55-.33z" />
                    </svg>

                    {/* Glow ring */}
                    {/* <span className="absolute inset-0 rounded-full animate-ping border-2 border-[#25D366]/40" /> */}
                </div>

                {/* Tooltip (Desktop Hover Only) */}
                {/* <span className="ml-3 hidden rounded-lg bg-[#25D366] px-3 py-1 text-sm font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 md:block">
          Chat with us
        </span> */}
            </div>
        </Link>
    );
}
