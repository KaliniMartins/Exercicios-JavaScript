const peso = 100
const altura = 1.70
const imc = peso / (altura ** 2); 
let resultado; 

if (imc <18.5){
    resultado = "Abaixo do Peso"
}else if (imc < 25){
    resultado = "Peso normal"
}else if (imc <30){
    resultado = "Sobrepeso"
}else{
    resultado = "Obesidade"
}

console.log(`Seu Imc é de: ${imc.toFixed(2)}, sendo = ${resultado}`);