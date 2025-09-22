document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los elementos del carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const music = document.getElementById("background-music");
    if (music.paused) {
    music.play();
    }
    // Inicializa el índice de la diapositiva actual
    let currentIndex = 0;
    // Define el intervalo para la navegación automática (en milisegundos)
    const intervalTime = 5000;
    let autoSlideInterval;

    // Función para mostrar una diapositiva específica
    const showSlide = (index) => {
        // Asegura que el índice esté dentro de los límites
        if (index >= carouselItems.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselItems.length - 1;
        } else {
            currentIndex = index;
        }
        
        // Mueve el carrusel para mostrar la diapositiva actual
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Función para la navegación automática a la siguiente diapositiva
    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    // Inicia la navegación automática
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, intervalTime);
    };

    // Detiene la navegación automática
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Manejador del evento para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        stopAutoSlide(); // Detiene el auto-slide al hacer clic
        nextSlide();
        startAutoSlide(); // Reinicia el auto-slide
    });

    // Manejador del evento para el botón "Anterior"
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(currentIndex - 1);
        startAutoSlide();
    });

    // Inicia el carrusel cuando la página se carga
    startAutoSlide();
    

    document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    if (playButton && backgroundMusic) {
        playButton.addEventListener('click', () => {
            backgroundMusic.play();
            playButton.style.display = 'none'; // Oculta el botón después de reproducir
        });
    }
});
});
