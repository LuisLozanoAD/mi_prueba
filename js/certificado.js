document.addEventListener("DOMContentLoaded", function () {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const nombrePareja = urlParams.get("nombrePareja");
    const fechaRelacion = urlParams.get("fechaRelacion"); // Obtener fecha de la URL
    const ciudad = urlParams.get("ciudad");
    const razonAmor = urlParams.get("razonAmor");
    const mejorRecuerdo = urlParams.get("mejorRecuerdo");
    const compromiso = urlParams.get("compromiso");
    const nombreOtorgante = urlParams.get("nombreOtorgante");

    console.log("Fecha obtenida de la URL:", fechaRelacion); // Depuración

    // **Formateo de fecha de "2021-04-09" a "09 de abril de 2021"**
    let fechaRelacionFormateada = "[FECHA]";
    if (fechaRelacion) {
        const partesFecha = fechaRelacion.split("-"); // Separar año, mes y día
        if (partesFecha.length === 3) {
            const año = partesFecha[0];
            const mes = parseInt(partesFecha[1], 10); // Convertir mes a número
            const dia = partesFecha[2];

            const meses = [
                "enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
            ];

            if (mes >= 1 && mes <= 12) { // Validación del mes
                fechaRelacionFormateada = `${dia} de ${meses[mes - 1]} de ${año}`;
            }
        }
    }

    document.getElementById("inicioBtn").addEventListener("click", function () {
        window.location.href = "principal.html"; // Redirige a principal.html
    });
    

    console.log("Fecha formateada:", fechaRelacionFormateada); // Depuración

    // Insertar valores en el certificado
    document.getElementById("nombrePareja").textContent = nombrePareja || "[NOMBRE DE LA PERSONA]";
    document.getElementById("fechaRelacion").textContent = fechaRelacionFormateada; // Se asigna la fecha
    document.getElementById("ciudad").textContent = ciudad || "[CIUDAD]";
    document.getElementById("razonAmor").textContent = razonAmor || "[RAZÓN ESPECIAL]";
    document.getElementById("mejorRecuerdo").textContent = mejorRecuerdo || "[MEJOR RECUERDO]";
    document.getElementById("compromiso").textContent = compromiso || "[MENSAJE ESPECIAL]";
    document.getElementById("nombreOtorgante").textContent = nombreOtorgante || "[TU NOMBRE]";

    // Capturar la fecha de emisión automáticamente
    const fechaHoy = new Date();
    const fechaFormateada = fechaHoy.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    document.getElementById("fechaEmision").textContent = fechaFormateada;

    // Evento para descargar el PDF
    document.getElementById("downloadBtn").addEventListener("click", function () {
        const certificado = document.getElementById("certificado");

        // Ajuste de escala para mejorar la calidad del PDF
        html2canvas(certificado, { scale: 3 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF("l", "mm", "a4");

            // Calcular dimensiones para que se ajuste correctamente en A4
            const imgWidth = 210; // Ancho de una hoja A4 en mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
            
            // Guardar el PDF con un nombre personalizado
            pdf.save(`Certificado_${nombrePareja || "de_Amor"}.pdf`);
        });
    });
});





