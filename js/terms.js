document.addEventListener("DOMContentLoaded", function() {
    let acceptCheckbox = document.getElementById("acceptTerms");
    let continueButton = document.getElementById("continueButton");

    acceptCheckbox.addEventListener("change", function() {
        continueButton.disabled = !acceptCheckbox.checked;
    });

    continueButton.addEventListener("click", function(event) {
        if (!acceptCheckbox.checked) {
            event.preventDefault(); // Evita cualquier acción si no está aceptado
            alert("Debes aceptar los términos antes de continuar. ❤️");
            return;
        }

        alert("¡Contrato aceptado! Ahora puedes ver nuestra historia 💕");
        window.location.href = "principal.html";
    });
});
