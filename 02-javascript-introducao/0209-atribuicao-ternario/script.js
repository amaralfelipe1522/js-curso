// atribuição
var x = 10;
var y = 5;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x **= y);
console.log(x %= y);

// ternário
var idade = 17;
var podeBeber = (idade >= 18) ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

//Outra forma de if
var estouVivo = true;
if (estouVivo)
    console.log("Estou vivo");
else
    console.log("Não estou vivo");


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll += 500);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

console.log(darCredito = (possuiCarro && possuiCasa));