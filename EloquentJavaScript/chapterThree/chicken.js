// chicken or egg paradox. This functions cause an infinite loop
function chicken(){
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken() + " came first.");
