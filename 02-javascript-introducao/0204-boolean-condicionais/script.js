var boo1 = true;
var boo2 = false;

if (!!boo1) {
    var x = 10;
    console.log("É verdadeiro 1");
    if (x >= 10) {
        console.log("É maior que 10")
    }
} else if (!!boo2) {
    console.log("É verdadeiro 2");
} else {
    console.log("Não é nada");
}

console.log(x); // "var" cria em um contexto global a variável, portanto será Undefined quando não passar pela condicional que atribui um valor.

/* 
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Todo o resto é truthy

*/

console.log("Gato"&&"Cão"); // retorna o último true, que no caso é Cão
console.log(0&&1); // retorna o primeiro valor false, que no caso é 0
console.log("Gato"||"Cão"); // retorna o primeiro true, que no caso é Gato


var id = 5;

switch (id){
    case 0:
        console.log("Número 0");
        break; //caso não tenha return
    case 1:
        console.log("Número 1");
        break;
    default:
        console.log("Não é binário");
        break;
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 29;
var idadeDeParente = 15;

if (minhaIdade < idadeDeParente) {
    console.log("É menor");
} else if (minhaIdade > idadeDeParente) {
    console.log("É maior");
} else if (minhaIdade == idadeDeParente) {
    console.log("É igual");
} else {
    console.log("Erro. Um ou todos os valores não são esperados.\nMinha idade: "+minhaIdade+"\nIdade do parente: "+idadeDeParente)
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log("Expressão: "+expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; // true
var possuiDoutorado = false; //false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e6;
var china = 1340e6;

if (brasil > china) {
    console.log("Brasil tem mais habitantes que a China, com "+brasil+" habitantes.");
} else {
    console.log("China tem mais habitantes que o Brasil, com "+china+" habitantes.");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //true = cão