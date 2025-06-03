const translations = {
    es: {
        // Navigation
        navHome: "Inicio",
        navAbout: "Sobre Nosotros",
        navBenefits: "Beneficios",
        navGallery: "Galería",
        navContact: "Contacto",
        // Hero
        heroTitle: "Monte Dorado",
        heroSubtitle: "Café Mexicano de Altura. Orgánico. Auténtico.",
        heroCta: "Descubre Nuestro Café",
        // About
        aboutTitle: "Nuestro Origen",
        aboutSubtitle: "Cultivado en las alturas de Chiapas",
        aboutText1: "En las montañas de Chiapas, a 1400 metros sobre el nivel del mar, nace Monte Dorado. Nuestro café es cultivado con pasión y respeto por la tierra, siguiendo prácticas orgánicas que preservan el ecosistema local.",
        aboutText2: "Cada grano es seleccionado a mano, asegurando la más alta calidad y un sabor excepcional que refleja la riqueza de nuestra tierra.",
        // Benefits
        benefitsTitle: "Beneficios Exclusivos",
        benefit1Title: "100% Orgánico",
        benefit1Desc: "Cultivado sin pesticidas ni químicos dañinos.",
        benefit2Title: "Alta Altura",
        benefit2Desc: "Cultivado a 1400 metros para un sabor excepcional.",
        benefit3Title: "Comercio Justo",
        benefit3Desc: "Apoyamos a las comunidades locales de productores.",
        benefit4Title: "Tradición",
        benefit4Desc: "Técnicas ancestrales de cultivo y tostado.",
        // Gallery
        galleryTitle: "Galería",
        // Contact
        contactTitle: "Contáctanos",
        contactSubtitle: "¿Eres distribuidor o tienes alguna pregunta? Escríbenos.",
        nameLabel: "Nombre",
        emailLabel: "Correo Electrónico",
        messageLabel: "Mensaje",
        submitButton: "Enviar Mensaje",
        // Footer
        footerTagline: "Café mexicano de altura, cultivado con pasión en las montañas de Chiapas.",
        contactTitleFooter: "Contacto",
        followTitle: "Síguenos",
        copyright: "© 2025 Monte Dorado. Todos los derechos reservados.",
        // Messages
        formSuccess: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
        formError: "Por favor completa todos los campos requeridos."
    },
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About Us",
        navBenefits: "Benefits",
        navGallery: "Gallery",
        navContact: "Contact",
        // Hero
        heroTitle: "Monte Dorado",
        heroSubtitle: "Mexican High-Altitude Coffee. Organic. Authentic.",
        heroCta: "Discover Our Coffee",
        // About
        aboutTitle: "Our Origin",
        aboutSubtitle: "Grown in the Highlands of Chiapas",
        aboutText1: "In the mountains of Chiapas, 1400 meters above sea level, Monte Dorado is born. Our coffee is grown with passion and respect for the land, following organic practices that preserve the local ecosystem.",
        aboutText2: "Each bean is hand-selected, ensuring the highest quality and exceptional flavor that reflects the richness of our land.",
        // Benefits
        benefitsTitle: "Exclusive Benefits",
        benefit1Title: "100% Organic",
        benefit1Desc: "Grown without harmful pesticides or chemicals.",
        benefit2Title: "High Altitude",
        benefit2Desc: "Grown at 1400 meters for exceptional flavor.",
        benefit3Title: "Fair Trade",
        benefit3Desc: "Supporting local producer communities.",
        benefit4Title: "Tradition",
        benefit4Desc: "Ancient growing and roasting techniques.",
        // Gallery
        galleryTitle: "Gallery",
        // Contact
        contactTitle: "Contact Us",
        contactSubtitle: "Are you a distributor or have questions? Write to us.",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        submitButton: "Send Message",
        // Footer
        footerTagline: "Mexican high-altitude coffee, passionately grown in the mountains of Chiapas.",
        contactTitleFooter: "Contact",
        followTitle: "Follow Us",
        copyright: "© 2025 Monte Dorado. All rights reserved.",
        // Messages
        formSuccess: "Thank you for your message! We'll get back to you soon.",
        formError: "Please fill in all required fields."
    },
    ru: {
        // Navigation
        navHome: "Главная",
        navAbout: "О нас",
        navBenefits: "Преимущества",
        navGallery: "Галерея",
        navContact: "Контакты",
        // Hero
        heroTitle: "Monte Dorado",
        heroSubtitle: "Мексиканский высокогорный кофе. Органический. Аутентичный.",
        heroCta: "Откройте для себя наш кофе",
        // About
        aboutTitle: "Наше происхождение",
        aboutSubtitle: "Выращено в высокогорье Чьяпаса",
        aboutText1: "В горах Чьяпаса, на высоте 1400 метров над уровнем моря, рождается Monte Dorado. Наш кофе выращивается со страстью и уважением к земле, следуя органическим практикам, которые сохраняют местную экосистему.",
        aboutText2: "Каждое зерно отбирается вручную, что гарантирует высочайшее качество и исключительный вкус, отражающий богатство нашей земли.",
        // Benefits
        benefitsTitle: "Эксклюзивные преимущества",
        benefit1Title: "100% Органик",
        benefit1Desc: "Выращено без вредных пестицидов и химикатов.",
        benefit2Title: "Высокогорье",
        benefit2Desc: "Выращено на высоте 1400 метров для исключительного вкуса.",
        benefit3Title: "Справедливая торговля",
        benefit3Desc: "Поддержка местных производителей.",
        benefit4Title: "Традиции",
        benefit4Desc: "Древние техники выращивания и обжарки.",
        // Gallery
        galleryTitle: "Галерея",
        // Contact
        contactTitle: "Свяжитесь с нами",
        contactSubtitle: "Вы дистрибьютор или у вас есть вопросы? Напишите нам.",
        nameLabel: "Имя",
        emailLabel: "Электронная почта",
        messageLabel: "Сообщение",
        submitButton: "Отправить сообщение",
        // Footer
        footerTagline: "Мексиканский высокогорный кофе, страстно выращенный в горах Чьяпаса.",
        contactTitleFooter: "Контакты",
        followTitle: "Подпишитесь на нас",
        copyright: "© 2025 Monte Dorado. Все права защищены.",
        // Messages
        formSuccess: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
        formError: "Пожалуйста, заполните все обязательные поля."
    }
};

// Function to set the language
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                element.alt = translations[lang][key] || element.alt;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update active language button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('text-dorado', 'font-bold');
        } else {
            btn.classList.remove('text-dorado', 'font-bold');
        }
    });
}

// Initialize with saved language or browser language
function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const defaultLanguage = savedLanguage || (['es', 'en', 'ru'].includes(browserLanguage) ? browserLanguage : 'es');
    setLanguage(defaultLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguage);

// Make setLanguage available globally
window.setLanguage = setLanguage;
