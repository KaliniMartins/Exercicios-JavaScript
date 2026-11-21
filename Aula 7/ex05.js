
function media(...notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

const minhasNotas = [10, 5, 8, 10];
console.log(media(...minhasNotas));
