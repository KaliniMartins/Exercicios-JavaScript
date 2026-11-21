
function filtrar(lista, teste) {
    const novoArray = [];

    for (const elemento of lista) {
        if (teste(elemento) === true) {
            novoArray.push(elemento);
        }
    }

    return novoArray;
}

const numeros = filtrar([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
console.log(numeros);

const nomes = ["Kalini", "Maria", "Lu", "Pedro", "José"];

const nomesFiltrados = filtrar(nomes, nome => nome.length > 4);
console.log(nomesFiltrados);
