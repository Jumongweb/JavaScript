function factorial(number) {
    if (number === 0 || number === 1) return 1;
    else{
        return (factorial(number - 1) * number);
    }
}

module.exports = factorial;
// console.log(factorial(5));