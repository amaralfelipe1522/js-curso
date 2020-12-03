let eletrodomesticos = ["Geladeira", "Fogão", "Maquina de Lavar", "Batedeira"];

eletrodomesticos.pop();
console.log(eletrodomesticos);
eletrodomesticos.push("Liquidificador");
console.log(eletrodomesticos);
eletrodomesticos.shift();
console.log(eletrodomesticos);
eletrodomesticos.unshift("Geladeira");
console.log(eletrodomesticos);

// for
for (i=0; i<10; i++) {
    console.log(i);
}

// while
var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// Loop em array com break
for (i=0; i <= eletrodomesticos.length; i++) {
    console.log(eletrodomesticos[i]);
    if (eletrodomesticos[i] == "Maquina de Lavar") {
        console.log("BREAK!!")
        break;
    }
}

// forEach
eletrodomesticos.forEach((item, index) => {
    console.log(`${index}: ${item}`)
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copas.forEach((item) => {
    console.log(`O Brasil ganhou a Copa do Mundo de ${item}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] == 'Pera') {
        console.log("BREAK!!");
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);
