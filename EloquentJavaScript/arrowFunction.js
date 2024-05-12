// arrow function or call back function
const calc = (x) => {
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}
console.log(calc(3)(2));