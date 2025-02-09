// Seleccionamos los elementos necesarios
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0; // Empezamos en el primer slide
const totalSlides = dots.length;

// Función para mover el slider
function moverSlide(slideIndex) {
    // Validamos el índice para que siempre esté dentro del rango
    currentSlide = (slideIndex + totalSlides) % totalSlides;

    // Mover el slider horizontalmente
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;

    // Actualizar el estado activo de los puntos
    actualizarDots();
}

// Función para actualizar los puntos activos
function actualizarDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Event listeners para las flechas
prevButton.addEventListener('click', () => moverSlide(currentSlide - 1));
nextButton.addEventListener('click', () => moverSlide(currentSlide + 1));

// Event listeners para los puntos de navegación
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moverSlide(index));
});

// Inicializamos el primer slide como activo
moverSlide(0);

// Opcional: Cambiar automáticamente cada 5 segundos
// Descomenta para activar el slider automático
/*
setInterval(() => {
    moverSlide(currentSlide + 1);
}, 5000);
*/
