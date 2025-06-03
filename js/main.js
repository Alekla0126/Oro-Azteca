document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('shadow-lg');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenuButton && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'p-4', 'shadow-lg');
            }
        }
    });

    // Language switcher functionality
    const languageButtons = document.querySelectorAll('.language-switcher button');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Check for saved language preference or use browser language
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const defaultLanguage = savedLanguage || (['es', 'en', 'ru'].includes(browserLanguage) ? browserLanguage : 'es');
    
    // Set initial language
    setLanguage(defaultLanguage);

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check in case elements are already in view
    animateOnScroll();

    // Form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simple form validation
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();
            
            if (name && email && message) {
                // Here you would typically send the form data to a server
                alert(translations[document.documentElement.lang].formSuccess);
                this.reset();
            } else {
                alert(translations[document.documentElement.lang].formError);
            }
        });
    }

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a[href^="#"]');

    function setActiveNavItem() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('text-dorado', 'font-bold');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('text-dorado', 'font-bold');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);
    setActiveNavItem(); // Run once on load
});

// Language translations
const translations = {
    es: {
        formSuccess: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
        formError: 'Por favor, completa todos los campos del formulario.'
    },
    en: {
        formSuccess: 'Thank you for your message! We will get back to you soon.',
        formError: 'Please fill out all form fields.'
    },
    ru: {
        formSuccess: 'Спасибо за ваше сообщение! Мы скоро свяжемся с вами.',
        formError: 'Пожалуйста, заполните все поля формы.'
    }
};

// Set language function
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    // Update language buttons
    const languageButtons = document.querySelectorAll('.language-switcher button');
    languageButtons.forEach(button => {
        button.classList.remove('text-dorado', 'font-bold');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('text-dorado', 'font-bold');
        }
    });
}
