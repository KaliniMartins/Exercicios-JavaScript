const texto = document.querySelector("#texto");
const contador = document.querySelector("#contador");

texto.addEventListener("input", () => {
  const quantidade = texto.value.length;

  contador.textContent = `${quantidade}/140 caracteres`;

  if (quantidade > 140) {
    contador.classList.add("erro");
  } else {
    contador.classList.remove("erro");
  }
});