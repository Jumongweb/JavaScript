const getHighestProduct = (arrays)=> {
    let highestProduct = -Infinity;
    if (arrays.length === 0 || arrays.length === 1){
        return arrays[0];
    }
    
    for(let i = 0; i < arrays.length; i++){
        for (let j = i + 1; j < arrays.length; j++){
            if (arrays[i] * arrays[j] > highestProduct){
                highestProduct = arrays[i] * arrays[j];
            }
            
        }
    }
    return highestProduct;
}

module.exports = getHighestProduct;