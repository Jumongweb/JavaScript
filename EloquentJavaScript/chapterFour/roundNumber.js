const roundNumber = (array)=>{
    let newArray = [];
    for(let count = array.length - 1; count >= 0; count--){
            newArray[count] = array[count] - 1;
            if (array[count] != 9){
                array[count]++;
                break;
            }
            else{
                array[count] = 0;    
            }
            if (array[0] == 0 && array[1] == 0) array.unshift(1);
            
        }
    return array;
}

module.exports = roundNumber;