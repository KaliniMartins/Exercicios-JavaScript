
const produtos = [
    { nome: "Camiseta", preco: 15, qtd: 10 },
    { nome: "Tênis", preco: 30, qtd: 5 },
    { nome: "Calça", preco: 50, qtd: 10 },
    { nome: "Boné", preco: 60, qtd: 5 },
];

function buscarPorNome(lista, nome) {
    for (const produto of lista) {
        const { nome: nomeProduto } = produto;

        if (nomeProduto === nome) {
            return produto;
        }
    }

    return null;
}

const resultado = buscarPorNome(produtos, "Tênis");

console.log(resultado);