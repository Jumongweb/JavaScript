let animal = {
    type: "Unknown",
    sound : function(){
        console.log("The " + this.type + " makes a sound");
    }
}

let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "Brown";
dog.sound()
console.log(dog);
console.log(animal);

let goat = {
    color: "black"
}
Object.setPrototypeOf(goat, animal);
goat.type = "goat";
console.log(goat);

let cow = {};

Object.setPrototypeOf(cow, animal);
cow.type = "cow";
console.log(cow);