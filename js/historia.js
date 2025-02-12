document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
        display: none; 
        position: fixed; 
        z-index: 1000; 
        left: 0; 
        top: 0; 
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgba(0, 0, 0, 0.8); 
        align-items: center; 
        justify-content: center;
    `;

    const modalImg = document.createElement('img');
    modalImg.id = 'modalImage';
    modalImg.style.cssText = `
        max-width: 90%; 
        max-height: 90%; 
        border-radius: 10px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute; 
        top: 20px; 
        right: 30px; 
        font-size: 40px; 
        font-weight: bold; 
        color: white; 
        cursor: pointer;
    `;

    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);

    document.querySelectorAll('.expandable').forEach(img => {
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.3s ease';

        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            setTimeout(() => {
                modalImg.style.transform = 'scale(1)';
            }, 10);
        });

        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.style.transform = 'scale(0.8)';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.style.transform = 'scale(0.8)';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            modalImg.style.transform = 'scale(0.8)';
        }
    });
});



