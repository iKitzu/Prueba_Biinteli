// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Destinations data
const destinations = [
    {
        city: "Cartagena",
        image: "https://mlqfmr3rpryd.i.optimole.com/cb:JBSP.a525/w:1024/h:640/q:100/ig:avif/https://cartagena-tours.co/wp-content/uploads/2022/11/Capture-decran-2022-11-29-a-16.12.36.png",
        price: "Desde $299.900",
        description: "Ciudad amurallada, playas cristalinas y rica historia colonial."
    },
    {
        city: "San Andrés",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800",
        price: "Desde $499.900",
        description: "Paraíso caribeño con los mejores spots para bucear."
    },
    {
        city: "Santa Marta",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800",
        price: "Desde $249.900",
        description: "Parque Tayrona, Sierra Nevada y playas increíbles."
    },
    {
        city: "Medellín",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/11/18/5fb5dd2932d55.jpeg",
        price: "Desde $199.900",
        description: "Ciudad de la eterna primavera, innovación y cultura paisa."
    },
    {
        city: "Cali",
        image: "https://www.elpais.com.co/resizer/v2/6C5IGSGYIZAL5O6HNBTDPGNFLU.jpg?auth=9d96ef516f8ffa276460cb6948d04158fa6c44a5ac0c50991eef5d312362727c&smart=true&quality=75&width=1280&height=720",
        price: "Desde $189.900",
        description: "Ritmo y salsa en la capital de la salsa, con un ambiente vibrante."
    },
    {
        city: "Barranquilla",
        image: "https://ul.edu.co/uleduco/cache/mod_roksprocket/caba858bd232dc141cde641e6d15b438_350_500.jpg",
        price: "Desde $209.900",
        description: "Cuna del Carnaval, con una mezcla de cultura, música y tradiciones."
    }
];

// Carousel Configuration
const carouselConfig = {
    desktop: { items: 3, gap: 32 },
    tablet: { items: 2, gap: 24 },
    mobile: { items: 1, gap: 16 }
};

const destinationsGrid = document.getElementById('carouselTrack');
const carouselNav = document.getElementById('carouselNav');
let currentIndex = 0;

// Function to get current configuration based on window width
function getCarouselConfig() {
    const width = window.innerWidth;
    if (width > 1024) return carouselConfig.desktop;
    if (width > 768) return carouselConfig.tablet;
    return carouselConfig.mobile;
}

// Populate carousel with destinations
function populateCarousel() {
    destinationsGrid.innerHTML = '';
    destinations.forEach((dest) => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.city}">
            <div class="card-content">
                <div class="card-header">
                    <h3>${dest.city}</h3>
                    <span>${dest.price}</span>
                </div>
                <p class="card-description">${dest.description}</p>
                <button class="card-button">Ver Vuelos</button>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });
}

// Function to update carousel structure
function updateCarousel() {
    const config = getCarouselConfig();
    const totalSlides = Math.ceil(destinations.length / config.items); // Calcula las "páginas" de tres en tres
    
    carouselNav.innerHTML = '';
    
    // Crea botones de navegación según la cantidad de "páginas" que hay
    for (let i = 0; i < totalSlides; i++) {
        const navButton = document.createElement('button');
        navButton.addEventListener('click', () => goToSlide(i));
        carouselNav.appendChild(navButton);
    }
    
    // Actualiza la posición
    goToSlide(Math.floor(currentIndex / config.items));
}

// Function to go to specific slide
function goToSlide(index) {
    const config = getCarouselConfig();
    const track = document.querySelector('.carousel-track');
    const cardWidth = track.querySelector('.destination-card').offsetWidth;
    
    const translation = index * (cardWidth * config.items + config.gap); // Ajusta la posición para que muestre de 3 en 3
    track.style.transform = `translateX(-${translation}px)`;
    
    // Actualiza los botones de navegación
    document.querySelectorAll('.carousel-nav button').forEach((button, idx) => {
        button.classList.toggle('active', idx === index);
    });
}

// Auto-rotation function
function startCarousel() {
    setInterval(() => {
        const config = getCarouselConfig();
        const totalSlides = Math.ceil(destinations.length / config.items);
        const currentSlide = Math.floor(currentIndex / config.items);
        const nextSlide = (currentSlide + 1) % totalSlides;
        goToSlide(nextSlide);
    }, 5000);
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        populateCarousel();
        updateCarousel();
    }, 250);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// Form handling
document.querySelector('.search-button').addEventListener('click', (e) => {
    e.preventDefault();

    // Get selected origin and destination
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    // Redirect to results page with parameters
    window.location.href = `/assets/view/resultados.html?origen=${encodeURIComponent(origen)}&destino=${encodeURIComponent(destino)}`;
});

// Navbar scroll handling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = window.innerWidth <= 768 ? 15 : 150;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize carousel
populateCarousel();
updateCarousel();
startCarousel();    