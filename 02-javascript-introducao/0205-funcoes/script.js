function calcularQuadrado(lado) {
    let quadrado = lado * lado;
    console.log(`O quadrado de ${lado} é ${quadrado}.`);
}

calcularQuadrado(16);
calcularQuadrado("b");

function calcularImc(peso, altura) {
    let imc = peso / (altura ** 2);
    console.log(imc);

    if (imc < 18.5) {
        console.log("Peso abaixo do normal. Neste caso, é necessária a busca por um especialista.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("São pesos considerados normais pela OMS.");
    } else if (imc > 24.9 && imc <= 29.9){
        console.log("Peso em pré-obesidade ou acima do peso, representando um risco maior para a saúde.");
    } else if (imc > 29.9 && imc <= 34.9){
        console.log("Este índice indica obesidade grau um.");
    } else if (imc > 34.9 && imc <= 39.9){
        console.log("Indica obesidade grau dois.");
    } else if (imc > 39.9){
        console.log("Indica obesidade grau três ou mórbida.");
    } else {
        console.log("Erro. Um ou todos os parametros não são esperados.")
    }
}

calcularImc(56,1.70);
calcularImc(71,1.70);
calcularImc(75,1.70);
calcularImc();

//

addEventListener("click", function(){
    console.log("Clicou");
});

function verificaFaixaEtaria(idade) {
    let validador = isNaN(+idade);
    if (validador == true || idade < 0) {
        console.log("Informe um valor de idade válido.");
    } else if (idade <= 3) {
        console.log("Bebê");
    } else if (idade < 13) {
        console.log("Criança");
    } else if (idade < 18){
        console.log("Adolescente");
    } else if (idade < 60){
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}

verificaFaixaEtaria("64");

// Crie uma função para verificar se um valor é Truthy

function verificarBoo(valor) {
    return !!valor
}
console.log(verificarBoo(NaN));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcularQuadrado(lado) {
    let quadrado =  lado ** 2;
    console.log(`O quadrado de ${lado} é ${quadrado}.`);
}

calcularQuadrado(16);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto("Felipe", "Amaral"));

// Crie uma função que verifica se um número é par
function isPar(valor){
    let resto = valor % 2;
    if (resto == 0) {
        return "É Par"
    } else {
        return "É impar"
    }
}

console.log(isPar(8));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function identType(valor) {
    return typeof valor
}

console.log(identType(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("wheel", function() {
    console.log(nomeCompleto("Felipe","Amaral"));
});

// Corrija o erro abaixo
var totalPaises = 193;
    function precisoVisitar(paisesVisitados) {
        return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }
    function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
    }
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  