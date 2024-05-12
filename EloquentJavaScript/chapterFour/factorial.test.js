const factorial = require("./factorial");

test("Test factorial", ()=>{
    let result = factorial(5);
    expect(result).toBe(120);
});

test("Test factorial", ()=>{
    let result = factorial(1);
    expect(result).toBe(1);
});

test("Test factorial", ()=>{
    let result = factorial(0);
    expect(result).toBe(1);
});