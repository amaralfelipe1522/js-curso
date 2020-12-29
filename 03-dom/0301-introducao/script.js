console.log(window.alert("Hello World"));

window.innerHeight; // altura do browser

var titulo = document.querySelector("h1");
var subTitulos = document.querySelector("h2");

titulo.innerText;
titulo.id;
titulo.offsetHeight;

titulo.addEventListener("click", function(){
    window.alert("Clicou no titulo");
});

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
let primeiroAtivo = document.querySelector(".ativo");
let todosAtivos = document.querySelectorAll(".ativo");

// Retorne a linguagem do navegador
let language = window.navigator.language;

// Retorne a largura da janela 
let largura = window.innerWidth;