export type DayStatus = "free" | "partial" | "full";

// Formato de clave: "YYYY-MM-DD"
// free: Libre (caben 2 perros)
// partial: Hay 1 perro, cabe 1 más
// full: Completo (no caben más)
// Si un día no está en esta lista, asumimos que es "free" (o "full" si prefieres bloquear por defecto)

export const availabilityData: Record<string, DayStatus> = {
    // Ejemplo: Agosto 2026
    "2026-08-05": "partial",
    "2026-08-06": "partial",
    "2026-08-07": "partial",
    "2026-08-12": "full",
    "2026-08-13": "full",
    "2026-08-14": "full",
    "2026-08-15": "full",
};

export const defaultStatus: DayStatus = "free"; 
