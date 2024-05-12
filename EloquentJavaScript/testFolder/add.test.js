let {addNumber, evenNumbers, multiply, divide, squareRoot, cubeRoot} = require("./add.js");

test("Add two numbers", ()=>{
    let a = 3;
    let b = 5;
    let answer = addNumber(a,b);
    
    expect(answer).toBe(8);
})

test("Filter even numbers", ()=>{
    let arr = [1,2,3,4,5,6];
    let answer = evenNumbers(arr);
    expect(answer).toEqual([2,4,6]);
})

test("Multiply two numbers", ()=>{
    let answer = multiply(4,5);
    expect(answer).toBe(20);
})

test("Divide two numbers", ()=>{
    let answer = divide(15, 3);
    expect(answer).toBe(5);
})

test("Square root of a number", ()=>{
    let answer = squareRoot(25);
    expect(answer).toBe(5);
})

test("Square root of another number", ()=>{
    let answer = squareRoot(4);
    expect(answer).toBe(2);
})

test("Cube root of a number", ()=>{
    let answer = cubeRoot(27);
    expect(answer).toBe(3);
})