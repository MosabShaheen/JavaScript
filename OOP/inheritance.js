class Birds {
    constructor(name){
        this.name = name
        this.fly = `this bird can fly..`
    }
}
class Legs extends Birds{
    constructor(name){
        this.name = name
        this.fly = `this bird can fly..`
    }
    two () {
        return `${this.name} has two legs`
    }
}

// console.log(new Legs("sparrow"));
let sparrow = new Legs("sparrow")
console.log(sparrow.fly)
