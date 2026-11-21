const quadrado = n => n * n;
const ehMaiorDeIdade = idade => idade >= 18;
const maiorDeDois = (a, b) => a > b ? a : b;
const apresentar = (nome, curso) => `Olá! Meu nome é ${nome} e curso ${curso}.`;

// Testando as funções
console.log(quadrado(10));
console.log(ehMaiorDeIdade(22));
console.log(maiorDeDois(22, 15));
console.log(apresentar("Kalini", "ADS"));