"use client";

import Link from "next/link";
import { ArrowLeft, Check, CalendarCheck, Plus } from "lucide-react";
import { servicesData, iconMap } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { notFound } from "next/navigation";

interface ServiceDetailProps {
    slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
    const { language, t } = useLanguage();
    const service = servicesData[language].find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    const Icon = iconMap[service.iconName];

    // Helper text for UI elements that might not be in translations yet or are generic
    // Actually, 't' should cover it, but let's check what 't' has.
    // 't.services' has only 'title', 'subtitle', 'popular', 'details'.
    // We need 'Back to Services', 'Features', 'Benefits', 'Extra Services', 'Price', 'Book'
    // I will hardcode them based on language for now or add to translations.
    // Ideally I should add them to translations.ts, but user asked about data.ts.
    // I'll add a small helper map here or just use the translated data if available.
    // The service object itself has 'price', 'features' etc translated.
    // Key UI labels:
    // "Volver a Servicios" -> "Back to Services"
    // "Características" -> "Features"
    // "Beneficios" -> "Benefits"
    // "Servicios Extra Disponibles" -> "Extra Services Available"
    // "Precio Estimado" -> "Estimated Price"
    // "Reservar Cita" -> "Book Appointment"
    // "* Precios sujetos a..." -> "* Prices subject to..."

    const labels = {
        es: {
            back: "Volver a Servicios",
            features: "Características",
            benefits: "Beneficios",
            extras: "Servicios Extra Disponibles",
            price: "Precio Estimado",
            book: "Reservar Cita",
            disclaimer: "* Precios sujetos a valoración inicial y ubicación."
        },
        en: {
            back: "Back to Services",
            features: "Features",
            benefits: "Benefits",
            extras: "Extra Services Available",
            price: "Estimated Price",
            book: "Book Appointment",
            disclaimer: "* Prices subject to initial assessment and location."
        },
        fr: {
            back: "Retour aux Services",
            features: "Caractéristiques",
            benefits: "Avantages",
            extras: "Services Supplémentaires Disponibles",
            price: "Prix Estimé",
            book: "Prendre Rendez-vous",
            disclaimer: "* Prix sujets à évaluation initiale et localisation."
        },
        it: {
            back: "Torna ai Servizi",
            features: "Caratteristiche",
            benefits: "Benefici",
            extras: "Servizi Extra Disponibili",
            price: "Prezzo Stimato",
            book: "Prenota Appuntamento",
            disclaimer: "* Prezzi soggetti a valutazione iniziale e posizione."
        }
    };

    const ui = labels[language];

    return (
        <div className="min-h-screen pt-24 pb-12">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link
                    href="/#services"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {ui.back}
                </Link>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Icon size={32} />
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h1>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>{service.fullDescription}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                                <h3 className="font-semibold text-lg mb-4 flex items-center">
                                    <span className="bg-primary/20 p-1.5 rounded mr-3 text-primary text-xs">✨</span>
                                    {ui.features}
                                </h3>
                                <ul className="space-y-3">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm text-foreground/80">
                                            <Check className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                                <h3 className="font-semibold text-lg mb-4 flex items-center">
                                    <span className="bg-green-500/20 p-1.5 rounded mr-3 text-green-600 text-xs">❤️</span>
                                    {ui.benefits}
                                </h3>
                                <ul className="space-y-3">
                                    {service.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start text-sm text-foreground/80">
                                            <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {service.extras && (
                            <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-xl border border-orange-100 dark:border-orange-900/50 mt-6">
                                <h3 className="font-semibold text-lg mb-4 flex items-center text-orange-800 dark:text-orange-200">
                                    <span className="bg-orange-200 dark:bg-orange-800 p-1.5 rounded mr-3 text-orange-700 dark:text-orange-100 text-xs">🎁</span>
                                    {ui.extras}
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.extras.map((extra) => (
                                        <li key={extra} className="flex items-center text-sm text-orange-900 dark:text-orange-100/80">
                                            <Plus className="mr-2 h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                                            {extra}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-2xl shadow-lg border sticky top-24">
                            <div className="mb-6">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{ui.price}</p>
                                <p className="text-3xl font-bold text-primary mt-1">{service.price}</p>
                            </div>

                            <div className="space-y-4">
                                <Link href="/contact" className="w-full block">
                                    <Button size="lg" className="w-full font-semibold">
                                        <CalendarCheck className="mr-2 h-5 w-5" />
                                        {ui.book}
                                    </Button>
                                </Link>
                                <p className="text-xs text-center text-muted-foreground">
                                    {ui.disclaimer}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
