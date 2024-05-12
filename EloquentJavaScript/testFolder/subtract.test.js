const subtract = require("./subtract");

test("A function that subtract", function(){
    expect(subtract(9,3)).toBe(6)
})

test("A function that subtract2", function(){
    expect(subtract(1,2)).toBe(-1)
})