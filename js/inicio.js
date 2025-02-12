document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const headerTyping = document.getElementById('header-typing');
    const inputArea = document.querySelector('.input-area');
    const chatScreen = document.getElementById('chatScreen');
    const poemScreen = document.getElementById('poemScreen');
    const toPoemBtn = document.getElementById('toPoemBtn');
    const toChatBtn = document.getElementById('toChatBtn');
    const homeBtn = document.getElementById('homeBtn');
    
    let index = 0;
  
    // Mostrar mensajes del chat
    function showNextMessage() {
      if (index < messages.length) {
        messages[index].classList.add('visible');
        index++;
        setTimeout(showNextMessage, 1500);
      } else {
        setTimeout(() => {
          headerTyping.style.display = 'none';
          inputArea.style.display = 'block';
        }, 2000);
      }
    }
  
    // Iniciar mostrando el chat
    chatScreen.style.display = 'flex';
    poemScreen.style.display = 'none';
    showNextMessage();
  
    // Navegación al poema
    toPoemBtn.addEventListener('click', () => {
      chatScreen.style.display = 'none';
      poemScreen.style.display = 'flex';
    });
  
    // Volver al chat
    toChatBtn.addEventListener('click', () => {
      poemScreen.style.display = 'none';
      chatScreen.style.display = 'flex';
    });
  
    // Botón de inicio redirige a la página principal
    homeBtn.addEventListener('click', () => {
      window.location.href = 'principal.html'; // Cambia 'index.html' por la página principal si es necesario
    });
  });
  

  