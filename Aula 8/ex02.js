const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];

const alunosSI = alunos.filter((aluno) => aluno.curso === "SI");

const aprovados = alunos.filter(
  (aluno) => aluno.media >= 7 && aluno.faltas < 5
);

const reprovados = alunos.filter((aluno) => aluno.media < 7);

console.log("Alunos de SI:", alunosSI);
console.log("Aprovados com menos de 5 faltas:", aprovados);
console.log("Alunos reprovados:", reprovados);