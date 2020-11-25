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