const linguagens = ["JavaScript", "Java", "Python", "C"];

const lista = document.querySelector("#lista");

linguagens.forEach((linguagem) => {
  const item = document.createElement("li");

  item.textContent = linguagem;

  lista.appendChild(item);
});