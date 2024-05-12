// map is going through an array to perform a condition

let array = [1,2,3,4,5,6];
let answer = array.map((num) => num % 2 == 1);
let answer2 = array.map((value)=> value % 2 == 0);
let answer3 = array.map((num)=> num * 2);
let answer4 = array.filter(num=> num % 2 == 0).map(num => num * 10);
console.log(answer);
console.log(answer2);
console.log(answer3);
console.log(answer4);