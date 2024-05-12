const display = document.getElementById("input");

function appendToInput(input){
    display.value += input;

}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (Error){
        display.value = "Error";
    }
    
}