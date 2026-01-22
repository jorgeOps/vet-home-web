import { Dog, Syringe, Home, Search, Scissors, Bone, LucideIcon } from "lucide-react";
import { Language } from "./translations";

export interface Service {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    price?: string;
    iconName: "Home" | "Dog" | "Syringe" | "Scissors" | "Search" | "Bone";
    features: string[];
    benefits: string[];
    extras?: string[];
}

export const servicesEs: Service[] = [
    {
        id: "cuidado-vacaciones",
        title: "Alojamiento Casero (Vacaciones)",
        description: "Mi servicio principal. Tu perro se queda en mi casa conmigo.",
        fullDescription: "Olvídate de las jaulas y el estrés de las residencias caninas tradicionales. En mi servicio de cuidado vacacional, tu perro convive conmigo en mi propia casa como uno más de la familia. Disfrutará de compañía constante, paseos frecuentes, juegos y, sobre todo, mucho cariño. Te enviaré fotos y vídeos diarios para que veas lo bien que se lo pasa. Por un pequeño extra nos ocupamos nosotros de toda la comida, a no ser que necesite una alimentación especial, en cuyo caso lo tendrá que proporcionar el dueño.",
        price: "Desde 25€/noche",
        iconName: "Home",
        features: ["Alojamiento en casa", "Sin jaulas", "Atención 24/7", "Fotos y vídeos diarios", "Integración familiar"],
        benefits: ["Menos estrés para tu mascota", "Atención personalizada", "Supervisión veterinaria constante"],
        extras: [
            "Nos encargamos de su comida",
            "Higiene (baño, corte de uñas, vaciado de glándulas anales...)",
            "Recogida a domicilio"
        ]
    },
    {
        id: "paseos-diarios",
        title: "Paseos Diarios",
        description: "Paseos largos y estimulantes para mantener a tu mascota activa.",
        fullDescription: "Si tienes un día complicado o trabajas muchas horas, yo me encargo de que tu perro no pierda su momento de ejercicio y diversión. Realizo paseos de calidad, adaptados a la energía y edad de tu perro, visitando parques y zonas verdes donde pueda olfatear y socializar.",
        price: "Desde 10€/paseo",
        iconName: "Dog",
        features: ["Paseos largos", "Rutas verdes", "Playas o parques", "Agua fresca"],
        benefits: ["Gana tiempo cuando lo necesites", "Reduce la ansiedad", "Mantiene la forma física"]
    },
    {
        id: "servicios-veterinarios",
        title: "Cuidados Veterinarios",
        description: "Chequeos veterinarios de tu mascota.",
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

export const servicesEn: Service[] = [
    {
        id: "cuidado-vacaciones",
        title: "Home Boarding (Vacation)",
        description: "My main service. Your dog stays at my home with me.",
        fullDescription: "Forget about cages and the stress of traditional kennels. With my vacation care service, your dog lives with me in my own home as one of the family. They will enjoy constant company, frequent walks, games, and above all, lots of love. I will send you daily photos and videos so you can see how much fun they are having. For a small extra, we take care of all the food, unless they need a special diet, in which case the owner must provide it.",
        price: "From 25€/night",
        iconName: "Home",
        features: ["Home accommodation", "No cages", "24/7 Attention", "Daily photos and videos", "Family integration"],
        benefits: ["Less stress for your pet", "Personalized attention", "Constant veterinary supervision"],
        extras: [
            "We provide food",
            "Hygiene (bath, nail trim, gland expression...)",
            "Home pickup"
        ]
    },
    {
        id: "paseos-diarios",
        title: "Daily Walks",
        description: "Long and stimulating walks to keep your pet active.",
        fullDescription: "If you have a busy day or work long hours, I ensure your dog doesn't miss their exercise and fun time. I provide quality walks, adapted to your dog's energy and age, visiting parks and green areas where they can sniff and socialize.",
        price: "From 10€/walk",
        iconName: "Dog",
        features: ["Long walks", "Green routes", "Beaches or parks", "Fresh water"],
        benefits: ["Save time when you need it", "Reduces anxiety", "Maintains physical fitness"]
    },
    {
        id: "servicios-veterinarios",
        title: "Veterinary Care",
        description: "Veterinary checkups for your pet.",
        fullDescription: "Avoid the stress of transport and waiting rooms. I bring the clinic to your living room for preventive and basic procedures. Ideal for puppies, older animals, or those who are very fearful. As a registered veterinarian, I can administer vaccinations, perform deworming, treat minor wounds, and conduct health checkups.",
        price: "Consult",
        iconName: "Syringe",
        features: ["Official vaccination", "Microchip", "Int/Ext Deworming", "Wound care", "Health certificates"],
        benefits: ["Total comfort", "Less fear for the animal", "Personal and close treatment"]
    },
    {
        id: "higiene-basica",
        title: "Basic Hygiene",
        description: "Baths, nail trimming, and ear cleaning.",
        fullDescription: "Keep your pet clean and healthy without leaving home. I perform baths with high-end dermatological shampoos, safe nail trimming, gland expression, and ear cleaning. All with maximum delicacy and patience.",
        price: "From 30€",
        iconName: "Scissors",
        features: ["Complete bath", "Professional drying", "Nail trimming", "Ear cleaning", "Gland expression"],
        benefits: ["Healthy skin", "Early detection of problems", "Pleasant smell at home"]
    },
    {
        id: "revision-general",
        title: "General Checkup",
        description: "Complete health check to prevent future problems.",
        fullDescription: "Prevention is key. A timely checkup can detect problems before they become serious. I perform a complete physical examination (auscultation, palpation, dental check, ocular and otic check) and advise you on nutrition and behavior.",
        price: "35€",
        iconName: "Search",
        features: ["Complete physical exam", "Dental check", "Weight control", "Nutritional advice", "Detailed report"],
        benefits: ["Peace of mind", "Long-term health", "Savings on future treatments"]
    },
    {
        id: "packs-personalizados",
        title: "Custom Packs",
        description: "Combine boarding + checkup + bath. Save with our packs!",
        fullDescription: "Going on vacation? Take the opportunity to have your dog ready upon your return. Combine vacation stays with a bath so they are returned clean and perfumed, or add an annual veterinary checkup to make the most of the time. We create the pack that best suits your needs.",
        price: "Custom",
        iconName: "Bone",
        features: ["Stay + Bath", "Stay + Checkup", "Extra walks", "Long stay discounts"],
        benefits: ["Economic savings", "Integral service", "Maximum comfort"]
    }
];

export const servicesFr: Service[] = [
    {
        id: "cuidado-vacaciones",
        title: "Pension Familiale (Vacances)",
        description: "Mon service principal. Votre chien reste chez moi avec moi.",
        fullDescription: "Oubliez les cages et le stress des chenils traditionnels. Dans mon service de pension, votre chien vit avec moi dans ma propre maison comme un membre de la famille. Il profitera d'une compagnie constante, de promenades fréquentes, de jeux et surtout de beaucoup d'amour. Je vous enverrai des photos et des vidéos quotidiennes pour que vous voyiez à quel point il s'amuse. Pour un petit supplément, nous nous occupons de toute la nourriture, sauf régime spécial, auquel cas le propriétaire doit le fournir.",
        price: "À partir de 25€/nuit",
        iconName: "Home",
        features: ["Logement à domicile", "Pas de cages", "Attention 24/7", "Photos et vidéos quotidiennes", "Intégration familiale"],
        benefits: ["Moins de stress pour votre animal", "Attention personnalisée", "Supervision vétérinaire constante"],
        extras: [
            "Nous fournissons la nourriture",
            "Hygiène (bain, coupe griffes, glandes...)",
            "Ramassage à domicile"
        ]
    },
    {
        id: "paseos-diarios",
        title: "Promenades Quotidiennes",
        description: "Promenades longues et stimulantes pour garder votre animal actif.",
        fullDescription: "Si vous avez une journée chargée ou travaillez de longues heures, je m'assure que votre chien ne manque pas son moment d'exercice et de plaisir. Je réalise des promenades de qualité, adaptées à l'énergie et à l'âge de votre chien, en visitant des parcs et des espaces verts où il peut renifler et socialiser.",
        price: "À partir de 10€/promenade",
        iconName: "Dog",
        features: ["Longues promenades", "Routes vertes", "Plages ou parcs", "Eau fraîche"],
        benefits: ["Gagnez du temps", "Réduit l'anxiété", "Maintient la forme physique"]
    },
    {
        id: "servicios-veterinarios",
        title: "Soins Vétérinaires",
        description: "Bilans de santé vétérinaires pour votre animal.",
        fullDescription: "Évitez le stress du transport et de la salle d'attente. J'apporte la clinique dans votre salon pour des procédures préventives et basiques. Idéal pour les chiots, les animaux âgés ou très peureux. En tant que vétérinaire agréée, je peux administrer des vaccins, effectuer des déparasitages, soigner des blessures légères et faire des bilans de santé.",
        price: "Consulter",
        iconName: "Syringe",
        features: ["Vaccination officielle", "Puce électronique", "Déparasitage int/ext", "Soins des plaies", "Certificats de santé"],
        benefits: ["Confort total", "Moins de peur pour l'animal", "Traitement personnel et proche"]
    },
    {
        id: "higiene-basica",
        title: "Hygiène de Base",
        description: "Bains, coupe des ongles et nettoyage des oreilles.",
        fullDescription: "Gardez votre animal propre et en bonne santé sans quitter la maison. Je réalise des bains avec des shampooings dermatologiques haut de gamme, une coupe des ongles sûre, la vidange des glandes et le nettoyage des oreilles. Le tout avec le maximum de délicatesse et de patience.",
        price: "À partir de 30€",
        iconName: "Scissors",
        features: ["Bain complet", "Séchage professionnel", "Coupe des ongles", "Nettoyage des oreilles", "Vidange des glandes"],
        benefits: ["Peau saine", "Détection précoce des problèmes", "Odeur agréable à la maison"]
    },
    {
        id: "revision-general",
        title: "Bilan Général",
        description: "Bilan complet de santé pour prévenir les problèmes futurs.",
        fullDescription: "La prévention est la clé. Un bilan à temps peut détecter les problèmes avant qu'ils ne deviennent graves. Je réalise un examen physique complet (auscultation, palpation, examen dentaire, oculaire et otique) et vous conseille sur la nutrition et le comportement.",
        price: "35€",
        iconName: "Search",
        features: ["Examen physique complet", "Examen dentaire", "Contrôle du poids", "Conseil nutritionnel", "Rapport détaillé"],
        benefits: ["Tranquillité d'esprit", "Santé à long terme", "Économies sur les traitements futurs"]
    },
    {
        id: "packs-personalizados",
        title: "Packs Personnalisés",
        description: "Combinez pension + bilan + bain. Économisez avec nos packs !",
        fullDescription: "Vous partez en vacances ? Profitez-en pour que votre chien soit prêt à votre retour. Combinez le séjour avec un bain pour qu'on vous le rende propre et parfumé, ou ajoutez un bilan vétérinaire annuel pour optimiser le temps. Nous créons le pack qui correspond le mieux à vos besoins.",
        price: "Sur mesure",
        iconName: "Bone",
        features: ["Séjour + Bain", "Séjour + Bilan", "Promenades supplémentaires", "Réductions longs séjours"],
        benefits: ["Économies financières", "Service intégral", "Confort maximum"]
    }
];

export const servicesIt: Service[] = [
    {
        id: "cuidado-vacaciones",
        title: "Pensione Casalinga (Vacanze)",
        description: "Il mio servizio principale. Il tuo cane sta a casa mia con me.",
        fullDescription: "Dimentica le gabbie e lo stress delle pensioni tradizionali. Nel mio servizio di pensione, il tuo cane convive con me nella mia casa come uno di famiglia. Godrà di compagnia costante, passeggiate frequenti, giochi e, soprattutto, tanto affetto. Ti invierò foto e video giornalieri così potrai vedere quanto si diverte. Per un piccolo extra ci occupiamo noi del cibo, a meno che non necessiti di un'alimentazione speciale, nel qual caso il proprietario dovrà fornirla.",
        price: "Da 25€/notte",
        iconName: "Home",
        features: ["Alloggio in casa", "Niente gabbie", "Attenzione 24/7", "Foto e video giornalieri", "Integrazione familiare"],
        benefits: ["Meno stress per il tuo animale", "Attenzione personalizzata", "Supervisione veterinaria costante"],
        extras: [
            "Forniamo noi il cibo",
            "Igiene (bagno, taglio unghie, spremitura ghiandole...)",
            "Ritiro a domicilio"
        ]
    },
    {
        id: "paseos-diarios",
        title: "Passeggiate Quotidiane",
        description: "Passeggiate lunghe e stimolanti per mantenere il tuo animale attivo.",
        fullDescription: "Se hai una giornata complicata o lavori molte ore, mi assicuro che il tuo cane non perda il suo momento di esercizio e divertimento. Effettuo passeggiate di qualità, adatte all'energia e all'età del tuo cane, visitando parchi e aree verdi dove può annusare e socializzare.",
        price: "Da 10€/passeggiata",
        iconName: "Dog",
        features: ["Passeggiate lunghe", "Percorsi verdi", "Spiagge o parchi", "Acqua fresca"],
        benefits: ["Risparmia tempo", "Riduce l'ansia", "Mantiene la forma fisica"]
    },
    {
        id: "servicios-veterinarios",
        title: "Cure Veterinarie",
        description: "Controlli veterinari del tuo animale.",
        fullDescription: "Evita lo stress del trasporto e della sala d'attesa. Porto la clinica nel tuo salotto per procedure preventive e di base. Ideale per cuccioli, animali anziani o molto paurosi. Come veterinaria registrata, posso somministrare vaccini, effettuare sverminazioni, curare ferite lievi e fare controlli sanitari.",
        price: "Consultare",
        iconName: "Syringe",
        features: ["Vaccinazione ufficiale", "Microchip", "Sverminazione int/est", "Cura delle ferite", "Certificati sanitari"],
        benefits: ["Comfort totale", "Meno paura per l'animale", "Trattamento personale e vicino"]
    },
    {
        id: "higiene-basica",
        title: "Igiene Base",
        description: "Bagni, taglio unghie e pulizia delle orecchie.",
        fullDescription: "Mantieni il tuo animale pulito e sano senza uscire di casa. Effettuo bagni con shampoo dermatologici di alta gamma, taglio unghie sicuro, spremitura ghiandole e pulizia orecchie. Tutto con la massima delicatezza e pazienza.",
        price: "Da 30€",
        iconName: "Scissors",
        features: ["Bagno completo", "Asciugatura professionale", "Taglio unghie", "Pulizia orecchie", "Spremitura ghiandole"],
        benefits: ["Pelle sana", "Rilevazione precoce di problemi", "Odore gradevole in casa"]
    },
    {
        id: "revision-general",
        title: "Controllo Generale",
        description: "Controllo completo della salute per prevenire problemi futuri.",
        fullDescription: "La prevenzione è la chiave. Un controllo tempestivo può rilevare problemi prima che diventino gravi. Effettuo un esame fisico completo (auscultazione, palpazione, controllo dentale, oculare e otico) e ti consiglio su nutrizione e comportamento.",
        price: "35€",
        iconName: "Search",
        features: ["Esame fisico completo", "Controllo dentale", "Controllo del peso", "Consulenza nutrizionale", "Rapporto dettagliato"],
        benefits: ["Tranquillità mentale", "Salute a lungo termine", "Risparmio su trattamenti futuri"]
    },
    {
        id: "packs-personalizados",
        title: "Pacchetti Personalizzati",
        description: "Combina pensione + controllo + bagno. Risparmia con i nostri pacchetti!",
        fullDescription: "Vai in vacanza? Approfitta per lasciare il tuo cane pronto al tuo ritorno. Combina il soggiorno con un bagno in modo che venga restituito pulito e profumato, o aggiungi un controllo veterinario annuale per ottimizzare il tempo. Creiamo il pacchetto che meglio si adatta alle tue esigenze.",
        price: "Su misura",
        iconName: "Bone",
        features: ["Soggiorno + Bagno", "Soggiorno + Controllo", "Passeggiate extra", "Sconti soggiorni lunghi"],
        benefits: ["Risparmio economico", "Servizio integrale", "Massimo comfort"]
    }
];

export const servicesData: Record<Language, Service[]> = {
    es: servicesEs,
    en: servicesEn,
    fr: servicesFr,
    it: servicesIt
};

// Default export for backward compatibility and static generation
export const services = servicesEs;

export const iconMap: Record<string, LucideIcon> = {
    Home,
    Dog,
    Syringe,
    Scissors,
    Search,
    Bone
};
