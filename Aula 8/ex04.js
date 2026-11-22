const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];

const media = alunos.reduce((acc, aluno) => acc + aluno.media, 0) / alunos.length;

const faltas = alunos.reduce((acc, aluno) => acc + aluno.faltas, 0);

const maiorMedia = alunos.reduce((acc, aluno) =>
  aluno.media > acc.media ? aluno : acc
);

console.log("Média geral:", media);
console.log("Total de faltas:", faltas);
console.log("Aluno com maior média:", maiorMedia);