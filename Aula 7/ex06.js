
console.log("===== CENÁRIO 1: const b = a =====");

const a = [2, 5, 6];
const b = a;

b.push(4);

console.log("Array b:", b);
console.log("Array a:", a);

// EXPLICAÇÃO:
// Quando fazemos b = a, os dois apontam para o mesmo array.
// Por isso, quando adicionamos 4 em b, o array a também é alterado.


console.log("===== CENÁRIO 2: const b = [...a] =====");

const c = [1, 2, 3];
const d = [...c];

d.push(4);

console.log("Array d:", d);
console.log("Array c:", c);

// EXPLICAÇÃO:
// Quando usamos [...c], criamos uma cópia do array.
// Por isso, adicionar 4 em d não altera o array c.
