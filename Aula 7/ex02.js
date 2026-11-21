
function aplicar(lista, fn) {
    const novoArray = [];

    for (const elemento of lista) {
        novoArray.push(fn(elemento));
    }

    return novoArray;
}

const numeros = aplicar([1, 2, 3], n => n * 10);
console.log(numeros);

const nomes = ["Kalini", "Maria", "Lu"];
const nomesMaiusculos = aplicar(nomes, nome => nome.toUpperCase());

console.log(nomesMaiusculos);
