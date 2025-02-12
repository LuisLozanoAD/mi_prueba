

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Usuario y contraseña correctos
    const USERNAME_CORRECTO = "carlabartolo";
    const PASSWORD_CORRECTO = "090421";

    if (username === USERNAME_CORRECTO && password === PASSWORD_CORRECTO) {
        window.location.href = "terms.html"; // Redirige a la página de formulario
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
