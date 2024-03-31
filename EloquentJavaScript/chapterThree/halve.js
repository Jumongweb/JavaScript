
const halve = function(n){
    return n / 2;
}

let n = 10;
// this n is not seen

// the function sees only its own n, therefore the output is 50
console.log(halve(100));