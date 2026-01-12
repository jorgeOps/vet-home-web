"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, iconMap } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Mis Servicios</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ofrezco una gama completa de cuidados para que tu mascota esté en las mejores manos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.iconName];
                        const isFeatured = service.id === "cuidado-vacaciones" || service.id === "packs-personalizados";

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col relative p-8 bg-card rounded-2xl shadow-sm border hover:shadow-md transition-all group ${isFeatured ? "border-primary/50 shadow-primary/10 ring-1 ring-primary/20" : "border-border"
                                    }`}
                            >
                                <div className={`p-3 rounded-xl w-fit mb-6 ${isFeatured ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors"}`}>
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                                    {service.description}
                                </p>

                                {isFeatured && (
                                    <div className="absolute top-4 right-4 bg-primary text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-wider">
                                        Popular
                                    </div>
                                )}

                                <Link href={`/services/${service.id}`} className="mt-auto">
                                    <Button variant={isFeatured ? "default" : "outline"} className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground">
                                        Ver Detalles
                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
