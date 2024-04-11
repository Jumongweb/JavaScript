function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(3));

function anotherMultiplier(factor){
    return num => num * factor;
}

let two = anotherMultiplier(3);
console.log(two(3));