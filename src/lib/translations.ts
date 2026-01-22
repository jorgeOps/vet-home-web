export type Language = 'es' | 'en' | 'fr' | 'it';

export const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            about: "Sobre Mí",
            availability: "Disponibilidad",
            contact: "Contacto",
            contactMe: "Contáctame",
        },
        hero: {
            title1: "Cuidado de Confianza,",
            title2: "Como en Casa",
            subtitle: "Soy veterinaria y cuido de tu perro en mi propio hogar. Sin jaulas, con cariño y la tranquilidad de dejarlo en manos expertas.",
            book: "Reservar Cita",
            services: "Ver Servicios",
            discover: "Descubre Más",
        },
        services: {
            title: "Mis Servicios",
            subtitle: "Ofrezco una gama completa de cuidados para que tu mascota esté en las mejores manos.",
            popular: "Popular",
            details: "Ver Detalles",
            // Data for dynamic services will be handled separately or added here? 
            // For simplicity, let's keep component static text here.
        },
        about: {
            title: "Sobre Mí",
            greeting: "¡Hola! Soy Ana, veterinaria colegiada con experiencia profesional en pequeños animales.",
            description: "Mi pasión es garantizar la salud y felicidad de tus mascotas. Entiendo que dejar a tu perro cuando te vas de viaje puede ser estresante, por eso ofrezco un hogar, no una jaula. En mi casa, tu perro es uno más de la familia.",
            features: [
                "Veterinaria Colegiada",
                "Atención 24h",
                "Sin Jaulas",
                "Experiencia con pequeños animales",
                "Experiencia con animales exóticos",
                "Cariño Infinito"
            ]
        },
        contact: {
            title: "Contacta Conmigo",
            subtitle: "¿Tienes dudas sobre los servicios o quieres reservar fechas? Escríbeme y te contestaré lo antes posible.",
            infoTitle: "Información de Contacto",
            availabilityTitle: "... o consulta tus fechas directamente",
            phoneTitle: "Teléfono / WhatsApp",
            phoneHours: "Lunes a Viernes, 17h - 24h. Sábados y Domingos 24h",
            emailTitle: "Email",
            serviceAreaTitle: "Zona de Servicio",
            serviceAreaText: "Servicio a domicilio disponible en Estepona, San Luis de Sabinillas y alrededores. (Consultar zonas específicas)",
            callTitle: "¿Prefieres hablar por teléfono?",
            callText: "Si no estoy en la clínica con los perritos, te atenderé sin problemas para ofrecer toda la información que requieras.",
            callButton: "Llamar Ahora",
            formTitle: "Envíame un mensaje",
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre",
            emailLabel: "Email",
            emailPlaceholder: "tucorreo@ejemplo.com",
            messageLabel: "Mensaje",
            messagePlaceholder: "¿En qué puedo ayudarte? (Fechas, tipo de mascota, etc.)",
            sending: "Enviando...",
            send: "Enviar Mensaje",
            success: "¡Mensaje enviado! Te responderé lo antes posible.",
            error: "Hubo un error. Por favor, inténtalo de nuevo.",
        },
        availability: {
            title: "Disponibilidad",
            subtitle: "Selecciona las fechas que te interesan. Aunque veas alta ocupación, no dudes en consultar; a veces puedo hacer excepciones o reorganizarme.",
            legendTitle: "Leyenda de Ocupación",
            legendFree: "Disponible (Agenda abierta)",
            legendPartial: "Plazas Limitadas (Tengo otras mascotas en casa durante estas fechas)",
            legendFull: "Alta Ocupación (Consultar disponibilidad)",
            legendSelected: "Tu selección",
            checkButton: "Consultar disponibilidad",
            checkHint: "Te abrirá WhatsApp para hablar directamente conmigo.",
            consultButton: "Consultar disponibilidad",
            whatsappMessage: "Hola, he visto tu web y estoy interesado/a en reservar hueco para los días: ",
        },
        footer: {
            brandTagline: "Cuidado de mascotas familiar y cercano. Trato directo y sin intermediarios.",
            sectionsTitle: "Secciones",
            contactTitle: "Contacto",
            socialTitle: "Redes Sociales",
            copyright: "Hecho con ❤️ para cuidar de tus peludos.",
            address: "Estepona, San Luis de Sabinillas y alrededores"
        },
        calendar: {
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            daysOfWeek: ["L", "M", "X", "J", "V", "S", "D"]
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            about: "About Me",
            availability: "Availability",
            contact: "Contact",
            contactMe: "Contact Me",
        },
        hero: {
            title1: "Trusted Care,",
            title2: "Just Like Home",
            subtitle: "I am a veterinarian and I take care of your dog in my own home. No cages, just love and the peace of mind of leaving them in expert hands.",
            book: "Book Appointment",
            services: "View Services",
            discover: "Discover More",
        },
        services: {
            title: "My Services",
            subtitle: "I offer a complete range of care to ensure your pet is in the best hands.",
            popular: "Popular",
            details: "View Details",
        },
        about: {
            title: "About Me",
            greeting: "Hi! I'm Ana, a registered veterinarian with professional experience in small animals.",
            description: "My passion is ensuring the health and happiness of your pets. I understand that leaving your dog when you travel can be stressful, which is why I offer a home, not a cage. In my house, your dog is part of the family.",
            features: [
                "Registered Veterinarian",
                "24h Attention",
                "No Cages",
                "Small Animal Experience",
                "Exotic Animal Experience",
                "Infinite Love"
            ]
        },
        contact: {
            title: "Contact Me",
            subtitle: "Have questions about services or want to book dates? Write to me and I will reply as soon as possible.",
            infoTitle: "Contact Information",
            availabilityTitle: "... or check availability directly",
            phoneTitle: "Phone / WhatsApp",
            phoneHours: "Monday to Friday, 5pm - 12am. Saturdays and Sundays 24h",
            emailTitle: "Email",
            serviceAreaTitle: "Service Area",
            serviceAreaText: "Home service available in Estepona, San Luis de Sabinillas and surroundings. (Check specific areas)",
            callTitle: "Prefer to talk by phone?",
            callText: "If I'm not at the clinic with the dogs, I'll be happy to answer any questions you may have.",
            callButton: "Call Now",
            formTitle: "Send me a message",
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "youremail@example.com",
            messageLabel: "Message",
            messagePlaceholder: "How can I help? (Dates, pet type, etc.)",
            sending: "Sending...",
            send: "Send Message",
            success: "Message sent! I will reply as soon as possible.",
            error: "There was an error. Please try again.",
        },
        availability: {
            title: "Availability",
            subtitle: "Select the dates you are interested in. Even if you see high occupancy, don't hesitate to ask; sometimes I can make exceptions or rearrange.",
            legendTitle: "Occupancy Legend",
            legendFree: "Available (Open agenda)",
            legendPartial: "Limited Spots (I have other pets at home on these dates)",
            legendFull: "High Occupancy (Check availability)",
            legendSelected: "Your selection",
            checkButton: "Check availability",
            checkHint: "This will open WhatsApp to chat directly with me.",
            consultButton: "Check availability",
            whatsappMessage: "Hi, I've seen your website and I'm interested in booking for these dates: ",
        },
        footer: {
            brandTagline: "Familiar and close pet care. Direct treatment and without intermediaries.",
            sectionsTitle: "Sections",
            contactTitle: "Contact",
            socialTitle: "Social Media",
            copyright: "Made with ❤️ to take care of your furry friends.",
            address: "Estepona, San Luis de Sabinillas and surroundings"
        },
        calendar: {
            months: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            daysOfWeek: ["M", "T", "W", "T", "F", "S", "S"]
        }
    },
    // Placeholders for French and Italian (copy of EN for now)
    fr: {
        nav: {
            home: "Accueil",
            services: "Services",
            about: "À propos",
            availability: "Disponibilité",
            contact: "Contact",
            contactMe: "Contactez-moi",
        },
        hero: {
            title1: "Soins de Confiance,",
            title2: "Comme à la Maison",
            subtitle: "Je suis vétérinaire et je m'occupe de votre chien chez moi. Pas de cages, juste de l'amour et la tranquillité de les laisser entre des mains expertes.",
            book: "Prendre Rendez-vous",
            services: "Voir Services",
            discover: "Découvrir Plus",
        },
        services: {
            title: "Mes Services",
            subtitle: "J'offre une gamme complète de soins pour garantir que votre animal est entre les meilleures mains.",
            popular: "Populaire",
            details: "Voir Détails",
        },
        about: {
            title: "À Propos de Moi",
            greeting: "Bonjour ! Je suis Ana, vétérinaire agréée avec une expérience professionnelle des petits animaux.",
            description: "Ma passion est d'assurer la santé et le bonheur de vos animaux. Je comprends que laisser votre chien lorsque vous voyagez peut être stressant, c'est pourquoi j'offre un foyer, pas une cage. Chez moi, votre chien fait partie de la famille.",
            features: [
                "Vétérinaire Agréée",
                "Attention 24h",
                "Pas de Cages",
                "Expérience Petits Animaux",
                "Expérience Animaux Exotiques",
                "Amour Infini"
            ]
        },
        contact: {
            title: "Contactez-Moi",
            subtitle: "Des questions sur les services ou vous voulez réserver ? Écrivez-moi et je vous répondrai dès que possible.",
            infoTitle: "Informations de Contact",
            availabilityTitle: "... ou vérifiez la disponibilité directement",
            phoneTitle: "Téléphone / WhatsApp",
            phoneHours: "Lundi à Vendredi, 17h - 24h. Samedis et Dimanches 24h",
            emailTitle: "Email",
            serviceAreaTitle: "Zone de Service",
            serviceAreaText: "Service à domicile disponible à Estepona, San Luis de Sabinillas et environs. (Vérifier zones spécifiques)",
            callTitle: "Préférez-vous parler par téléphone ?",
            callText: "Si je ne suis pas à la clinique avec les chiens, je serai ravie de répondre à vos questions.",
            callButton: "Appeler Maintenant",
            formTitle: "Envoyez-moi un message",
            nameLabel: "Nom",
            namePlaceholder: "Votre nom",
            emailLabel: "Email",
            emailPlaceholder: "votreemail@exemple.com",
            messageLabel: "Message",
            messagePlaceholder: "Comment puis-je vous aider ? (Dates, type d'animal, etc.)",
            sending: "Envoi...",
            send: "Envoyer Message",
            success: "Message envoyé ! Je répondrai dès que possible.",
            error: "Il y a eu une erreur. Veuillez réessayer.",
        },
        availability: {
            title: "Disponibilité",
            subtitle: "Sélectionnez les dates qui vous intéressent. Même si vous voyez une occupation élevée, n'hésitez pas à demander ; parfois je peux faire des exceptions ou réorganiser.",
            legendTitle: "Légende d'Occupation",
            legendFree: "Disponible",
            legendPartial: "Places Limitées",
            legendFull: "Occupation Élevée",
            legendSelected: "Votre sélection",
            checkButton: "Vérifier disponibilité",
            checkHint: "Cela ouvrira WhatsApp pour discuter directement avec moi.",
            consultButton: "Vérifier disponibilité",
            whatsappMessage: "Bonjour, j'ai vu votre site et je suis intéressé(e) pour réserver ces dates : ",
        },
        footer: {
            brandTagline: "Soins familiers et proches. Traitement direct et sans intermédiaires.",
            sectionsTitle: "Sections",
            contactTitle: "Contact",
            socialTitle: "Réseaux Sociaux",
            copyright: "Fait avec ❤️ pour prendre soin de vos poilus.",
            address: "Estepona, San Luis de Sabinillas et environs"
        },
        calendar: {
            months: [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ],
            daysOfWeek: ["L", "M", "M", "J", "V", "S", "D"]
        }
    },
    it: {
        nav: {
            home: "Home",
            services: "Servizi",
            about: "Chi Sono",
            availability: "Disponibilità",
            contact: "Contatti",
            contactMe: "Contattami",
        },
        hero: {
            title1: "Cura Fidata,",
            title2: "Come a Casa",
            subtitle: "Sono una veterinaria e mi prendo cura del tuo cane a casa mia. Niente gabbie, solo amore e la tranquillità di lasciarli in mani esperte.",
            book: "Prenota Appuntamento",
            services: "Vedi Servizi",
            discover: "Scopri di Più",
        },
        services: {
            title: "I Miei Servizi",
            subtitle: "Offro una gamma completa di cure per garantire che il tuo animale sia nelle migliori mani.",
            popular: "Popolare",
            details: "Vedi Dettagli",
        },
        about: {
            title: "Chi Sono",
            greeting: "Ciao! Sono Ana, veterinaria registrata con esperienza professionale in piccoli animali.",
            description: "La mia passione è garantire la salute e la felicità dei tuoi animali. Capisco che lasciare il tuo cane quando viaggi può essere stressante, per questo offro una casa, non una gabbia. A casa mia, il tuo cane è parte della famiglia.",
            features: [
                "Veterinaria Registrata",
                "Attenzione 24h",
                "Niente Gabbie",
                "Esperienza Piccoli Animali",
                "Esperienza Animali Esotici",
                "Amore Infinito"
            ]
        },
        contact: {
            title: "Contattami",
            subtitle: "Hai domande sui servizi o vuoi prenotare date? Scrivimi e ti risponderò il prima possibile.",
            infoTitle: "Informazioni di Contatto",
            availabilityTitle: "... o controlla la disponibilità direttamente",
            phoneTitle: "Telefono / WhatsApp",
            phoneHours: "Lunedì a Venerdì, 17h - 24h. Sabato e Domenica 24h",
            emailTitle: "Email",
            serviceAreaTitle: "Area di Servizio",
            serviceAreaText: "Servizio a domicilio disponibile a Estepona, San Luis de Sabinillas e dintorni. (Controlla aree specifiche)",
            callTitle: "Preferisci parlare al telefono?",
            callText: "Se non sono in clinica con i cani, sarò felice di rispondere a qualsiasi domanda tu possa avere.",
            callButton: "Chiama Ora",
            formTitle: "Inviami un messaggio",
            nameLabel: "Nome",
            namePlaceholder: "Il tuo nome",
            emailLabel: "Email",
            emailPlaceholder: "latuaemail@esempio.com",
            messageLabel: "Messaggio",
            messagePlaceholder: "Come posso aiutarti? (Date, tipo di animale, ecc.)",
            sending: "Invio...",
            send: "Invia Messaggio",
            success: "Messaggio inviato! Risponderò il prima possibile.",
            error: "C'è stato un errore. Per favore riprova.",
        },
        availability: {
            title: "Disponibilità",
            subtitle: "Seleziona le date che ti interessano. Anche se vedi alta occupazione, non esitare a chiedere; a volte posso fare eccezioni o riorganizzare.",
            legendTitle: "Legenda Occupazione",
            legendFree: "Disponibile",
            legendPartial: "Posti Limitati",
            legendFull: "Alta Occupazione",
            legendSelected: "La tua selezione",
            checkButton: "Verifica disponibilità",
            checkHint: "Questo aprirà WhatsApp per chattare direttamente con me.",
            consultButton: "Verifica disponibilità",
            whatsappMessage: "Ciao, ho visto il tuo sito e sono interessato/a a prenotare per queste date: ",
        },
        footer: {
            brandTagline: "Cura familiare e vicina. Trattamento diretto e senza intermediari.",
            sectionsTitle: "Sezioni",
            contactTitle: "Contatti",
            socialTitle: "Social Media",
            copyright: "Fatto con ❤️ per prendersi cura dei tuoi pelosetti.",
            address: "Estepona, San Luis de Sabinillas e dintorni"
        },
        calendar: {
            months: [
                "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
                "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
            ],
            daysOfWeek: ["L", "M", "M", "G", "V", "S", "D"]
        }
    }
};

export const servicesData = {
    es: [
        {
            id: "cuidado-vacaciones",
            title: "Alojamiento Casero (Vacaciones)",
            description: "Mi servicio principal. Tu perro se queda en mi casa conmigo.",
            price: "Desde 25€/noche",
            iconName: "Home"
        },
        {
            id: "paseos-diarios",
            title: "Paseos Diarios",
            description: "¿Tienes un día complicado o trabajas muchas horas? Yo me encargo de que tu mascota no pierda su momento de ejercicio y diversión.",
            price: "15€/hora",
            iconName: "Dog"
        },
        {
            id: "servicios-veterinarios",
            title: "Cuidados Veterinarios",
            description: "Realizo chequeos veterinarios a tu mascota para garantizar su salud y bienestar, y prevenir problemas futuros.",
            price: "Consultar",
            iconName: "Syringe"
        },
        {
            id: "higiene-basica",
            title: "Higiene Básica",
            description: "Baños, corte de uñas, limpieza de oídos y ojos, vaciado de glándulas, y mucho más.",
            price: "Desde 30€",
            iconName: "Scissors"
        },
        {
            id: "guarderia-horas",
            title: "Guardería por Horas",
            description: "Deja a tu perro en casa de una veterinaria en tus horas más ajetreadas.",
            price: "15€/hora",
            iconName: "Home"
        },
        {
            id: "packs-personalizados",
            title: "Packs Personalizados",
            description: "Combina alojamiento + revisión + baño. ¡Ahorra con nuestros packs!",
            price: "A medida",
            iconName: "Bone"
        }
    ],
    en: [
        {
            id: "cuidado-vacaciones",
            title: "Home Boarding (Vacation)",
            description: "My main service. Your dog stays at my home with me.",
            price: "From 25€/night",
            iconName: "Home"
        },
        {
            id: "paseos-diarios",
            title: "Daily Walks",
            description: "Long and stimulating walks to keep your dog active.",
            price: "15€/hour",
            iconName: "Dog"
        },
        {
            id: "servicios-veterinarios",
            title: "Veterinary Care",
            description: "Vaccinations, deworming, and cures at home.",
            price: "Consult",
            iconName: "Syringe"
        },
        {
            id: "higiene-basica",
            title: "Basic Hygiene",
            description: "Baths, nail trimming, and ear cleaning.",
            price: "From 30€",
            iconName: "Scissors"
        },
        {
            id: "revision-general",
            title: "General Checkup",
            description: "Complete health check to prevent future problems.",
            price: "35€",
            iconName: "Search"
        },
        {
            id: "packs-personalizados",
            title: "Custom Packs",
            description: "Combine boarding + checkup + bath. Save with our packs!",
            price: "Custom",
            iconName: "Bone"
        }
    ],
    fr: [
        {
            id: "cuidado-vacaciones",
            title: "Pension Familiale (Vacances)",
            description: "Mon service principal. Votre chien reste chez moi.",
            price: "À partir de 25€/nuit",
            iconName: "Home"
        },
        {
            id: "paseos-diarios",
            title: "Promenades Quotidiennes",
            description: "Promenades longues et stimulantes.",
            price: "15€/heure",
            iconName: "Dog"
        },
        {
            id: "servicios-veterinarios",
            title: "Soins Vétérinaires",
            description: "Vaccinations, déparasitage et soins à domicile.",
            price: "Consulter",
            iconName: "Syringe"
        },
        {
            id: "higiene-basica",
            title: "Hygiène de Base",
            description: "Bains, coupe des ongles et nettoyage des oreilles.",
            price: "À partir de 30€",
            iconName: "Scissors"
        },
        {
            id: "revision-general",
            title: "Bilan Général",
            description: "Bilan de santé complet.",
            price: "35€",
            iconName: "Search"
        },
        {
            id: "packs-personalizados",
            title: "Packs Personnalisés",
            description: "Combinez pension + bilan + bain.",
            price: "Sur mesure",
            iconName: "Bone"
        }
    ],
    it: [
        {
            id: "cuidado-vacaciones",
            title: "Pensione Casalinga (Vacanze)",
            description: "Il mio servizio principale. Il tuo cane sta a casa mia.",
            price: "Da 25€/notte",
            iconName: "Home"
        },
        {
            id: "paseos-diarios",
            title: "Passeggiate Quotidiane",
            description: "Passeggiate lunghe e stimolanti.",
            price: "15€/ora",
            iconName: "Dog"
        },
        {
            id: "servicios-veterinarios",
            title: "Cure Veterinarie",
            description: "Vaccinazioni, sverminazione e cure a domicilio.",
            price: "Consultare",
            iconName: "Syringe"
        },
        {
            id: "higiene-basica",
            title: "Igiene Base",
            description: "Bagni, taglio unghie e pulizia orecchie.",
            price: "Da 30€",
            iconName: "Scissors"
        },
        {
            id: "revision-general",
            title: "Controllo Generale",
            description: "Controllo completo della salute.",
            price: "35€",
            iconName: "Search"
        },
        {
            id: "packs-personalizados",
            title: "Pacchetti Personalizzati",
            description: "Combina pensione + controllo + bagno.",
            price: "Su misura",
            iconName: "Bone"
        }
    ]
};
