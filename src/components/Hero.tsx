"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/main-img.jpeg"
                    alt="Veterinary Care"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Cuidado de Confianza,<br />
                        <span className="text-primary-foreground bg-primary/90 px-2 rounded-sm inline-block mt-2">
                            Como en Casa
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Soy veterinaria y cuido de tu perro en mi propio hogar. Sin jaulas, con cariño y la tranquilidad de dejarlo en manos expertas.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-white text-primary hover:bg-gray-100 hover:text-primary transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Reservar Cita
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm">
                                Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <Link href="#services" className="flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                    <span className="text-sm font-medium tracking-widest uppercase">Descubre Más</span>
                    <ArrowRight className="rotate-90 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                </Link>
            </motion.div>
        </section>
    );
}
