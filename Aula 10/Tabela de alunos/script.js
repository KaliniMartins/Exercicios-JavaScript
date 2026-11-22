const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];


const renderizarLista = (alunos, elementoUl) => {
  elementoUl.textContent = "";

  alunos.forEach((aluno) => {
    const item = document.createElement("li");

    if (aluno.media >= 7) {
      item.textContent = `${aluno.nome} — ${aluno.media} — Aprovado`;
      item.classList.add("aprovado");
    } else {
      item.textContent = `${aluno.nome} — ${aluno.media} — Reprovado`;
      item.classList.add("reprovado");
    }

    elementoUl.appendChild(item);
  });
};


const todosAlunos = document.querySelector("#todos-alunos");
const aprovados = document.querySelector("#aprovados");

renderizarLista(alunos, todosAlunos);

const alunosAprovados = alunos.filter((aluno) => aluno.media >= 7);

renderizarLista(alunosAprovados, aprovados);