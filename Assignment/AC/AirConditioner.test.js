let AirConditioner = require("./AirConditioner.js");

describe("Air Conditioner", ()=>{
    let ac;
    beforeEach(()=>{
        ac = new AirConditioner();
    })

    test("Test that air condition is off by default", ()=>{
        let result = ac.isAcOn();
        expect(result).toBe(false);
    })

    test("Test ac is off, turn ac on", ()=>{
        ac.toggleAc();
        let result = ac.isAcOn();
        expect(result).toBe(true);
    })

    test("Test ac is on, turn it off and turn it on again", ()=>{
        ac.toggleAc();
        let result = ac.isAcOn();
        expect(result).toBe(true);
        ac.toggleAc();
        result = ac.isAcOn();
        expect(result).toBe(false);
        ac.toggleAc();
        result = ac.isAcOn();
        expect(result).toBe(true);

    })

    test("Test that air condition temperature is 16 by default", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        expect(result).toBe(16);
    })

    test("Test increase temperature when on", ()=>{
        ac.toggleAc();
        ac.increaseTemp();
        let result = ac.getTemp();
        expect(result).toBe(17);
    })

    test("Test that temperature cannot increase if ac is off", ()=>{
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(16);
    })

    test("Test increase temperature three times and temperature is at 19", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        ac.increaseTemp();
        ac.increaseTemp();
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(19);
    })

    test("Test decrease temperature", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(17);
        ac.decreaseTemp();
        result = ac.getTemp();
        expect(result).toBe(16);
    })

    test("Test that temp is at 19, reduce 3 times and temp", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.increaseTemp();
        ac.increaseTemp();
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(19);
        ac.decreaseTemp();
        ac.decreaseTemp();
        ac.decreaseTemp(); 
        result = ac.getTemp();       
        expect(result).toBe(16);
    })

    test("Test that temperature cannot decrease if ac is off", ()=>{
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(16);
    })

    test("Test that temperature cannot go below 16", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.decreaseTemp();
        ac.decreaseTemp();
        result = ac.getTemp();
        expect(result).toBe(16);
    })

    test("Test that temperature cannot be increase above 30", ()=>{
        ac.toggleAc();
        let result = ac.getTemp();
        expect(result).toBe(16);
        for (let i = 0; i < 14; i++){
            ac.increaseTemp();
        }
        result = ac.getTemp();
        expect(result).toBe(30);
        ac.increaseTemp();
        ac.increaseTemp();
        result = ac.getTemp();
        expect(result).toBe(30);
    });

    test("Test to increase temperature with remote", ()=>{
        let isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(false);
        ac.toggleAc();
        isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(true);
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.remote(19);
        result = ac.getTemp();
        expect(result).toBe(19);
    });

    test("Test to decrease temperature with remote", ()=>{
        let isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(false);
        ac.toggleAc();
        isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(true);
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.remote(29);
        result = ac.getTemp();
        expect(result).toBe(29);
        ac.remote(17);
        result = ac.getTemp();
        expect(result).toBe(17);
    });

    test("Test temperature is at 16, remote set temperature below 16, temperature stays at 16", ()=>{
        let isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(false);
        ac.toggleAc();
        isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(true);
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.remote(13);
        result = ac.getTemp();
        expect(result).toBe(16);
    });

    test("Test temperature is at 16, remote set temperature above 30, temperature stays at 16", ()=>{
        let isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(false);
        ac.toggleAc();
        isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(true);
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.remote(33);
        result = ac.getTemp();
        expect(result).toBe(16);
    });

    test("Test change temperature when ac is off, temperature remain the same", ()=>{
        let isPowerOn = ac.isAcOn();
        expect(isPowerOn).toBe(false);
        let result = ac.getTemp();
        expect(result).toBe(16);
        ac.remote(13);
        result = ac.getTemp();
        expect(result).toBe(16);
    });
    
})