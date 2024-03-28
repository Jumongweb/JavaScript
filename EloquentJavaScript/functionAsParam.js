/* function higherOrderFunction(func){
    console.log("higher function");
    func();
}

function lowerOrderFunction(){
    console.log("lower function");
}

higherOrderFunction(lowerOrderFunction); */

 function higherOrderFunction(lowerFunction){
    console.log("higher function");
    lowerFunction();
}

higherOrderFunction(() => {
    console.log("lower function");
});
