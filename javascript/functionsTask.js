/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea){
    return "Making " + typeOfTea 
}
const teaOrder = makeTea("oolong tea")

  /* 
  2. Create a function named `orderTea` that takes one parameter, 
  `teaType`. Inside this function, create another function named 
  `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
  Call `confirmOrder` from within `orderTea` and return the result.
  */

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`
    }
    return confirmOrder()
}("green tea")


  /* 
  3. Write an arrow function named `calculateTotal` that takes two 
  parameters: `price` and `quantity`. The function should return the 
  total cost by multiplying the `price` and `quantity`. 
  Store the result in a variable named `totalCost`.
  */
  const calculateTotal = (price, quantity) => price*quantity

  const totalCost = calculateTotal(50, 5)

  /* 
  4. Write a function named `processTeaOrder` that takes 
  another function, `makeTea`, as a argument and calls it with 
  the argument `"earl grey"`. 
  Return the result of calling `makeTea`.
  */
 function makeTea(teaType){
    return `making ${teaType}`
 }
 function processTeaOrder(tea){
    return tea("green tea")
 }

console.log(processTeaOrder(makeTea))
  
  /* 
  5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
  Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
  */

// Playing with Types
// Task 1:

// Write a function stringToNumber that takes a string input 
// and tries to convert it to a number. If the conversion fails, 
// return "Not a number".


// Task 2:

// Write a function flipBoolean that takes any input and converts it to its 
// boolean equivalent, then flips it. For example, true becomes false, 0 
// becomes true, etc.


// Task 3:

// Write a function whatAmI that takes an input and returns a string 
// describing its type after conversion. If it's a number, return "I'm 
// a number!", if it's a string, return "I'm a string!"


// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!"
//  if the value is truthy in JavaScript, 
//  or "It's falsey!" if it's falsey.

const newFun =function (){

}