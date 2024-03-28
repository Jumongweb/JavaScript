function calc(x){
    function secondNumber(a){
        return a * x;
    }
    // console.log(secondNumber(2));
    return secondNumber;
}

console.log(calc(3)(4));
