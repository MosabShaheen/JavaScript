// class Car{
//     constructor(make, model){
//         this.make = make
//         this.model = model
//     }
//     start () {
//         return `${this.model} is starting ...`
//     }
// }

// let toyota = new Car("Suzuki","Mehran")
// console.log(toyota.start(), toyota.make)

class Form {
    constructor(name,fathername, age){
        this.name = name
        this.fathername = fathername
        this.age = age
    }
}

class Admin extends Form{
    admin () {
        return `${this.name} you have loged into the backend.`
    }
}
let backendAdmin = new Admin ("Jhon", "Charles",30)

console.log(backendAdmin.admin())