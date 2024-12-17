let genericcomputer = {
    cpu: "12",
    ports: 4
}
let hp = {
    screen: "15",
    mouse: "mousepad",
    // __proto__: genericcomputer

}

// console.log(hp.__proto__)
Object.setPrototypeOf(hp,genericcomputer)

// console.log(Object.getPrototypeOf(hp))

// let car = {
//     model: "Civic",
//     make: "honda",
//     start: function (){
//         return `${this.model} is starting ...`
//     }
// }

// car.model = "hyb"
// console.log(newcar.start())

function Car(model, make){
    this.model = model
    this.make = make
    this.start = function (){
        return `${this.model} is starting ... ${this.make}`
    }
}

let toyota = new Car("Grande", "Toyota")
console.log(toyota.start())
let honda = new Car("Civic", "Honda")
console.log(honda.start())