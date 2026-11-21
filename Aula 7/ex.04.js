
function calculadora(a, b, operacao) {
    return operacao(a, b);
}

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;


console.log(calculadora(10, 5, soma));
console.log(calculadora(10, 5, subtracao));
console.log(calculadora(10, 5, multiplicacao));
console.log(calculadora(10, 5, divisao));
