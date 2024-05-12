function mode(array){
    let countArray = [];
    let max = 0;
    
    let count = 0;
    for (let i = 0; i < array.length; i++){
        count = 0;
        for(let j = 0; j < array.length; j++){
            if (array[i] === array[j]){
                count++;
            }
        }
        console.log(array[count]);
        if (max < count){
            max = array[count]; 
        }
    }
    countArray.push(max);
    return countArray;
}

console.log(mode([1,1,2,2,2]));
console.log(mode([3,3,3,3,1]));
module.exports = mode;

/*function mode(array) {
    let countArray = [];
    let maxCount = 0;

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            countArray = [array[i]]; // Reset countArray with current element
        } else if (count === maxCount && !countArray.includes(array[i])) {
            countArray.push(array[i]); // Add current element if count equals maxCount
        }
    }
    return countArray;
}

console.log(mode([1, 1, 2, 2, 2])); // Output: [2]
console.log(mode([3, 3, 3, 3, 1])); // Output: [3]
console.log(mode([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5] (all elements have same frequency) */
