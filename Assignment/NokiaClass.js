const prompt = require('prompt-sync')();

class NokiaClass{
    mainMenu(){
        const menu = `
        1. Phonebook 
        2. Message
        3. Chat 
        4. Call Register
        5. Tone
        6. Settings
        7. Call Divert 
        8. Games
        9. Calculator
        10. Reminder
        11. Clock 
        12. Profile
        13. SIM Services
        14. Exit
        `;
        
        console.log(menu);
        const response = parseInt(prompt("Reply: "));
        
        while(response != 14){


        switch(response){
            case 1: 
                    this.phonebook(); 
                    break;
            case 2: 
                    this.message();
                    break;
            case 3: 
                    this.chat();
                    break;
            case 4: 
                    this.callRegister();
                    break;
            case 5: 
                    this.tone();
                    break;
            case 6: 
                    this.settings();
                    break;
            case 7: 
                    this.callDivert();
                    break;
            case 8: 
                    this.game();
                    break;
            case 9: 
                    this.calculator();
                    break;
            case 10: 
                    this.remainder();
                    break;
            case 11: 
                    this.clock();
                    break;
            case 12: 
                    this.profile();
                    break;
            case 13: 
                    this.simService();
                    break;
            case 14: this.exit();
                    break;
            default:
                console.log("Invalid response");
        }
        this.mainMenu();
        if (response == 14){
            break;
        }        
        }
    
    }

    phonebook(){
    console.log(`
        PHONEBOOK 
        1. Search
        2. Service Nos
        3. Add Name
        4. Erase
        5. Edit
        6. Assign tone
        7. Send B' Card
        8. Options
        9. Speed Dials
        10. Voice Tags`);
        const phonebook = parseInt(prompt("Reply: "));

    switch (phonebook){
    case 1: console.log(`
        1. Search
        Search`);
        break;
    case 8: console.log(`
        8. Option
        1. Type of view
        2. Memory status`);
        break;

    }

    }

    message() {
        console.log(`
        Message
        1. Write message
        2. Inbox
        3. Outbox
        4. Picture messages
        5. Templates
        6. Smileys
        7. Message settings");
        8. Inbox");
        9. Outbox");
        10. Picture messages`);

    let message = parseInt(prompt("Enter response: "));
        
    switch (message){
        case 1: console.log(`
        Current not available
        `);
        break;
        
        case 7: console.log(`
        Message settings
        1. Set 1
        2. Common`);

        let messageSettings = parseInt("Enter response: ");

        switch (messageSettings){
        case 1: console.log(`
        Set 1
        1. Message centre number
        2. Message sent as
        3. Message validity`);	
        break;
        }
        
        case 2: console.log(`
        Common
        1. Delivery reports
        2. Reply via same centre
        3. Character support`);
        break;
        }	

    }

    chat(){
        console.log(`
    3. Chat
    ---------- `);
    }

    callRegister(){
        console.log(`
        CALL REGISTER
        1. Missed calls
        2. Received calls
        3. Dialled numbers
        4. Erase recent call lists
        5. Show call duration
        6. Show call costs
        7. Call cost settings
        8. Prepaid credit
        `);
        
    let callRegister = parseInt(prompt("Enter response: "));
    switch (callRegister){
        case 1: console.log(`
        Missed calls
        Currently unavailable
        `);
        break;
        
        case 5: console.log(`
        SHOW CALL DURATION
        1. Last call duration
        2. All calls' cost
        3. Received calls' duration
        4. Dialled calls' duration
        5. Clear timers`);
        break;
        
        case 6: console.log(`
        SHOW CALL COSTS
        1. Last call cost");
        2. All calls' cost");
        3. Clear counters`);
        break;
        
        case 7: console.log(`
        CALL COST SETTINGS
        1. Call cost limit");
        2. Show costs in`);
        break;
        }

    }

    tone() {
        console.log(`
        Tones
        1. Ringing tone
        2. Ringing volume
        3. Incoming call alert
        4. Composer
        5. Message alert tone
        6. Keypad tones
        7. Warning and game tones
        8. Vibrating alert
        9. Screen saver`);
    }

    settings() {
        console.log(`
        SETTINGS
        1. Call settings
        2. Phone setting
        3. Security settings
        4. Restore factory settings
        `);
        let settings = parseInt(prompt("Enter response: "));

        switch (settings) {
        case 1: console.log(`
            CALL SETTINGS
            1. Automatic redial
            2. Speed dialling
            3. Call waiting options
            4. Own number sending
            5. Phone line in use
            6. Automatic answer`);
            break;
        case 2: console.log(`
            PHONE SETTINGS
            1. Language
            2. Cell info display
            3. Welcome note
            4. Network selection
            5. Lights
            6. Confirm SIM service actions`);
            break;
        case 3: console.log(`
            SECURITY SETTINGS
            1. PIN code request
            2. Call barring service
            3. Fixed dialling
            4. Closed user group
            5. Phone security
            6. Change access codes`);
            break;
        }
    }

    callDivert() {
        console.log(`
        CALL DIVERT
        Currently not available`);
    }

    game() {
        console.log(`
        Games
        Currently not available`);
    }

    calculator(){
       let rightOperand = parseInt(prompt("Enter right operand: "));
       let leftOperand = parseInt(prompt("Enter left operand: "));
       let operator = prompt("Enter operator: ");
        console.log(this.myCalculator(operator, leftOperand, rightOperand));
    }

    myCalculator(operator, leftOperand, rightOperand){
    switch(operator){
        case "+" : return leftOperand + rightOperand;
        case "-" : return leftOperand - rightOperand;
        case "/" : return leftOperand / rightOperand;
        case "*" : return leftOperand * rightOperand;
        default : return NaN;
    }
    }

    remainder() {
        console.log(`
        Reminders
        Currently not available
        `);
    }

    clock(){
        console.log(`
        Clock
        1. Alarm clock
        2. Clock setting
        3. Date setting
        4. Stopwatch
        5. Countdown timer
        6. Auto update of date and time`);
    }

    profile(){
        console.log(`
        PROFILES
        Currently not available`);
    }

    simService() {
        console.log(`
        SIM services
        Currently not available`);
    }
    exit() {
        console.log("Exit.....")
        process.exit();
    }

}



Nokia = new NokiaClass();
Nokia.mainMenu();