const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Pick a number: ', (number) => {
    if (!Number.isNaN(number)){
        console.log('"Your number is the square root of ":', number * number);
    }
    else{
        console.log("You didn't enter a number");
    }
    rl.close();
});

