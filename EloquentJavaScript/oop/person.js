
function Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log(this.name + " is " + age + " years");
    }

}

const personOne = new Person("Jumoke", 13);
const personTwo = new Person("General", 20);

console.log(personOne.name);
personOne.sayName();
console.log(personTwo.name);
personTwo.sayName();