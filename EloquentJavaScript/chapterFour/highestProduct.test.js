const highestProduct = require("./highestProduct");

test("Test to get the highest product", ()=>{
    let answer = highestProduct([-5]);
    expect(answer).toBe(50);
    
})