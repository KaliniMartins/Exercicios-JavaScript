const item = document.querySelector("#item");
const botao = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

botao.addEventListener("click", () => {
  if (item.value.trim() === "") {
    alert("Digite alguma coisa!");
  } else {
    const novoItem = document.createElement("li");

    novoItem.textContent = item.value;

    lista.appendChild(novoItem);

    item.value = "";
  }
});