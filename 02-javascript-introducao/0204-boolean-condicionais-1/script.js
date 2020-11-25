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