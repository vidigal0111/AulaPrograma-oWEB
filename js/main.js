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
/* ======================================= */
/* CÓDIGO DO MENU HAMBÚRGUER */
/* ======================================= */

// 1. Seleciona os elementos
const btnAbrir = document.querySelector('.btn-abrir-menu');
const btnFechar = document.querySelector('.btn-fechar-menu');
const menu = document.querySelector('.menu-principal');

// 2. VERIFICA se eles existem na página
if (btnAbrir && btnFechar && menu) {

    // 3. Ouve o clique no botão de ABRIR
    btnAbrir.addEventListener('click', () => {
        menu.classList.add('menu-aberto');
    });

    // 4. Ouve o clique no botão de FECHAR
    btnFechar.addEventListener('click', () => {
        menu.classList.remove('menu-aberto');
    });
}
/* ======================================= */
/* CÓDIGO DAS MÁSCARAS DE FORMULÁRIO (Entrega I e III) */
/* ======================================= */

// 1. Seleciona os campos que vamos mascarar
const campoCPF = document.querySelector('#cpf');
const campoCEP = document.querySelector('#cep');
const campoTelefone = document.querySelector('#telefone');

// 2. VERIFICA se estamos na página que contém esses campos
if (campoCPF && campoCEP && campoTelefone) {

    // 3. Define as opções de máscara para cada campo
    const cpfMaskOptions = {
        mask: '000.000.000-00'
    };
    
    const cepMaskOptions = {
        mask: '00000-000'
    };
    
    const telMaskOptions = {
        mask: '(00) 00000-0000'
    };

    // 4. "Inicia" a máscara em cada campo
    // A função IMask() vem da biblioteca que importamos!
    const cpfMask = IMask(campoCPF, cpfMaskOptions);
    const cepMask = IMask(campoCEP, cepMaskOptions);
    const telMask = IMask(campoTelefone, telMaskOptions);

} // Fim do 'if' das máscaras

const formularioCadastro = document.querySelector('.cadastro-formulario .formulario-padrao');
const modalObrigado = document.querySelector('#modal-obrigado');
const btnFecharModal = document.querySelector('#modal-fechar');

// 2. VERIFICA se estamos na página de cadastro (que tem esses elementos)
if (formularioCadastro && modalObrigado && btnFecharModal) {

    // 3. Ouve o "envio" (submit) do formulário
    formularioCadastro.addEventListener('submit', function(evento) {
        
        // MUITO IMPORTANTE: Impede o formulário de recarregar a página
        evento.preventDefault(); 
        
        // Mostra o modal adicionando a classe "visivel"
        modalObrigado.classList.add('visivel');
    });

    // 4. Ouve o clique no botão "Fechar" (o X)
    btnFecharModal.addEventListener('click', function() {
        modalObrigado.classList.remove('visivel');
    });

    // 5. (Bônus) Fecha o modal se o usuário clicar fora da caixa (no fundo preto)
    modalObrigado.addEventListener('click', function(evento) {
        // Se o clique foi no próprio overlay (fundo) e não na caixa...
        if (evento.target === modalObrigado) {
            modalObrigado.classList.remove('visivel');
        }
    });

}