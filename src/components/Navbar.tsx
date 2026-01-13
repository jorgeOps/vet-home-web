"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Stethoscope, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const navLinks = [
        { name: t.nav.home, href: "/#home" },
        { name: t.nav.services, href: "/#services" },
        { name: t.nav.about, href: "/#about" },
        { name: t.nav.availability, href: "/#availability" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled || !isHome ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent text-white sm:text-foreground"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary p-1.5 rounded-lg text-white">
                            <Stethoscope size={24} />
                        </div>
                        <span className={cn("font-bold text-xl tracking-tight transition-colors",
                            scrolled || !isHome ? "text-foreground" : "text-white md:text-white"
                        )}>VetHome</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    scrolled || !isHome ? "text-muted-foreground" : "text-gray-200 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className={cn(
                                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary uppercase",
                                scrolled || !isHome ? "text-muted-foreground" : "text-gray-200 hover:text-white"
                            )}
                        >
                            <span className="text-lg">{language === 'es' ? '🇪🇸' : '🇬🇧'}</span>
                            {language}
                        </button>

                        <Link href="/contact">
                            <Button
                                variant={scrolled || !isHome ? "default" : "secondary"}
                                className={cn(
                                    scrolled || !isHome ? "" : "bg-white text-primary hover:bg-white/90"
                                )}
                            >
                                {t.nav.contact}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className={cn(
                                "flex items-center gap-1 text-sm font-bold transition-colors uppercase",
                                scrolled || !isHome ? "text-primary" : "text-white"
                            )}
                        >
                            <span className="text-lg">{language === 'es' ? '🇪🇸' : '🇬🇧'}</span>
                            {language}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn("p-2 focus:outline-none transition-colors",
                                scrolled || !isHome ? "text-foreground" : "text-white"
                            )}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b shadow-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">{t.nav.contactMe}</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
