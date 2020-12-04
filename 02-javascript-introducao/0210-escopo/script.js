// Escopo de função/pai

//"use strict" // impede a falha no JS de permitir variáveis globais

function testeEscopo() {
    carro = "Fusca"; // Escopo global quando a variável é criada sem os comandos var, let ou const
    console.log(carro);
}

testeEscopo();

console.log(carro);

// Escopo de bloco

if (true) {
    var videoGame = "Wii"; // variável é acessada fora do bloco quando for criada com o comando var, mesmo se no momento de execução o bloco não ser acessado
    console.log(videoGame);
}

console.log(videoGame);

// Diferenças entre let e const
let pessoa1 = {
    nome: "Felipe",
    idade: 29,
};

const pessoa2 = {
    nome: "Gabriel",
    idade: 28,
};

pessoa1.nome = "Felipe Amaral";
pessoa2.nome = "Gabriel Fosco"; // let e const permite alterar propriedades

pessoa1 = "Felipe Amaral";
//pessoa2 = "Gabriel Fosco"; // const não permite alterar o valor

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
// console.log(cor, marca, portas); // pq variáveis let e const não vazam do bloco

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
