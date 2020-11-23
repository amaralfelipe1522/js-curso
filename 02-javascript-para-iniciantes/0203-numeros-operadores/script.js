var idade = 29;
var gols = 1000;
var preco = 4.50;
var exponencial = 2e10;
console.log(exponencial);
//precisão até 15 dígitos.. acima disso é arredondado.

// expoente = 2 x 2 x 2 x 2
var expoente = 2**4;
console.log(expoente);

// NaN
var tentativa = "10 reais" / 2;
console.log(tentativa);
console.log(isNaN(tentativa));

// unários
var x = 10;
console.log(x++);
console.log(x);
console.log(++x);
console.log(--x);

var y = "20";
console.log(+y);
var z = "numero";
console.log(+z);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var number1 = +"2 reais";
console.log(number1)
// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50
console.log(soma);
// Incremente o número 5 e retorne o seu valor incrementado
var number2 = 5;
console.log(++5);
// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
