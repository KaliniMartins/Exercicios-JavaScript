const produtos = [
    {nome: "Camiseta", preco: 15, qtd: 0},
    {nome: "Tenis", preco: 30, qtd: 5},
    {nome: "Calça", preco: 50, qtd: 10},
    {nome: "Boné", preco: 60, qtd: 5},
];

let maisCaro = produtos[0];

    for(const produto of produtos){
        if(produto.preco > maisCaro.preco){
            maisCaro = produto
        }
}

console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);

let semEstoque = 0;

for (const produto of produtos) {
    if (produto.qtd === 0) {
        semEstoque++;
    }
}

console.log(`Produtos sem estoque: ${semEstoque}`);