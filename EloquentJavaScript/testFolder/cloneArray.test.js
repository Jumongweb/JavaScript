const cloneArray = require("./cloneArray");
//const clone = require("./cloneArray");

test("A function that clone array", ()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})