document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const birthdayButton = document.getElementById("birthday-button");

    // Fecha objetivo (ejemplo: 14 de febrero)
    const targetDate = new Date("2025-02-14T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 ¡Llegó el gran día! 🎉";
            birthdayButton.style.display = "inline-block";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    birthdayButton.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
