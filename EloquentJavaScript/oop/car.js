let vehicle = { wheels : 4 };

let car = {
    seat : 5,
    __proto__ : vehicle//,
    //wheels: 6
};

console.log(`Vehicle:`, vehicle, vehicle.__proto__);
console.log(`Car:`, car, car.__proto__);
console.log(`Car wheels:`, car.wheels);
