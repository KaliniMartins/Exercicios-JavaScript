const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];


const mediaSI = alunos
  .filter((aluno) => aluno.curso === "SI")
  .reduce((acc, aluno) => acc + aluno.media, 0) /
  alunos.filter((aluno) => aluno.curso === "SI").length;

const aprovados = alunos
  .filter((aluno) => aluno.media >= 7)
  .map((aluno) => aluno.nome)
  .sort();

console.log("Média geral de SI:", mediaSI);
console.log("Alunos aprovados:", aprovados);