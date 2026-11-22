const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const nota3 = document.querySelector("#nota3");
const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  if (nota1.value === "" || nota2.value === "" || nota3.value === "") {
    resultado.textContent = "Preencha as três notas!";
    resultado.classList.remove("aprovado", "reprovado");
  } else {
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      resultado.textContent = "Digite apenas números!";
      resultado.classList.remove("aprovado", "reprovado");
    } else {
      const media = (n1 + n2 + n3) / 3;

      resultado.textContent = `Sua média é ${media.toFixed(1)}`;

      if (media >= 7) {
        resultado.classList.add("aprovado");
        resultado.classList.remove("reprovado");
      } else {
        resultado.classList.add("reprovado");
        resultado.classList.remove("aprovado");
      }
    }
  }
});