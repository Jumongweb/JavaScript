const array1 = [2,4,5,7,8];
const array2 = [2,1,3,4,9];

function differ(arrays){
    let largest = arrays[0];
    let lowest = arrays[0];
    for (let count = 0; count < arrays.length; count++){
        if (arrays[count] > largest){
            largest = arrays[count];
        }
        if (arrays[count] < lowest){
        lowest = arrays[count];
        }
    
    }
    return(`The difference is: ${[largest - lowest]}`);
}

console.log(differ(array1))
console.log(differ(array2))
