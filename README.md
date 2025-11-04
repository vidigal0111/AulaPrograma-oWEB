# 🐾 ONG AUmigos do Amanhã - Website Institucional

Este projeto é um website institucional completo para a ONG fictícia "AUmigos do Amanhã", desenvolvido como parte das atividades acadêmicas de Front-End. 

O site foi construído de forma incremental, aplicando conceitos de HTML semântico, CSS avançado (Design System, Flexbox, Grid, Responsividade) e JavaScript para interatividade (SPA, Carrosséis, Modal, Máscaras).

---

### 🚀 **Site no Ar (GitHub Pages)**

Você pode acessar o site completo em funcionamento no seguinte link:

**(https://vidigal0111.github.io/AulaPrograma-oWEB/)**

---

### 📋 **Funcionalidades e Requisitos Cumpridos**

Este projeto foi dividido em 4 entregas principais, abrangendo um stack front-end completo.

#### **Entrega I (HTML5 - A Estrutura)**
* **Estrutura Semântica:** O site possui 4 páginas (`index.html`, `projeto.html`, `cadastro.html`, `doacao.html`) construídas com HTML5 semântico (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`).
* **Formulário Complexo:** A página `cadastro.html` contém um formulário completo com todos os campos exigidos (CPF, CEP, Endereço, etc.), agrupamento lógico (`<fieldset>`, `<legend>`) e validação nativa (`required`).
* **Multimídia:** Uso de imagens (`<img>`), ícones e incorporação de `<iframe>` (Google Maps).

#### **Entrega II (CSS3 Avançado - O Design)**
* **Design System:** Implementação de um sistema de design coeso usando Variáveis CSS (`:root`) para uma paleta de 12+ cores, 5+ tamanhos de fonte hierárquicos e um sistema de espaçamento modular (base 8px).
* **Layouts Modernos:** O layout principal utiliza **CSS Grid** (`grid-template-areas`) para a estrutura geral, enquanto componentes internos (cabeçalho, rodapé, cards, formulários) usam **Flexbox** para alinhamento.
* **Grid 12 Colunas:** Um sistema de 12 colunas (`.grid-12`, `.col-span-X`) foi desenvolvido e aplicado.
* **Responsividade (5 Breakpoints):** O CSS utiliza 5 breakpoints (`1200px`, `992px`, `768px`, `576px`) para garantir uma adaptação fluida em todos os tamanhos de tela.
* **Navegação Sofisticada:**
    * **Menu Hambúrguer:** O menu é 100% responsivo, transformando-se em um menu *slide-in* em telas pequenas (`<= 768px`).
    * **Dropdown:** O menu desktop possui um submenu *dropdown* funcional no item "Como Ajudar".
* **Componentes Avançados:**
    * **Cards:** Múltiplos sistemas de cards responsivos (Serviços, Valores, Finais Felizes).
    * **Badges/Tags:** Tags de informação (ex: "Macho", "Filhote") sobrepostas às imagens no carrossel de adoção.
    * **Formulários Estilizados:** Formulários com design moderno, bordas arredondadas e **validação visual** (`:invalid` e `:valid`).
    * **Modal:** Componente de feedback (popup de "Sucesso!") ativado via JavaScript após o envio do formulário.
    * **Botões:** Botões com estados visuais completos (`:hover`, `:focus`, `:active`).

#### **Entrega III (JavaScript - A Interatividade)**
* **Single Page Application (SPA):** O site funciona como uma SPA básica. O JavaScript intercepta os cliques nos links, busca o conteúdo da nova página (template) e o injeta no `<main>` sem recarregar a página, usando `fetch` e a History API (`history.pushState`).
* **Máscaras de Input:** Uso da biblioteca `IMask.js` para aplicar máscaras de formatação (CPF, CEP, Telefone) no formulário, garantindo a consistência dos dados (cumprindo requisitos das Entregas I e III).
* **Manipulação do DOM:** O JavaScript controla dinamicamente os dois carrosséis (Home e Curiosidades), o menu hambúrguer e a exibição do modal, tudo de forma modular e segura, rodando apenas os scripts necessários para cada página carregada.

#### **Entrega IV (Profissionalização e Acessibilidade)**
* **Acessibilidade (WCAG):**
    * **Contraste de Cor:** A paleta de cores foi ajustada para garantir um contraste mínimo de 4.5:1 em todos os componentes textuais, como o cabeçalho.
    * **Navegação por Teclado:** Todos os elementos interativos (links, botões, campos de formulário) possuem estados `:focus` visíveis.
    * **Modo Escuro:** Foi implementado um *toggle* de Modo Escuro (`dark-mode`) que utiliza variáveis CSS para inverter a paleta de cores do site e salva a preferência do usuário no `localStorage`.
    * **Semântica:** O uso correto de HTML semântico e atributos `alt` garante o suporte básico a leitores de tela.
* **Otimização:**
    * **Compressão de Imagens:** Todas as imagens do projeto (`.jpg`, `.png`) foram otimizadas usando ferramentas de compressão para reduzir o tempo de carregamento.
* **Controle de Versão e Documentação:**
    * **README:** O projeto está documentado neste arquivo.
    * **Repositório:** O código está versionado em um repositório público no GitHub.

---

### 🛠️ **Tecnologias Utilizadas**

* **HTML5:** Estrutura e Semântica.
* **CSS3:** Design System (Variáveis), CSS Grid, Flexbox, Media Queries (5 Breakpoints), Animações e Transições.
* **JavaScript (ES6+):** Manipulação do DOM, `fetch` (SPA), History API, `localStorage` (Modo Escuro), Event Listeners.
* **IMask.js:** Biblioteca externa para as máscaras de formulário.
* **GitHub Pages:** Hospedagem e deploy do site.

---

### 👨‍💻 **Autor**

* **[Thiago Thomaz Silva Vidigal]**
