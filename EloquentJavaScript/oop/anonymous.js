function Human(__name, _age){
    this.name = __name;
    this.age = _age;
}

function Employee(_name, _age, _designation){
    this._designation = _designation;

    this.setAge = newage => {
        console.log(`setting age from ${this.age} to ${this.newage}`);
    }
}