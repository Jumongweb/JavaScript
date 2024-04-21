class AirConditioner {

    constructor(){
        this.isOn = false;
        this.temperature = 16;
    }
    isAcOn(){
        return this.isOn;
    }

    toggleAc(){
        this.isOn = !this.isOn;
    }


    increaseTemp(){
        if (this.isOn && this.temperature > 15 && this.temperature < 30){
            this.temperature++;
        }
        
    }

    decreaseTemp(){
        if (this.isOn && this.temperature > 16 && this.temperature <= 30){
            this.temperature--;
        }
        
    }
    
    getTemp(){
        return this.temperature;
    }

    remote(temperature){
        if (temperature >= 16 && temperature <= 30){
            this.temperature = temperature;
        }
    }

    
}


module.exports = AirConditioner;

