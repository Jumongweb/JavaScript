var var1 = 4;
var var2 = 5;
var var3 = 6;

console.log("Initial value");
console.log(`${var1}, ${var2}, ${var3}`);

var1 = var2;
var2 = var3;
var3 = var1;

console.log("\nNew value");
console.log(`${var1}, ${var2}, ${var3}`);
let check = prompt("How old are you");
