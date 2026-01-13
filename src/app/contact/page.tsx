"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Availability } from "@/components/Availability";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (formStatus !== "idle") {
            const timer = setTimeout(() => setFormStatus("idle"), 5000);
            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_kq9mg6m",
                "template_l3orf38", // Correct template ID
                {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                },
                "s3w1jKbXorTeL9Fec" // Public Key
            );
            setFormStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-foreground">Contacta Conmigo</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        ¿Tienes dudas sobre los servicios o quieres reservar fechas? Escríbeme y te contestaré lo antes posible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-8 rounded-2xl shadow-sm border space-y-8">
                            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Teléfono / WhatsApp</h3>
                                    <p className="text-muted-foreground">+34 622 588 839</p>
                                    <p className="text-xs text-muted-foreground mt-1">Lunes a Viernes, 17h - 24h. Sábados y Domingos 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Email</h3>
                                    <p className="text-muted-foreground">contacto@vethome.es</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Zona de Servicio</h3>
                                    <p className="text-muted-foreground">Servicio a domicilio disponible en San Luis de Sabinillas y alrededores. (Consultar zonas específicas)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">¿Prefieres hablar por teléfono?</h3>
                                <p className="opacity-90 mb-4">Si no estoy en la clínica con los perritos, te atenderé sin problemas para ofrecer toda la información que requieras.</p>
                                <a href="tel:+34622588839">
                                    <Button variant="secondary" className="w-full sm:w-auto font-bold">Llamar Ahora</Button>
                                </a>
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-card p-8 rounded-2xl shadow-lg border"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                    <input
                                        id="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tu nombre"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="tucorreo@ejemplo.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                    placeholder="¿En qué puedo ayudarte? (Fechas, tipo de mascota, etc.)"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>Enviando... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                                ) : (
                                    <>Enviar Mensaje <Send className="ml-2 h-4 w-4" /></>
                                )}
                            </Button>

                            <AnimatePresence>
                                {formStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 p-4 rounded-lg bg-primary/10 text-primary border border-primary/20 shadow-sm"
                                    >
                                        <CheckCircle2 className="h-5 w-5" />
                                        <p className="text-sm font-medium">¡Mensaje enviado! Te responderé lo antes posible.</p>
                                    </motion.div>
                                )}
                                {formStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 p-4 rounded-lg bg-red-50 text-red-900 border border-red-200"
                                    >
                                        <XCircle className="h-5 w-5 text-red-600" />
                                        <p className="text-sm font-medium">Hubo un error. Por favor, inténtalo de nuevo.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">... o consulta tus fechas directamente</h2>
                </motion.div>
                <Availability />
            </div>
        </div>
    );
}
