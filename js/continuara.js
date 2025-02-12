let currentPage = 1;
const totalPages = 8;

// Función para mostrar la página actual
function showPage(page) {
    const pages = document.querySelectorAll('.page');
    const finalMessage = document.querySelector('.final-message');

    // Ocultar todas las páginas
    pages.forEach(p => p.classList.remove('active'));

    if (page > totalPages) {
        document.querySelector('.book').classList.add('hidden');
        finalMessage.classList.add('active');
    } else {
        document.querySelector('.book').classList.remove('hidden');
        finalMessage.classList.remove('active');
        pages[page - 1].classList.add('active');
    }
}

// Ir a la siguiente página
function nextPage() {
    if (currentPage <= totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Ir a la página anterior
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }

// Función para regresar a la primera página desde el mensaje final
function goToFirstPage() {
    currentPage = 1;
    showPage(currentPage);
}

}

// Mostrar la primera página al cargar
document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});
