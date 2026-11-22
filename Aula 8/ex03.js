const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];

const acharCarla = alunos.find((aluno) => aluno.nome === "Carla");

const semFaltas = alunos.some((aluno) => aluno.faltas === 0);

const mediaGeral = alunos.every((aluno) => aluno.media >= 4);

console.log("Carla:", acharCarla);
console.log("Alguém tem zero faltas?", semFaltas);
console.log("Todos têm média >= 4?", mediaGeral);