const range = (start, end)=>{
    numbers = [];
    if (start <= end){
        for (let i = start; i <= end; i++){
            numbers.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i++){
            numbers.push(i);
        }
    }
    return numbers;
}

const sum = (...values)=>{
    let result = 0;
    for (let number of values){
        result = number + result;
    }
    return result;
}

const rangeStep = (start, end, step = 1)=>{
    numbers = [];
    if (step > 0){
        for(let i = start; i <= end; i+=step){
            numbers.push(i);
        }
    }
    else{
        for (let i = start; i >= end; i+=step){
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(range(1,10));
console.log(sum(...range(1,10)));
console.log(sum(1,2,3));
console.log(rangeStep(1,10,2));
console.log(range(5,2));
console.log(range(5,2,-1));