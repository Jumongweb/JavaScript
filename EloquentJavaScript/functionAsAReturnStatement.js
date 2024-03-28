function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;
    }
}

console.log(greetings("Good morning!")("John"));