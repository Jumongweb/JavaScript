function addNumber(x, y){
    let answer = x + y;
    return answer;
}

function evenNumbers(numbers){
    let result = numbers.filter(number => number % 2 == 0);
    return result;
}

function multiply(a, b){
    return a * b;
}

function divide(c, d){
    return c / d;
}

function squareRoot(number){
    for (let i = 2; i < number; i++){
        if (number % i == 0){
            return i;
        }
    }
}

function cubeRoot(number){
    for (let i = 0; i < number; i++){
        if(i * i * i === number){
            return i;
        }
    }
}

addNumber(2,3);

module.exports = {addNumber, evenNumbers, multiply, divide, squareRoot, cubeRoot};