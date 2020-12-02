var nome = "Felipe";

console.log(nome.toLowerCase());
console.log(nome.length);
console.log(nome.slice(0,3));

var idade = 29.1;
console.log(idade.toString());
console.log(idade.toFixed());

function calcularQuadrado(lado) {
    let quadrado =  lado ** 2;
    console.log(`O quadrado de ${lado} é ${quadrado}.`);
}
console.log(calcularQuadrado.toString());
console.log(calcularQuadrado.caller);
console.log(calcularQuadrado.length);
calcularQuadrado(16);

var btn = document.querySelector(".btn");
btn.classList.add("blue");
btn.addEventListener("click", function(){
    console.log("Teje clicado");
})


// nomeie 3 propriedades ou métodos de strings
console.log(nome.replace("pe", "pe Amaral"));
console.log(nome.search("p"));
console.log(nome.split("l"));

// nomeie 5 propriedades ou métodos de elementos do DOM
document.querySelector();
document.parentNode;
document.onselect
document.onscroll
document.onreadystatechange 

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
