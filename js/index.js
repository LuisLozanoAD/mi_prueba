document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById("btn-random");
    const audio = document.getElementById("background-music");

    // Hace que el botón "NO" se mueva aleatoriamente
    btnNo.addEventListener("mouseover", function () {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

        btnNo.style.position = "absolute";
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    });

    // Para iniciar la música en algunos navegadores que requieren interacción del usuario
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});

