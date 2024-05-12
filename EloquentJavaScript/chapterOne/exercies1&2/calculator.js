let leftOperand = 5;
let rightOperand = 3;
let operator = "";

function calculate(operator){
    if (operator === "+" ){
        return leftOperand + rightOperand;
    }
    else if (operator === "-"){
        return leftOperand - rightOperand;
    }
    else if (operator === "/"){
        return leftOperand / rightOperand
    }
    else if (operator === "*"){
        return leftOperand * rightOperand;
    }

    return NaN
}

function calculateUsingSwitch(operator){
    switch(operator){
        case "+" : return leftOperand + rightOperand;
        case "-" : return leftOperand - rightOperand;
        case "/" : return leftOperand / rightOperand;
        case "*" : return leftOperand * rightOperand;
        default : return NaN;
    }
}


console.log(calculate("/"));
console.log(calculateUsingSwitch("/"));