/* ======================================= */
/* JAVASCRIPT GERAL DO SITE (VERSÃO SPA) */
/* ======================================= */

// --- FUNÇÕES "EMPACATADAS" (Sistema de Template) ---
// Tivemos que "empacotar" todo o nosso código antigo em funções,
// para que o roteador possa chamá-las na hora certa.

// Ativa o Menu Hambúrguer (Global)
function initMenuHamburguer() {
    const btnAbrir = document.querySelector('.btn-abrir-menu');
    const btnFechar = document.querySelector('.btn-fechar-menu');
    const menu = document.querySelector('.menu-principal');

    if (btnAbrir && btnFechar && menu) {
        // Limpa ouvintes antigos (para evitar duplicatas)
        btnAbrir.onclick = () => menu.classList.add('menu-aberto');
        btnFechar.onclick = () => menu.classList.remove('menu-aberto');
    }
}

// Ativa o Carrossel da Home (só na index.html)
function initCarrosselHome() {
    const trilho = document.querySelector('.carrossel-trilho');
    const items = document.querySelectorAll('.carrossel-item');
    const btnNext = document.querySelector('.btn-next');
    const btnPrev = document.querySelector('.btn-prev');

    if (!trilho || !items.length || !btnNext || !btnPrev) return; 

    let index = 0;
    const totalItems = items.length;

    function moverTrilho() {
        const itemWidth = items[0].clientWidth;
        trilho.style.transform = `translateX(-${itemWidth * index}px)`;
    }
    btnNext.onclick = () => {
        index = (index < totalItems - 1) ? index + 1 : 0;
        moverTrilho();
    };
    btnPrev.onclick = () => {
        index = (index > 0) ? index - 1 : totalItems - 1;
        moverTrilho();
    };
}

// Ativa o Carrossel de Curiosidades (só na projeto.html)
function initCarrosselCuriosidades() {
    const trilho = document.querySelector('.curiosidades-trilho');
    const items = document.querySelectorAll('.curiosidades-item');
    const btnNext = document.querySelector('.btn-cur-next');
    const btnPrev = document.querySelector('.btn-cur-prev');

    if (!trilho || !items.length || !btnNext || !btnPrev) return;

    let index = 0;
    const totalItems = items.length;

    function moverTrilho() {
        const itemWidth = items[0].clientWidth;
        trilho.style.transform = `translateX(-${itemWidth * index}px)`;
    }
    btnNext.onclick = () => {
        index = (index < totalItems - 1) ? index + 1 : 0;
        moverTrilho();
    };
    btnPrev.onclick = () => {
        index = (index > 0) ? index - 1 : totalItems - 1;
        moverTrilho();
    };
}

// Ativa as Máscaras de Input (só na cadastro.html)
function initMascarasFormulario() {
    if (typeof IMask === 'undefined') return; 

    const campoCPF = document.querySelector('#cpf');
    const campoCEP = document.querySelector('#cep');
    const campoTelefone = document.querySelector('#telefone');

    if (campoCPF) IMask(campoCPF, { mask: '000.000.000-00' });
    if (campoCEP) IMask(campoCEP, { mask: '00000-000' });
    if (campoTelefone) IMask(campoTelefone, { mask: '(00) 00000-0000' });
}

// Ativa o Modal de Feedback (só na cadastro.html)
function initModalFeedback() {
    const formulario = document.querySelector('.cadastro-formulario .formulario-padrao');
    const modal = document.querySelector('#modal-obrigado');
    const btnFechar = document.querySelector('#modal-fechar');

    if (!formulario || !modal || !btnFechar) return;

    formulario.onsubmit = function(e) { // Usando onsubmit para garantir um único ouvinte
        e.preventDefault();
        modal.classList.add('visivel');
    };
    btnFechar.onclick = () => modal.classList.remove('visivel');
    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('visivel');
    };
}


// --- O "ROTEADOR" SPA e SISTEMA DE TEMPLATE (Entrega III) ---

// 1. Onde o novo conteúdo será injetado
const contentContainer = document.querySelector('main');

// 2. Mapeamento: qual página chama qual função JS?
const pageScripts = {
    'index.html': initCarrosselHome,
    'projeto.html': initCarrosselCuriosidades,
    'cadastro.html': () => {
        initMascarasFormulario();
        initModalFeedback();
    },
    'doacao.html': null // Nenhuma função JS específica para a pág de doação
};

// 3. Função que carrega o conteúdo da página (O Template Engine)
async function loadPage(url) {
    try {
        // Mostra um "loading" (opcional, mas bom)
        contentContainer.innerHTML = '<h2>Carregando...</h2>';

        const response = await fetch(url);
        if (!response.ok) throw new Error('Página não encontrada');
        
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Pega o conteúdo do <main> do arquivo buscado
        const newMainContent = doc.querySelector('main').innerHTML;
        
        // Injeta o novo conteúdo
        contentContainer.innerHTML = newMainContent;
        
        // Pega o nome do arquivo (ex: "index.html")
        const pageName = url.split('/').pop() || 'index.html';
        
        // Roda o script específico para essa página
        if (pageScripts[pageName]) {
            pageScripts[pageName]();
        }
        
    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        contentContainer.innerHTML = '<h2>Ops! Página não encontrada. (Erro 404)</h2>';
    }
}

// 4. Função que intercepta os cliques nos links (O Roteador SPA)
function initSPARouting() {
    // Pega TODOS os links internos (header, footer, dropdowns, etc.)
    const links = document.querySelectorAll('a[href^="/"], a[href^="."]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const url = link.getAttribute('href');
            
            // Ignora links externos (http), âncoras (#) ou JS (javascript:void)
            if (url.startsWith('http') || url.startsWith('#') || url.startsWith('javascript')) {
                return;
            }

            e.preventDefault(); // Impede o recarregamento!
            
            // Se o menu mobile estiver aberto, feche-o
            document.querySelector('.menu-principal')?.classList.remove('menu-aberto');
            
            // Atualiza a URL na barra do navegador
            history.pushState(null, '', url);
            
            // Carrega o novo conteúdo
            loadPage(url);
        });
    });

    // 5. "Ouve" o botão "Voltar" do navegador
    window.addEventListener('popstate', () => {
        loadPage(location.pathname);
    });
}


// --- INICIALIZAÇÃO (Código que RODA quando o site abre) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ativa o Menu Hambúrguer (que é global)
    initMenuHamburguer();

    // 2. Ativa o Roteador SPA (que é global)
    initSPARouting();

    // 3. Carrega os scripts da página inicial (Home) pela primeira vez
    const initialPage = location.pathname.split('/').pop() || 'index.html';
    if (pageScripts[initialPage]) {
        pageScripts[initialPage]();
    }
});