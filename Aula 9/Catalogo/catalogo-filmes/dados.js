// Os dados do catálogo: um array de objetos, como nas Aulas 05 e 06.
// Troque, apague ou acrescente filmes à vontade — a página se ajusta sozinha.
//
// A nota é a do catálogo (de 0 a 10), não uma avaliação oficial.
// Os gêneros que o filtro conhece: "Ação", "Animação", "Comédia", "Drama" e "Ficção".

const filmes = [
  { titulo: "Homem Aranha", ano: 2000, genero: "Ação", nota: 10, emoji: "🕷️" },
  { titulo: "Simplesmente Acontece", ano: 1999, genero: "Romance", nota: 9.0, emoji: "😍" },
  { titulo: "Toy Story", ano: 1995, genero: "Animação", nota: 8.7, emoji: "🤠" },
  { titulo: "Harry Potter", ano: 1998, genero: "Drama", nota: 10, emoji: "⚡" },
  { titulo: "Vingadores: Ultimato", ano: 2019, genero: "Ação", nota: 8.2, emoji: "🦸" },
  { titulo: "Invocação do Mal", ano: 1985, genero: "Terror", nota: 10, emoji: "👻" },
  { titulo: "Divertida Mente", ano: 2015, genero: "Animação", nota: 8.5, emoji: "😊" },
  { titulo: "Tropa de Elite", ano: 2007, genero: "Ação", nota: 8.6, emoji: "🚓" },
  { titulo: "Forrest Gump", ano: 1994, genero: "Drama", nota: 8.8, emoji: "🏃" },
  { titulo: "Minha Mãe é uma Peça", ano: 2013, genero: "Comédia", nota: 7.9, emoji: "👩" },
];


/*O filme de Terror aparece na lista "Todos" porque essa lista
mostra todos os filmes cadastrados, independentemente do gênero.

Ele não aparece como opção no filtro porque "Terror" não está
entre os cinco gêneros cadastrados.

A cor fica cinza porque o CSS possui uma formatação específica
para gêneros que não estão no catalogo*/