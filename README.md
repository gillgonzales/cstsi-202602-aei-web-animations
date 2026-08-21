# Exemplos da Disciplina de Animação de Elementos de Interface - CSTSI

> Este repositório contém os materiais e exemplos práticos da disciplina de Animação de Elementos de Interface. Aqui são compartilhados exemplos de aula com animações para a web, construídas com tecnologias desde CSS puro, bibliotecas e frameworks JavaScript até animações tridimensionais com WebGL (Three.js).

## 📌 Sobre a disciplina

A disciplina de Animação de Elementos de Interface tem como objetivo apresentar os fundamentos e as práticas de movimento visual aplicadas ao desenvolvimento front-end. O foco está em criar interfaces mais dinâmicas, intuitivas e atraentes, combinando estética, usabilidade e desempenho.

Durante as aulas, os estudantes exploram desde conceitos básicos de transição e animação em CSS até o uso de bibliotecas e estruturas mais avançadas para aplicações web modernas.

## 👨‍🏫 Autor

Prof. Gonzales  
E-mail: gillgonzales@ifsul.edu.br

## 🧭 Visão geral

Este repositório foi pensado como um espaço de estudo e prática para a disciplina de Animação de Elementos de Interface, reunindo exemplos, exercícios e materiais que ajudam na compreensão dos conceitos de movimento e interatividade em interfaces web.

A proposta é permitir que estudantes explorem, experimentem e adaptem técnicas de animação em projetos reais, desenvolvendo uma base sólida para aplicações front-end mais dinâmicas e modernas.


## 🎯 Objetivos

- compreender o papel do movimento na experiência do usuário;
- aplicar transições e animações de forma funcional e visualmente elegante;
- utilizar CSS para criar efeitos de movimento com eficiência;
- explorar animações em JavaScript e frameworks;
- entender boas práticas de performance e acessibilidade em interfaces animadas;
- conhecer ferramentas e bibliotecas que ampliam as possibilidades de animação web.

## 📚 Conteúdo programático

### Aula 01 - CSS Transitions

Nesta etapa, são abordados os conceitos iniciais de transição em CSS, como:

- propriedades animáveis;
- duração, timing functions e delays;
- hover effects;
- estados iniciais e finais;
- uso de transições para feedback visual em interfaces.

### Aula 02 - CSS Animations

A segunda parte concentra-se em animações com keyframes, incluindo:

- animações nativas em CSS;
- porcentagens e estágios da animação;
- timing e delays;
- sprites e imagens em movimento;
- loaders, skeletons e efeitos visuais em elementos de interface;
- integração com projetos React, Expo e aplicações web.

### Aula 03 - Bibliotecas de Animação

Nesta unidade, são introduzidas bibliotecas e recursos que agilizam o desenvolvimento de animações, com exemplos em:

- CSS puro com classes utilitárias;
- bibliotecas de animação;
- aplicações em ambientes React e vanilla JavaScript;
- composição de efeitos visualmente consistentes e reutilizáveis.

## 🗂️ Estrutura do repositório

O repositório está organizado por módulos de aula e exemplos práticos:

- `aula01-css-transitions/` — exemplos de transições com CSS puro;
- `aula02-css-animations/` — animações com CSS, React, Expo e outros exemplos práticos;
- `aula03-lib-animate-css/` — uso de bibliotecas de animação e classes utilitárias;

Cada pasta contém materiais didáticos, arquivos HTML, projetos JavaScript/React e recursos visuais para prática.

## 🚀 Como utilizar este repositório

1. Clone ou baixe o repositório localmente.
2. Navegue até a pasta da aula desejada.
3. Abra os arquivos HTML ou execute os projetos com os comandos apropriados do ambiente.
4. Explore os exemplos e adapte os trechos para seus próprios projetos.

### Vite como bundler padrão

Os exemplos da disciplina utilizam o [Vite](https://vitejs.dev/) como ferramenta padrão para servir, compilar e organizar os projetos front-end. O Vite foi escolhido por oferecer desenvolvimento rápido, configuração mínima e suporte nativo a projetos em JavaScript e React.

Para executar qualquer exemplo que esteja em uma pasta com `package.json`, siga os passos abaixo:

```bash
# entrar na pasta do projeto
cd aula02-css-animations/animations-react

# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Após isso, o Vite disponibiliza uma URL local no navegador, normalmente em:

```bash
http://localhost:5173
```

Em alguns projetos da disciplina, o repositório também contém versões vanilla e nativas, e o padrão de trabalho é manter a mesma organização de arquivos, com estrutura mínima para desenvolvimento e visualização dos efeitos.

### Comandos úteis do Vite

```bash
# instalar dependências
npm install

# iniciar projeto em modo de desenvolvimento
npm run dev

# gerar build de produção
npm run build

# visualizar a build gerada
npm run preview
```

> O uso do Vite facilita o desenvolvimento dos exemplos de animação, permitindo testar rapidamente efeitos visuais, ajustar CSS e aproveitar recursos modernos sem necessidade de configuração manual complexa.

### Exemplos e projetos

Os materiais incluem:

- demonstrações de transições em elementos interativos;
- animações com keyframes e tempo;
- efeitos de carregamento e feedback visual;
- uso de assets e sprites;
- aplicações com bibliotecas e estruturas modernas.


## 📖 Referências da disciplina

- W3C. Cascading Style Sheets Level 3 (CSS3).
- MDN Web Docs. CSS Transitions, CSS Animations e API de animação.
- Documentação oficial de bibliotecas e frameworks utilizados nos exemplos.
- Materiais desenvolvidos pelo professor e recursos didáticos complementares aplicados ao contexto da disciplina.

## ✅ Boas práticas

Ao trabalhar com animações em interfaces, é importante considerar:

- uso moderado do movimento para não prejudicar a usabilidade;
- preferir animações leves e performáticas;
- respeitar acessibilidade, especialmente redução de movimento;
- manter consistência visual entre componentes;
- testar comportamento em diferentes navegadores e dispositivos.

## 🔗 Links úteis

### Documentação e referências técnicas

- [MDN - CSS Transitions](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [MDN - CSS Animations](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [MDN - Animations API](https://developer.mozilla.org/pt-BR/docs/Web/API/Animation)
- [CSS Tricks - Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [Animate.css](https://animate.style/)
- [AnimeJS v4](https://animejs.com/)
- [React Bits](https://reactbits.dev/)
- [AtroposJS](https://atroposjs.com/)
- [Slider](https://swiperjs.com/)
- [SimpleParallax](https://simpleparallax.com/)
- [Three.js](https://threejs.org/)
- [Can I Use](https://caniuse.com/)

### Recursos de aprendizagem

- [Web.dev](https://web.dev/)
- [W3Schools - CSS Animation](https://www.w3schools.com/css/css3_animations.asp)
- [W3Schools - CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
