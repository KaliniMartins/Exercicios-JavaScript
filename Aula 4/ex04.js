
function ehPrimo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
for (let n = 1; n <= 50; n++) {

    if (ehPrimo(n)) {
        console.log(n);
    }
}