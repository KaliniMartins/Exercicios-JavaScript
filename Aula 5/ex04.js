

function inverter(array) {
    
    let novoArray = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }
    return novoArray;
}

const nomes = ['Kalini', 'Maria', 'Lu'];

console.log("Original:", nomes);
console.log("Invertido:", inverter(nomes));
console.log("Original depois:", nomes);