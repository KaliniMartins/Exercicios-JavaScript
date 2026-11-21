
const produtos = [
    { nome: "Camiseta", preco: 15, qtd: 10 },
    { nome: "Tênis", preco: 30, qtd: 5 },
    { nome: "Calça", preco: 50, qtd: 10 },
    { nome: "Boné", preco: 60, qtd: 5 },
];

const json = JSON.stringify(produtos, null, 2);

console.log("Produtos em JSON:");
console.log(json);


const objeto = JSON.parse(json);

console.log("Produto convertido novamente:");
console.log(objeto[2].nome);