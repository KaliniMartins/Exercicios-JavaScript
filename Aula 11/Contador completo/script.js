let contador = 0;

const numero = document.querySelector("#numero");
const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const zerar = document.querySelector("#zerar");

aumentar.addEventListener("click", () => {
  contador++;
  numero.textContent = contador;

  verificarNumero();
});


diminuir.addEventListener("click", () => {
  contador--;
  numero.textContent = contador;

  verificarNumero();
});


zerar.addEventListener("click", () => {
  contador = 0;
  numero.textContent = contador;

  verificarNumero();
});

const verificarNumero = () => {
  if (contador < 0) {
    numero.classList.add("negativo");
  } else {
    numero.classList.remove("negativo");
  }
};