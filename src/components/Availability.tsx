"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Check, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { availabilityData, defaultStatus, DayStatus } from "@/lib/availability-data";

const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];
const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function Availability() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState<string[]>([]);

    // Helpers para manejo de fechas
    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year: number, month: number) => {
        // 0 = Domingo, 1 = Lunes... queremos que Lunes sea 0 y Domingo 6
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayDocs = getFirstDayOfMonth(year, month);

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const getDayStatus = (day: number): DayStatus => {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return availabilityData[dateKey] || defaultStatus;
    };

    const getDateKey = (day: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const toggleDate = (day: number) => {
        const dateKey = getDateKey(day);
        const status = getDayStatus(day);

        if (status === "full") return;

        setSelectedDates(prev =>
            prev.includes(dateKey)
                ? prev.filter(d => d !== dateKey)
                : [...prev, dateKey].sort()
        );
    };

    const generateWhatsAppLink = () => {
        if (selectedDates.length === 0) return "#";
        const datesStr = selectedDates.map(d => d.split("-").reverse().join("/")).join(", ");
        const message = `Hola, he visto tu web y estoy interesado/a en reservar hueco para los días: ${datesStr}.`;
        return `https://wa.me/34622588839?text=${encodeURIComponent(message)}`;
    };

    return (
        <section id="availability" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Disponibilidad</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Selecciona los días que te interesan. Recuerda que acepto un máximo de 2 perros simultáneamente para garantizar que estén bien atendidos.
                        </p>

                        <div className="bg-secondary/30 border border-border/50 rounded-xl p-6 space-y-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                <CalendarIcon className="text-primary" size={20} />
                                Leyenda
                            </h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-background border border-border shadow-sm flex items-center justify-center font-bold text-[10px] text-foreground">1</div>
                                    <span><strong>Libre</strong> (2 plazas disponibles)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center font-bold text-[10px]">½</div>
                                    <span><strong>Última Plaza</strong> (Queda 1 hueco)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-primary text-primary-foreground flex items-center justify-center"><Check size={10} /></div>
                                    <span>Tu selección</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-muted text-muted-foreground/30 flex items-center justify-center text-[10px]">X</div>
                                    <span><strong>Completo</strong> (Lo siento, estoy llena)</span>
                                </li>
                            </ul>
                        </div>

                        {selectedDates.length > 0 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <Link href={generateWhatsAppLink()} target="_blank">
                                    <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20">
                                        <Send className="mr-2 h-4 w-4" />
                                        Consultar disponibilidad
                                    </Button>
                                </Link>
                                <p className="text-xs text-muted-foreground mt-2">Te abrirá WhatsApp para hablar directamente conmigo.</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-card shadow-xl border rounded-3xl p-6 md:p-8 select-none">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-bold text-xl capitalize">{monthNames[month]} {year}</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" onClick={prevMonth} className="h-8 w-8 rounded-full"><ChevronLeft size={16} /></Button>
                                <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8 rounded-full"><ChevronRight size={16} /></Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 text-center mb-4">
                            {daysOfWeek.map(d => (
                                <div key={d} className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{d}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1 sm:gap-3">
                            {/* Padding days for start of month */}
                            {[...Array(firstDayDocs)].map((_, i) => <div key={`pad-${i}`} />)}

                            {[...Array(daysInMonth)].map((_, i) => {
                                const day = i + 1;
                                const dateKey = getDateKey(day);
                                const status = getDayStatus(day);

                                // Calcular si es pasado
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                const currentDayDate = new Date(year, month, day);
                                const isPast = currentDayDate < today;

                                const isSelected = selectedDates.includes(dateKey);
                                // Si es pasado, lo tratamos visualmente como "full" (bloqueado) pero con estilo distinto si quieres,
                                // o simplemente deshabilitado.
                                const isFull = status === "full";
                                const isPartial = status === "partial";
                                const isDisabled = isFull || isPast;

                                return (
                                    <button
                                        key={day}
                                        onClick={() => toggleDate(day)}
                                        disabled={isDisabled}
                                        className={cn(
                                            "aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 relative",
                                            // Estados base
                                            isPast && "bg-muted/50 text-muted-foreground/20 cursor-not-allowed", // Estilo específico para pasado
                                            !isPast && isFull && "bg-muted text-muted-foreground/30 cursor-not-allowed",

                                            !isDisabled && !isSelected && "bg-background border border-border hover:border-primary hover:text-primary hover:shadow-md cursor-pointer",

                                            // Estado Partial (Naranja/Aviso)
                                            !isDisabled && isPartial && !isSelected && "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 hover:border-orange-300",

                                            // Estado Seleccionado
                                            isSelected && "bg-primary text-primary-foreground shadow-lg scale-105 z-10 ring-2 ring-offset-2 ring-primary"
                                        )}
                                    >
                                        <span>{day}</span>
                                        {isSelected && <Check size={12} className="absolute bottom-1 right-1 opacity-70" />}
                                        {!isSelected && isPartial && !isPast && <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
