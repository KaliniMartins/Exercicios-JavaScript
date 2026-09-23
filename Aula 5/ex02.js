
const temperaturas = [22, 25, 19, 30, 28, 21, 24];

let soma = 0;

for (let i = 0; i < temperaturas.length; i++) {
    soma = soma + temperaturas[i];
}

let media = (soma / temperaturas.length).toFixed(2);

let maior = temperaturas[0];
let menor = temperaturas[0];
let acimaMedia = 0;

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
    if (temperaturas[i] > media) {
        acimaMedia++;
    }
}

console.log("Média: " + media);
console.log("Maior temperatura: " + maior);
console.log("Menor temperatura: " + menor);
console.log("Dias acima da média: " + acimaMedia);


