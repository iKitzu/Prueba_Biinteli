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
        description: "Parque Tayrona, Sierra Nevada y playas increibles."
    },
    {
        city: "Medellín",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/11/18/5fb5dd2932d55.jpeg",
        price: "Desde $199.900",
        description: "Ciudad de la eterna primavera, innovación y cultura paisa."
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
        description: "Parque Tayrona, Sierra Nevada y playas increibles."
    },
    {
        city: "Medellín",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/11/18/5fb5dd2932d55.jpeg",
        price: "Desde $199.900",
        description: "Ciudad de la eterna primavera, innovación y cultura paisa."
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
        description: "Parque Tayrona, Sierra Nevada y playas increibles."
    },
    {
        city: "Medellín",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/11/18/5fb5dd2932d55.jpeg",
        price: "Desde $199.900",
        description: "Ciudad de la eterna primavera, innovación y cultura paisa."
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
        description: "Parque Tayrona, Sierra Nevada y playas increibles."
    },
    {
        city: "Medellín",
        image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/11/18/5fb5dd2932d55.jpeg",
        price: "Desde $199.900",
        description: "Ciudad de la eterna primavera, innovación y cultura paisa."
    }
];

const destinationsGrid = document.getElementById('carouselTrack');
const carouselNav = document.getElementById('carouselNav');
const itemsPerSlide = 3; // Mostrar 3 tarjetas a la vez
let currentIndex = 0;

// Populate carousel with destinations
destinations.forEach((dest, index) => {
    // Card
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

    // Navigation Button
    if (index % itemsPerSlide === 0) {
        const navButton = document.createElement('button');
        navButton.addEventListener('click', () => goToSlide(index / itemsPerSlide));
        carouselNav.appendChild(navButton);
    }
});

// Update active button
function updateActiveButton() {
    carouselNav.querySelectorAll('button').forEach((button, idx) => {
        button.classList.toggle('active', idx === Math.floor(currentIndex / itemsPerSlide));
    });
}

// Move to a specific slide
function goToSlide(index) {
    currentIndex = index * itemsPerSlide;
    destinationsGrid.style.transform = `translateX(-${index * 100}%)`;
    updateActiveButton();
}

// Auto-rotate function
function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + itemsPerSlide) % destinations.length;
        goToSlide(Math.floor(currentIndex / itemsPerSlide));
    }, 5000); // Rotate every 5 seconds
}

updateActiveButton();
startCarousel();





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
    alert('Aun Seguimos buscando vuelos 😥, al parecer salieron volando');
});