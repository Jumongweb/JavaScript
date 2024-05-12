const highestProduct = require("./highestProduct");

test("Test to get the highest product", ()=>{
    let answer = highestProduct([-5]);
    expect(answer).toBe(0);
    
})

test("Test to get the highest product", ()=>{
    let answer = highestProduct([]);
    expect(answer).toBe(0);
})

test("Test to get the highest product", ()=>{
    let answer = highestProduct([5,2,1,9,4]);
    expect(answer).toBe(45);
})