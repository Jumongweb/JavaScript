const divideNumber = (values) => {
    let count;
     for (let i = 0; i < values.length; i++){
        count = 0;
        for (let j = 0; j < 10; j++){
            if (values[i] % i == 0 && i != 1){
                count++;
            }
        }
        if (count === values.length){
            return i;
        }
     }
}

let firstArray = [6,9,12];

console.log(divideNumber(firstArray));