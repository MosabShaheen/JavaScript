// let reslutpara = document.getElementById("result")
// let input1 = document.getElementById("input1")
// let input2 = document.getElementById("input2")
// input1.addEventListener("select",)
// class Calculator {
//     constructor(num1, num2) {
//         this.num1 = Number(num1)
//         this.num2 = Number(num2)
//     }
//     add() {
//         return this.num1 + this.num2
//     }
//     subtract() {
//         return this.num1 - this.num2
//     }
//     multiply() {
//         return this.num1 * this.num2
//     }
//     divide(num1, num2) {
//         return this.num1 / this.num2
//     }
//     modulas() {
//         return this.num2 % this.num1
//     }
//     exponential() {
//         return this.num1 ** this.num2
//     }
// }
// document.getElementById("one").addEventListener("click",function(){
//     input1.value += "1"
// })
// document.getElementById("two").addEventListener("click",function(){
//     input1.value += "2"
// })
// document.getElementById("three").addEventListener("click",function(){
//     input1.value += "3"
// })
// document.getElementById("four").addEventListener("click",function(){
//     input1.value += "4"
// })
// document.getElementById("five").addEventListener("click",function(){
//     input1.value += "5"
// })
// document.getElementById("six").addEventListener("click",function(){
//     input1.value += "6"
// })
// document.getElementById("seven").addEventListener("click",function(){
//     input1.value += "7"
// })
// document.getElementById("eight").addEventListener("click",function(){
//     input1.value += "8"
// })
// document.getElementById("nine").addEventListener("click",function(){
//     input1.value += "9"
// })
// document.getElementById("zero").addEventListener("click",function(){
//     input1.value += "0"
// })
// function getCalculator() {
//     let number1 = input1.value;
//     let number2 = input2.value;
//     console.log(number1.number2)
//     return new Calculator(number1, number2);
// }
// document.getElementById("add").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.add()
//     reslutpara.textContent = `Result: ${result}`
// })
// document.getElementById("substract").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.subtract()
//     reslutpara.textContent = `Result: ${result}`
// })
// document.getElementById("multiply").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.multiply()
//     reslutpara.textContent = `Result: ${result}`
// })
// document.getElementById("divide").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.divide()
//     reslutpara.textContent = `Result: ${result}`
// })
// document.getElementById("exponential").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.exponential()
//     reslutpara.textContent = `Result: ${result}`
// })
// document.getElementById("modulas").addEventListener("click", function () {
//     let calc = getCalculator()
//     let result = calc.modulas()
//     reslutpara.textContent = `Result: ${result}`
// })

let num = document.getElementById("one")
let num1 = document.getElementById("two")
let returnResult = document.getElementById("answer")
console.log(num,num1,returnResult)
class Calculator {
    constructor(num, num1){
        this.num = num
        this.num1 = num1
    }
    Add() {
        return this.num + this.num1
    }
    Subtract(){
        return this.num - this.num1
    }
    Multiply(){
        return this.num * this.num1
    }
    Divide(){
        return this.num / this.num1
    }
}
// let cal = new calculator()
function callCalc(){
    let value1 = num.value
    let value2 = num1.value
    return new Calculator(Number(value1),Number(value2))
}
document.getElementById("add").addEventListener("click",function(){
    // let a =(Number (num.value))
    // let b = (Number(num1.value))
    // answer.textContent= cal.Add(a,b)
    let calc = callCalc()
    answer.textContent = calc.Add()
})
document.getElementById("sub").addEventListener("click",function(){
    let calc = callCalc()
    answer.textContent = calc.Subtract()
  
    
})
document.getElementById("mul").addEventListener("click",function(){
    let calc = callCalc()
    answer.textContent = calc.Multiply()
  
    
})
document.getElementById("divide").addEventListener("click",function(){
    let calc = callCalc()
    answer.textContent = calc.Divide()
})
