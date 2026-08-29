const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const frequencia = 74;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7 && frequencia >= 75){
    console.log("Aprovado")
}else if (media >=4 && frequencia >=75){
    console.log("Em recuperação")
}else{
    console.log("Reprovado")
}