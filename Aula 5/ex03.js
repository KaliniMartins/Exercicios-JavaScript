const fila = ["Kalini", "Maria", "Lu"];

console.log("Fila: " + fila.join(", "));


fila.push("Felipe");
fila.push("Pedro");

console.log("Fila autalizada: " + fila.join(", "));
console.log(`Atendendo: ${fila.shift()} e ${fila.shift()}`);

console.log("Fila restante:", fila.join(", "));