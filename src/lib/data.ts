import { Dog, Syringe, Home, Search, Scissors, Bone, LucideIcon } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    price?: string;
    iconName: "Home" | "Dog" | "Syringe" | "Scissors" | "Search" | "Bone";
    features: string[];
    benefits: string[];
}

export const services: Service[] = [
    {
        id: "cuidado-vacaciones",
        title: "Alojamiento Casero (Vacaciones)",
        description: "Mi servicio principal. Tu perro se queda en mi casa conmigo.",
        fullDescription: "Olvídate de las jaulas y el estrés de las residencias caninas tradicionales. En mi servicio de cuidado vacacional, tu perro convive conmigo en mi propia casa como uno más de la familia. Disfrutará de compañía constante, paseos frecuentes, juegos y, sobre todo, mucho cariño. Te enviaré fotos y vídeos diarios para que veas lo bien que se lo pasa.",
        price: "Desde 25€/noche",
        iconName: "Home",
        features: ["Alojamiento en casa", "Sin jaulas", "Atención 24/7", "Fotos y vídeos diarios", "Integración familiar"],
        benefits: ["Menos estrés para tu mascota", "Atención personalizada", "Supervisión veterinaria constante"]
    },
    {
        id: "paseos-diarios",
        title: "Paseos Diarios",
        description: "Paseos largos y estimulantes para mantener a tu perro activo.",
        fullDescription: "Si tienes un día complicado o trabajas muchas horas, yo me encargo de que tu perro no pierda su momento de ejercicio y diversión. Realizo paseos de calidad, adaptados a la energía y edad de tu perro, visitando parques y zonas verdes donde pueda olfatear y socializar.",
        price: "15€/hora",
        iconName: "Dog",
        features: ["1 hora de paseo", "Rutas verdes", "Juegos de olfato", "Agua fresca", "Limpieza de patas al volver"],
        benefits: ["Mejora la conducta", "Reduce la ansiedad", "Mantiene la forma física"]
    },
    {
        id: "servicios-veterinarios",
        title: "Cuidados Veterinarios",
        description: "Vacunas, desparasitación y curas a domicilio.",
        fullDescription: "Evita el estrés del transporte y la sala de espera. Llevo la clínica a tu salón para procedimientos preventivos y básicos. Ideal para cachorros, animales mayores o muy miedosos. Como veterinaria colegiada, puedo administrar vacunas, realizar desparasitaciones, curas de heridas leves y chequeos de salud.",
        price: "Consultar",
        iconName: "Syringe",
        features: ["Vacunación oficial", "Microchip", "Desparasitación int/ext", "Curas de heridas", "Certificados de salud"],
        benefits: ["Comodidad total", "Menos miedo para el animal", "Trato personal y cercano"]
    },
    {
        id: "higiene-basica",
        title: "Higiene Básica",
        description: "Baños, corte de uñas y limpieza de oídos.",
        fullDescription: "Mantén a tu mascota limpia y sana sin salir de casa. Realizo baños con champús dermatológicos de alta gama, corte de uñas seguro, vaciado de glándulas y limpieza de oídos. Todo con la máxima delicadeza y paciencia.",
        price: "Desde 30€",
        iconName: "Scissors",
        features: ["Baño completo", "Secado profesional", "Corte de uñas", "Limpieza de oídos", "Vaciado de glándulas"],
        benefits: ["Piel sana", "Detección precoz de problemas", "Olor agradable en casa"]
    },
    {
        id: "revision-general",
        title: "Revisión General",
        description: "Chequeo completo de salud para prevenir problemas futuros.",
        fullDescription: "La prevención es la clave. Una revisión a tiempo puede detectar problemas antes de que sean graves. Realizo una exploración física completa (auscultación, palpación, revisión dental, ocular y ótica) y te asesoro sobre nutrición y comportamiento.",
        price: "35€",
        iconName: "Search",
        features: ["Exploración física completa", "Revisión dental", "Control de peso", "Asesoramiento nutricional", "Informe detallado"],
        benefits: ["Tranquilidad mental", "Salud a largo plazo", "Ahorro en tratamientos futuros"]
    },
    {
        id: "packs-personalizados",
        title: "Packs Personalizados",
        description: "Combina alojamiento + revisión + baño. ¡Ahorra con nuestros packs!",
        fullDescription: "¿Te vas de vacaciones? Aprovecha para dejar a tu perro listo a la vuelta. Combina la estancia vacacional con un baño para que te lo entregue limpio y perfumado, o añade una revisión veterinaria anual para aprovechar el tiempo. Creamos el pack que mejor se adapte a tus necesidades.",
        price: "A medida",
        iconName: "Bone",
        features: ["Estancia + Baño", "Estancia + Revisión", "Paseos extra", "Descuentos por larga estancia"],
        benefits: ["Ahorro económico", "Servicio integral", "Máxima comodidad"]
    }
];

export const iconMap: Record<string, LucideIcon> = {
    Home,
    Dog,
    Syringe,
    Scissors,
    Search,
    Bone
};
