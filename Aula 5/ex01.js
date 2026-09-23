

let favoritos = ["Quarta Asa", "The sims 4", "Harry Potter", "Game of Thrones", "Solo Leveling"];

console.log("Primeiro: " + favoritos[0]);
console.log("Último: " + favoritos[favoritos.length - 1]);
console.log("Total de itens: " + favoritos.length);

for (let i = 0; i < favoritos.length; i++) {
    console.log((i + 1) + ". " + favoritos[i]);
}

