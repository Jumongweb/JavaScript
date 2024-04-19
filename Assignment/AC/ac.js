class AirConditioner {
    constructor(){
        isOn: false;

    }
    
    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
    }
}


module.exports = AirConditioner

