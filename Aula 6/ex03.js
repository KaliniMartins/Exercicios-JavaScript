const produtos = [
    {nome: "Camiseta", preco: 15, qtd: 10},
    {nome: "Tenis", preco: 30, qtd: 5},
    {nome: "Calça", preco: 50, qtd: 10},
    {nome: "Boné", preco: 60, qtd: 5},
];

let total = 0;

for(const produto of produtos){
    console.log(`
        Nome: ${produto.nome} 
        Preço: R$${produto.preco} 
        Quantidade em estoque: ${produto.qtd}`)

        total += produto.preco * produto.qtd

}

    console.log(`Valor total em estoque ${total}`);