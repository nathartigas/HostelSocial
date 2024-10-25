const translations = {
    pt: {
        "history-link": "História",
        "day-trips-link": "Day Trips",
        "gallery-link": "Galeria",
        "location-link": "Localização",
        "header-title": "Hostel Social",
        "header-subtitle": "Hostel é melhor que Tinder!",
        "header-button": "Descubra mais",
        "about-title": "Nossa História",
        "about-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "day-trips-title": "Day Trips",
        "trip-1-title": "Ilha Do Mel",
        "trip-1-text": "Para quem não conhece a Ilha do Mel é um paraíso...",
        "trip-2-title": "Morretes",
        "trip-2-text": "Considerado um dos 10 passeios de trem mais lindos do mundo...",
        "trip-3-title": "Balneário Camboriú",
        "trip-3-text": "Com certeza você já ouviu falar do paraíso de Camboriú...",
        "gallery-title": "Galeria",
        "gallery-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "location-title": "Localização",
        "location-text": "Avenida Central, 123 - Centro - Balneário Camboriú"
    },
    en: {
        "history-link": "History",
        "day-trips-link": "Day Trips",
        "gallery-link": "Gallery",
        "location-link": "Location",
        "header-title": "Social Hostel",
        "header-subtitle": "Hostel is better than Tinder!",
        "header-button": "Find out more",
        "about-title": "Our History",
        "about-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "day-trips-title": "Day Trips",
        "trip-1-title": "Ilha Do Mel",
        "trip-1-text": "If you don't know Ilha do Mel, it's a paradise...",
        "trip-2-title": "Morretes",
        "trip-2-text": "Considered one of the top 10 most beautiful train rides...",
        "trip-3-title": "Balneário Camboriú",
        "trip-3-text": "You probably have heard about Camboriú's paradise...",
        "gallery-title": "Gallery",
        "gallery-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "location-title": "Location",
        "location-text": "Central Avenue, 123 - Downtown - Balneário Camboriú"
    },
    es: {
        "history-link": "Historia",
        "day-trips-link": "Day Trips",
        "gallery-link": "Galería",
        "location-link": "Ubicación",
        "header-title": "Hostel Social",
        "header-subtitle": "¡El hostel es mejor que Tinder!",
        "header-button": "Descubre más",
        "about-title": "Nuestra Historia",
        "about-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "day-trips-title": "Day Trips",
        "trip-1-title": "Ilha Do Mel",
        "trip-1-text": "Para quienes no conocen, Ilha do Mel es un paraíso...",
        "trip-2-title": "Morretes",
        "trip-2-text": "Considerado uno de los 10 paseos en tren más hermosos...",
        "trip-3-title": "Balneario Camboriú",
        "trip-3-text": "Seguramente has oído hablar del paraíso de Camboriú...",
        "gallery-title": "Galería",
        "gallery-text": "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "location-title": "Ubicación",
        "location-text": "Avenida Central, 123 - Centro - Balneario Camboriú"
    }
};

const switcher = document.getElementById('language-switcher');
switcher.addEventListener('change', function () {
    const selectedLang = switcher.value;
    const elements = document.querySelectorAll('[id]');

    elements.forEach(element => {
        const id = element.id;
        if (translations[selectedLang][id]) {
            element.textContent = translations[selectedLang][id];
        }
    });
});

//teste lorenzo git