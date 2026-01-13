"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/34622588839" // Replace with real number
            target="_blank"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 hover:shadow-2xl"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                1
            </span>
        </Link>
    );
}
