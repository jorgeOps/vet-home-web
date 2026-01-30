"use client";

import Link from "next/link";
import { Stethoscope, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-muted/30 border-t pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary p-1.5 rounded-lg text-white">
                                <Stethoscope size={20} />
                            </div>
                            <span className="font-bold text-lg">VetHome Costa del Sol</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {t.footer.brandTagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">{t.footer.sectionsTitle}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#home" className="hover:text-primary">{t.nav.home}</Link></li>
                            <li><Link href="/#services" className="hover:text-primary">{t.nav.services}</Link></li>
                            <li><Link href="/#about" className="hover:text-primary">{t.nav.about}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">{t.footer.contactTitle}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Phone size={16} className="text-primary" />
                                <span>+34 622 588 839</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={16} className="text-primary" />
                                <span>vethome.costadelsol@gmail.com</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin size={16} className="text-primary mt-0.5" />
                                <span>{t.footer.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4">{t.footer.socialTitle}</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors border shadow-sm">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors border shadow-sm">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
