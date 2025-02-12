document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombrePareja = document.getElementById("nombrePareja").value;
    const nombreOtorgante = document.getElementById("nombreOtorgante").value;
    const fechaRelacion = document.getElementById("fechaRelacion").value;
    const ciudad = document.getElementById("ciudad").value;
    const razonAmor = document.getElementById("razonAmor").value;
    const mejorRecuerdo = document.getElementById("mejorRecuerdo").value;
    const compromiso = document.getElementById("compromiso").value;
    
    const urlParams = new URLSearchParams({
        nombrePareja, nombreOtorgante, fechaRelacion, ciudad, razonAmor, mejorRecuerdo, compromiso
    });
    
    window.location.href = "certificado.html?" + urlParams.toString();
});

