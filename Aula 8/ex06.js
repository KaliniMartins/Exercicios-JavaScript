const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];

const boletim = alunos
  .map((aluno) => {
    const situacao = aluno.media >= 7 ? "Aprovado" : "Reprovado";

    return `${aluno.nome} — média ${aluno.media} — ${situacao}`;
  })
  .join("\n");

console.log(boletim);