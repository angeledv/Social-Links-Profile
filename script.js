'use strict';

document.addEventListener('mousemove', (e) => {
    // Asegurarse de que el cursor esté fuera de la card
    const cardContainer = document.querySelector('.card-container');
    const dustContainer = document.querySelector('.dust-container');

    if (!cardContainer.contains(e.target)) {
        // Crear el "rastro"
        const dust = document.createElement('div');
        dust.classList.add('dust');
        
        // Colocar el "rastro" en la posición del cursor
        dust.style.left = `${e.pageX - 4}px`; // Ajusta el centro del círculo
        dust.style.top = `${e.pageY - 4}px`;
        
        dustContainer.appendChild(dust);
        
        // Eliminar el polvo después de la animación
        setTimeout(() => {
            dust.remove();
        }, 500); // Duración de la animación
    }
});
