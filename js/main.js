/* ======================================= */
/* JAVASCRIPT GERAL DO SITE */
/* ======================================= */

// --- CÓDIGO DO CARROSSEL DA PÁGINA PRINCIPAL (index.html) ---
const trilhoPrincipal = document.querySelector('.carrossel-trilho');
const itemsPrincipal = document.querySelectorAll('.carrossel-item');
const btnNextPrincipal = document.querySelector('.btn-next');
const btnPrevPrincipal = document.querySelector('.btn-prev');

if (trilhoPrincipal && itemsPrincipal.length > 0 && btnNextPrincipal && btnPrevPrincipal) {
    let indexPrincipal = 0;
    const totalItemsPrincipal = itemsPrincipal.length;

    function moverTrilhoPrincipal() {
        const itemWidth = itemsPrincipal[0].clientWidth;
        trilhoPrincipal.style.transform = `translateX(-${itemWidth * indexPrincipal}px)`;
    }
    btnNextPrincipal.addEventListener('click', () => {
        if (indexPrincipal < totalItemsPrincipal - 1) {
            indexPrincipal++;
        } else {
            indexPrincipal = 0;
        }
        moverTrilhoPrincipal();
    });
    btnPrevPrincipal.addEventListener('click', () => {
        if (indexPrincipal > 0) {
            indexPrincipal--;
        } else {
            indexPrincipal = totalItemsPrincipal - 1;
        }
        moverTrilhoPrincipal();
    });
}

// --- NOVO CÓDIGO DO CARROSSEL DE CURIOSIDADES (projeto.html) ---
const trilhoCuriosidades = document.querySelector('.curiosidades-trilho');
const itemsCuriosidades = document.querySelectorAll('.curiosidades-item');
const btnNextCuriosidades = document.querySelector('.btn-cur-next');
const btnPrevCuriosidades = document.querySelector('.btn-cur-prev');

if (trilhoCuriosidades && itemsCuriosidades.length > 0 && btnNextCuriosidades && btnPrevCuriosidades) {
    let indexCuriosidades = 0;
    const totalItemsCuriosidades = itemsCuriosidades.length;

    function moverTrilhoCuriosidades() {
        const itemWidth = itemsCuriosidades[0].clientWidth; 
        trilhoCuriosidades.style.transform = `translateX(-${itemWidth * indexCuriosidades}px)`;
    }
    btnNextCuriosidades.addEventListener('click', () => {
        if (indexCuriosidades < totalItemsCuriosidades - 1) {
            indexCuriosidades++;
        } else {
            indexCuriosidades = 0;
        }
        moverTrilhoCuriosidades();
    });
    btnPrevCuriosidades.addEventListener('click', () => {
        if (indexCuriosidades > 0) {
            indexCuriosidades--;
        } else {
            indexCuriosidades = totalItemsCuriosidades - 1;
        }
        moverTrilhoCuriosidades();
    });
}