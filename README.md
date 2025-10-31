# 🐾 ONG AUmigos do Amanhã - Website Institucional

Este projeto é um website institucional completo e responsivo para a ONG fictícia "AUmigos do Amanhã", desenvolvido como parte das atividades acadêmicas de Front-End. O site é 100% responsivo, adaptando-se de desktops a dispositivos móveis.

---

### 🚀 **Site no Ar (GitHub Pages)**

Você pode acessar o site completo em funcionamento no seguinte link:

**(https://vidigal0111.github.io/AulaPrograma-oWEB/)**

---

### 📋 **Requisitos Cumpridos (Entregas I, II e III)**

Este projeto foi construído de forma incremental, cumprindo os seguintes requisitos técnicos:

#### **Entrega I (HTML5)**
* **Estrutura Semântica:** O site possui 4 páginas (`index.html`, `projeto.html`, `cadastro.html`, `doacao.html`) construídas com HTML5 semântico (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`).
* **Formulário Complexo:** A página `cadastro.html` contém um formulário completo com agrupamento (`<fieldset>`, `<legend>`) e validação nativa (`required`, `type="email"`, etc.).
* **Multimídia:** Uso de imagens (`<img>`), ícones e incorporação de `<iframe>` (Google Maps).

#### **Entrega II (CSS3 Avançado)**
* **Design System:** Implementação de um sistema de design coeso usando Variáveis CSS (`:root`) para cores (12+), tipografia (5+) e espaçamento modular (base 8px).
* **Layouts Modernos:** O layout principal utiliza **CSS Grid** (`grid-template-areas`) e os componentes internos (cabeçalho, rodapé, cards, formulários) usam **Flexbox**.
* **Grid 12 Colunas:** Um sistema de 12 colunas (`.grid-12`, `.col-span-X`) foi desenvolvido e aplicado.
* **Responsividade (5 Breakpoints):** O CSS utiliza 5 breakpoints (`1200px`, `992px`, `768px`, `576px`) para garantir uma adaptação fluida em todos os tamanhos de tela.
* **Menu Hambúrguer & Dropdown:** O menu é totalmente responsivo, transformando-se em um menu hambúrguer *slide-in* em telas pequenas (`<= 768px`) e apresentando um submenu *dropdown* no desktop.
* **Componentes Avançados:**
    * **Cards:** Múltiplos sistemas de cards responsivos (Serviços, Valores).
    * **Badges/Tags:** Tags de informação sobrepostas às imagens no carrossel de adoção.
    * **Formulários Estilizados:** Formulários com design moderno, bordas arredondadas e validação visual (`:invalid`).
    * **Modal:** Componente de feedback (popup de "Sucesso!") ativado após o envio do formulário.
    * **Botões:** Botões com estados visuais completos (`:hover`, `:focus`, `:active`).

#### **Entrega III (JavaScript)**
* **Máscaras de Input:** Uso da biblioteca `IMask.js` para aplicar máscaras de formatação (CPF, CEP, Telefone) no formulário, garantindo a consistência dos dados.
* **Manipulação do DOM:** O JavaScript controla os dois carrosséis, o menu hambúrguer e a exibição do modal de feedback, tudo de forma modular e segura (verificando se os elementos existem na página antes de executar).

---

### 🛠️ **Tecnologias Utilizadas**

* **HTML5:** Para a estrutura e semântica.
* **CSS3:** Para todo o Design System, layouts (Grid/Flexbox) e responsividade (Media Queries).
* **JavaScript (ES6+):** Para toda a interatividade (carrosséis, menu, modal) e manipulação do DOM.
* **IMask.js:** Biblioteca externa para as máscaras de formulário.
* **GitHub Pages:** Para a hospedagem e entrega do projeto.

---

### 👨‍💻 **Autor**

* **Thiago Thomaz Silva Vidigal**
