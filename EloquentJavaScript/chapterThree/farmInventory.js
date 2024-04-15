function printFarmInventory1(cows, chicken){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chicken);
    while(chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`)
}
printFarmInventory(7,11);