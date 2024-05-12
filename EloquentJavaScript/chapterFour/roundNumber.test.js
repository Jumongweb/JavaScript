const roundNumber = require("./roundNumber");

test("round the numbers", ()=>{
    let sample = [5,2,3,1,2];
    let output = [5,2,3,1,3];
    expect(output).toEqual(roundNumber(sample))
}) 

test("round the numbers part2", ()=>{
    let sample = [9,9,9,9];
    let output = [1,0,0,0,0];
    expect(output).toEqual(roundNumber(sample))
})

test("round the numbers part3", ()=>{
    let sample = [0,1,9,9];
    let output = [0,2,0,0];
    expect(output).toEqual(roundNumber(sample))
})