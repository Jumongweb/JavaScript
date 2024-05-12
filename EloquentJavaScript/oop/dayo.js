class Dayo{
    constructor(name, age, size){
        this.__name = name;
        this.age = age;
        this.size = size;
    }

    setName(anyName){
        this.name = anyName;
    }
    setAge(anyAge){
        this.age = anyAge;
    }
    setSize(equipmentsize){
        this.size = equipmentsize;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
    getSize(){
        return this.size;
    }

}

let ayomide = new Dayo("Ayo", 14, 6);
let girlfriend = new Dayo();
girlfriend.setName("Secret");
girlfriend.setAge(24);
girlfriend.setSize(8);

console.log(ayomide);
console.log(girlfriend.getName());
console.log(girlfriend.getAge());
console.log(girlfriend.getSize());
