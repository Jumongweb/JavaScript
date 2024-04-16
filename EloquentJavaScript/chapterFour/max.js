const max = (...numbers)=> {
    let result = -Infinity;
    for (let number of numbers){
        if (number > result) {
            result = number;
        }
    }
    return result;
}

console.log(max(2,90,8,23,3));
console.log("hi", "world");

let numbers = [5,1,7];
console.log(max(...numbers));