const ano = 1900;

if(ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0){
    console.log("Bissexto")
}else{
    console.log("Não é bissexto")
}