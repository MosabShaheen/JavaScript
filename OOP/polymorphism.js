class Birds{
    constructor(name){
        this.name = name
    }
    static fly(){
        return `Flying ...`
    }
}
console.log(Birds.fly());


// let sparrow = new Birds("sparrow")
// console.log(sparrow.fly())



// class Penguin extends Birds{
//     fly(){
//         return`Penguin can not fly.`
//     }
// }

// let penguin = new Penguin()
// console.log(penguin.fly())