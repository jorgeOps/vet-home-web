"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Stethoscope, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const navLinks = [
        { name: t.nav.home, href: "/#home" },
        { name: t.nav.services, href: "/#services" },
        { name: t.nav.about, href: "/#about" },
        { name: t.nav.availability, href: "/#availability" },
    ];

    const languages: { code: Language; label: string; flag: string; name: string }[] = [
        { code: 'es', label: 'ES', flag: '🇪🇸', name: 'Español' },
        { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
        { code: 'fr', label: 'FR', flag: '🇫🇷', name: 'Français' },
        { code: 'it', label: 'IT', flag: '🇮🇹', name: 'Italiano' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        const langs: Language[] = ['es', 'en', 'fr', 'it'];
        const currentIndex = langs.indexOf(language);
        const nextIndex = (currentIndex + 1) % langs.length;
        setLanguage(langs[nextIndex]);
    };

    const currentLang = languages.find(l => l.code === language) || languages[0];

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
                        )}>VetHome Costa del Sol</span>
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

                        {/* Language Switcher Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary uppercase",
                                    scrolled || !isHome ? "text-muted-foreground" : "text-gray-200 hover:text-white"
                                )}
                            >
                                <span className="text-lg">{currentLang.flag}</span>
                                {currentLang.code}
                                <ChevronDown size={14} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-100 dark:border-zinc-800 py-1 overflow-hidden z-[60]"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 flex items-center gap-2 transition-colors",
                                                    language === lang.code ? "text-primary font-medium bg-primary/5" : "text-gray-700 dark:text-gray-200"
                                                )}
                                            >
                                                <span className="text-lg">{lang.flag}</span>
                                                <span>{lang.name}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

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
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-bold transition-colors uppercase",
                                    scrolled || !isHome ? "text-primary" : "text-white"
                                )}
                            >
                                <span className="text-xl">{currentLang.flag}</span>
                                {currentLang.code}
                                <ChevronDown size={16} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <>
                                        {/* Backdrop for mobile to handle click outside easily */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setIsLangOpen(false)}
                                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
                                            style={{ top: '64px' }} // Start below navbar
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-3 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-800 py-2 overflow-hidden z-50 origin-top-right"
                                        >
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsLangOpen(false);
                                                    }}
                                                    className={cn(
                                                        "w-full px-5 py-3 text-left text-base hover:bg-gray-50 dark:hover:bg-zinc-800 flex items-center gap-3 transition-colors",
                                                        language === lang.code ? "text-primary font-medium bg-primary/5" : "text-gray-700 dark:text-gray-200"
                                                    )}
                                                >
                                                    <span className="text-2xl">{lang.flag}</span>
                                                    <span>{lang.name}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

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
