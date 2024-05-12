// let vehicle = [["Car", 2000], ["Truck", 500], ["Bike", 6500]];
// let scooter = ["Scooter", 1500];
// vehicle.push(scooter);
// vehicle.shift();
// console.log(vehicle);


//let bike = ["Bike", 6500, ["Honda"]];

let threeArray = [[],[],[]];
threeArray[0][0] = 'Car';
threeArray[0][1] = 2000;
threeArray[0][2] = ["Toyota", "Nissan"];
threeArray[1][0] = 'Truck';
threeArray[1][1] = 500;
threeArray[1][2] = ["Ford"];
threeArray[2][0] = 'Bike';
threeArray[2][1] = 6500;
threeArray[2][2] = ["Honda"];


console.log(threeArray);
console.log(`This is a nissan ${threeArray[0][2][1]}`);

    