// function declaration
function calc(x){
    function secondNumber(a){
        return a * x;
    }
    // console.log(secondNumber(2));
    return secondNumber;
}

function calc2(x){
    function secondNumber(x, a){
        return a * x;
    }
    return secondNumber;
} 

//console.log(calc2(3),(2,4));

// function expression

const calc3 = function calcForExpression(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}

console.log(calc3(3)(2));