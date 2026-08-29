/* 
1ª "5" + 5 vai resultar em 55, concatenando os valores
2ª "5" - 5 vai resultar em 0, pois o "-" transforma a string emm número 
3ª 5 + 5 + "5" vai resultar em 105, os dois primeiros somam e o último concatena
4ª "5" + 5 + 5 vai resultar em 555, o primeiro vai concatenar com a soma 
*/

const soma1 = "5" + 5;
const soma2 = "5" - 5;
const soma3 = 5 + 5 + "5";
const soma4 = "5" + 5 + 5 

console.log(`1ª: ${soma1}`);
console.log(`2ª: ${soma2}`);
console.log(`3ª: ${soma3}`);
console.log(`4ª: ${soma4}`);