export type Language = 'es' | 'en';

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
            greeting: "¡Hola! Soy María (Nombre ficticio), veterinaria colegiada con más de 5 años de experiencia en clínica de pequeños animales.",
            description: "Mi pasión es garantizar la salud y felicidad de tus mascotas. Entiendo que dejar a tu perro cuando te vas de viaje puede ser estresante, por eso ofrezco un hogar, no una jaula. En mi casa, tu perro es uno más de la familia.",
            features: [
                "Veterinaria Colegiada",
                "Atención 24h",
                "Sin Jaulas",
                "Experiencia en Urgencias",
                "Seguro de Responsabilidad",
                "Cariño Infinito"
            ]
        },
        contact: {
            title: "Contacta Conmigo",
            subtitle: "¿Tienes dudas sobre los servicios o quieres reservar fechas? Escríbeme y te contestaré lo antes posible.",
            infoTitle: "Información de Contacto",
            phoneTitle: "Teléfono / WhatsApp",
            phoneHours: "Lunes a Viernes, 17h - 24h. Sábados y Domingos 24h",
            emailTitle: "Email",
            serviceAreaTitle: "Zona de Servicio",
            serviceAreaText: "Servicio a domicilio disponible en San Luis de Sabinillas y alrededores. (Consultar zonas específicas)",
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
        },
        footer: {
            brandTagline: "Cuidado de mascotas familiar y cercano. Trato directo y sin intermediarios.",
            sectionsTitle: "Secciones",
            contactTitle: "Contacto",
            socialTitle: "Redes Sociales",
            copyright: "Hecho con ❤️ para cuidar de tus peludos.",
            address: "San Luis de Sabinillas y alrededores"
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
            greeting: "Hi! I'm María (Fictional Name), a registered veterinarian with over 5 years of experience in small animal clinics.",
            description: "My passion is ensuring the health and happiness of your pets. I understand that leaving your dog when you travel can be stressful, which is why I offer a home, not a cage. In my house, your dog is part of the family.",
            features: [
                "Registered Veterinarian",
                "24h Attention",
                "No Cages",
                "Emergency Experience",
                "Liability Insurance",
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
            serviceAreaText: "Home service available in San Luis de Sabinillas and surroundings. (Check specific areas)",
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
        },
        footer: {
            brandTagline: "Familiar and close pet care. Direct treatment and without intermediaries.",
            sectionsTitle: "Sections",
            contactTitle: "Contact",
            socialTitle: "Social Media",
            copyright: "Made with ❤️ to take care of your furry friends.",
            address: "San Luis de Sabinillas and surroundings"
        },
        calendar: {
            months: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            daysOfWeek: ["M", "T", "W", "T", "F", "S", "S"]
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
            description: "Paseos largos y estimulantes para mantener a tu perro activo.",
            price: "15€/hora",
            iconName: "Dog"
        },
        {
            id: "servicios-veterinarios",
            title: "Cuidados Veterinarios",
            description: "Vacunas, desparasitación y curas a domicilio.",
            price: "Consultar",
            iconName: "Syringe"
        },
        {
            id: "higiene-basica",
            title: "Higiene Básica",
            description: "Baños, corte de uñas y limpieza de oídos.",
            price: "Desde 30€",
            iconName: "Scissors"
        },
        {
            id: "revision-general",
            title: "Revisión General",
            description: "Chequeo completo de salud para prevenir problemas futuros.",
            price: "35€",
            iconName: "Search"
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
    ]
};
