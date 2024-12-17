class Bank{
    #amount;
    constructor(name){
        this.name = name
        this.#amount = 30000
    }
    getAmount (){
        // functionality
        return `${this.#amount}`
    }
}

// let mosab = new Bank("mosab")
// console.log(new Bank("ubaid"))
// console.log(mosab.getAmount())


class Car {
    constructor(model, make){
        this.model = model
        this.make = make
    }
    start(){
        // how engine start... 
        // amount of petrol
        // how to use the desial
        return `${this.model} is started ...`
    }
}