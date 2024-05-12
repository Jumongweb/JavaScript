const mode = require("./mode.js");

test("test that function return the highest occuring number", ()=>{
    let result = [1,1,2,2,2];
    let output = [2];
    expect(output).toEqual(mode(result));
})

test("test that function return the highest occuring number", ()=>{
    let result = [3,3,3,3,1];
    let output = [3];
    expect(output).toEqual(mode(result));
})