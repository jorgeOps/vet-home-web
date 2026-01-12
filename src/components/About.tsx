"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function About() {
    const images = Array.from({ length: 10 }, (_, i) => `/carousel-${i + 1}.jpeg`);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl -rotate-2 blur-sm transition-all duration-500 group-hover:rotate-0 group-hover:bg-primary/30" />

                        {/* Carousel Container - Adjusted for Vertical Images (Aspect 3:4 or 9:16) */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-gray-100">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[currentIndex]}
                                        alt={`Foto ${currentIndex + 1} del carrusel`}
                                        fill
                                        className="object-cover"
                                        priority={currentIndex === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={prevImage}
                                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full shadow-sm transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Sobre Mí
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                ¡Hola! Soy María (Nombre ficticio), veterinaria colegiada con más de 5 años de experiencia en clínica de pequeños animales.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                Mi pasión es garantizar la salud y felicidad de tus mascotas. Entiendo que dejar a tu perro cuando te vas de viaje puede ser estresante, por eso ofrezco un hogar, no una jaula. En mi casa, tu perro es uno más de la familia.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Veterinaria Colegiada",
                                "Atención 24h",
                                "Sin Jaulas",
                                "Experiencia en Urgencias",
                                "Seguro de Responsabilidad",
                                "Cariño Infinito"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}
