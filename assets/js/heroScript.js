document.addEventListener("DOMContentLoaded", () => {
    // Array de rutas de las imágenes de fondo
    const images = [
        '/assets/img/fondo.jpg',
        '/assets/img/pexels-asadphoto-1268855.jpg',
        '/assets/img/pexels-freestockpro-1004584.jpg',
    ];

    let currentIndex = 0;
    const heroElement = document.querySelector('.hero');

    // Función para cambiar la imagen de fondo
    function changeBackgroundImage() {
        heroElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice, reinicia si es el último
    }

    // Cambia la imagen cada 3 segundos
    setInterval(changeBackgroundImage, 3000);
});
