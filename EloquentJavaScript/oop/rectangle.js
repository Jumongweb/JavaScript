const shape = require("./shape");

class Rectangle extends shape{
    constructor(name, sideOne, sideTwo){
        super(name);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
    }

    setName(anyName){
        this.__name = anyName;
    }
    getName(){
        return this.__name;
    }

    setSideOne(firstSide){
        this.sideOne = firstSide;
    }

    setSideTwo(secondSide){
        this.sideTwo = secondSide;
    }

    getArea(){
        return this.sideOne * this.sideTwo;
    }

    isSquarish(){
        if(this.sideOne === this.sideTwo){
            return true;       
        }
        else {
            return false;
        }
    }

}

let rectangleOne = new Rectangle();
rectangleOne.setName("Rectangle");
rectangleOne.setSideOne(10);
rectangleOne.setSideTwo(8);
console.log(rectangleOne.getName());
console.log(rectangleOne.isSquarish());
console.log(rectangleOne.getArea());