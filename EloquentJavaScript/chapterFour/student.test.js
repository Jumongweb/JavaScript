const score = require("./student");

test("Function that return student grade", ()=>{
    let answer = score([95,78,85,60,45,92]);
    let result = ['A','C','B','D','F','A'];
    expect(answer).toEqual(result)
})