const nomes = ["Kalini", "Maria", "Lu", "Kalini", "João", "Maria", "Kalini"];

function contarOcorrencias(array, valor) {

    let contador = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === valor) {
            contador++;
        }

    }

    return contador;
}

console.log("Kalini aparece: " + contarOcorrencias(nomes, "Kalini") + " vezes");
console.log("Maria aparece: " + contarOcorrencias(nomes, "Maria") + " vezes");