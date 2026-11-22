const nome = document.querySelector("#nome");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {

  if (nome.value === "") {
    mensagem.textContent = "Digite seu nome!";
    mensagem.classList.add("erro");
    mensagem.classList.remove("sucesso");

  } else {
    mensagem.textContent = `Olá, ${nome.value}! Seja bem-vindo(a)!`;
    mensagem.classList.add("sucesso");
    mensagem.classList.remove("erro");

    nome.value = "";
  }

});

nome.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    botao.click();
  }
});