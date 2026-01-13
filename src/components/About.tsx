"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const defaultImages = ["/carousel-1.jpeg"]; // Fallback just in case

interface AboutProps {
    carouselImages?: string[];
}

export function About({ carouselImages = [] }: AboutProps) {
    const { t } = useLanguage();
    const images = carouselImages.length > 0 ? carouselImages : defaultImages;
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x; // Positive is right swipe, negative is left
                                if (swipe < -50) {
                                    nextImage();
                                } else if (swipe > 50) {
                                    prevImage();
                                }
                            }}
                        >
                            <Image
                                src={images[currentImage]}
                                alt="Veterinarian with dog"
                                fill
                                className="object-cover pointer-events-none select-none"
                            />
                        </motion.div>

                        {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6 text-foreground" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-6 w-6 text-foreground" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-white w-6" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">{t.about.title}</h2>
                            <h3 className="text-xl font-medium text-primary mb-6">
                                {t.about.greeting}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.about.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {t.about.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                    <span className="font-medium text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
