const nomes = ['Maria', 'Kalini', 'Lu', 'Maria', 'Kalini'];

console.log("Com duplicatas: " + nomes.join(', '))

function semDuplicatas(array) {

    let novoArray = [];

    for (let i = 0; i < array.length; i++) {

        if (!novoArray.includes(array[i])) {
            novoArray.push(array[i]);
        }

    }

    return novoArray;
}

console.log("Sem duplicados: " + semDuplicatas(nomes));