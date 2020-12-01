//objeto nativo
console.log(Math.random());
console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,18));

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dados = {
    nome: "Felipe",
    sobrenome: "Amaral de Souza",
    dataNasc: new Date(1991,09,25),
    empregado: true,
    idade: calculaIdade(new Date(1991,09,25))
}
console.log(dados);

function calculaIdade(dataNasc) {
    let diferenca = Date.now() - dataNasc;
    let dt_idade = new Date(diferenca);
    return Math.abs(dt_idade.getUTCFullYear() - 1970);
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = `${dados.nome} ${dados.sobrenome}`
console.log(dados);

// Modifique o valor da propriedade preco para 3000
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
  
let cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    latir(sexo) {
        if (sexo == "Homem") {
            console.log("Au Au");
        } else {
            console.log("Abana o rabo");
        }
    }
}

cachorro.latir("Homem");