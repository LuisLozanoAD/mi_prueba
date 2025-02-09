document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("countdownButton");

    // Animación de entrada para el contenido
    const container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "translateY(-20px)";

    setTimeout(() => {
        container.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 500);

    // Efecto en el botón al pasar el mouse
    button.addEventListener("mouseover", function () {
        button.style.boxShadow = "0px 4px 15px rgba(255, 64, 129, 0.7)";
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", function () {
        button.style.boxShadow = "none";
        button.style.transform = "scale(1)";
    });

    // Música de fondo: control de volumen
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume = 0.3;  // Ajusta el volumen para que no sobrepase el video

    const video = document.querySelector("video");

    // Sincronización del video con el audio
    video.addEventListener("play", () => {
        backgroundMusic.currentTime = video.currentTime;  // Sincroniza el tiempo del audio con el video
        backgroundMusic.play();
    });

    video.addEventListener("pause", () => {
        backgroundMusic.pause();
    });

    video.addEventListener("seeked", () => {
        backgroundMusic.currentTime = video.currentTime;  // Ajusta el tiempo del audio si el usuario adelanta o retrocede el video
    });

    video.addEventListener("ended", () => {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;  // Reinicia el audio cuando el video termina
    });

    // Mensaje en consola
    console.log("💖 Página de aniversario cargada con éxito 💖");
});

