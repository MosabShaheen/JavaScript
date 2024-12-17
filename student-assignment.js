/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` 
and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
const cities = ["London", "New York", "Paris", "Berlin"];
//original array
const visitedCities = [];
//empty array to store values
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  //checks condition if the iteration reaches to paris continue statement skips that value and move to the next value
  visitedCities.push(cities[i]);
}
//adds the cities values in new array using push
console.log(visitedCities);
//output ["London", "New York", "Berlin"]

/*Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".*/
    // number() used to convert the string into number
    //isNaN used to check if the conversion failed lets say if the result is not a number
    // if the conversion fails function returns the string not a number
    // if the conversion succeeds, function returns the converted string
    //otput 123
    function stringToNumber(str) {
      const num = Number(str);
      return isNaN(num) ? "Not a number" : num;
    }
    
    console.log(stringToNumber("sgdg"));
/*Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.*/
function flipBoolean(input) {
  return !Boolean(input);
}

console.log(flipBoolean(true));  // Output: false
console.log(flipBoolean(0));      // Output: true
//- flipBoolean function takes any input and converts it to its boolean equivalent using the Boolean() function.
//The ! operator is then used to flip the boolean value. This means that true becomes false, and false becomes true.
//The function returns the flipped boolean value.
/*Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/
function whatAmI(input) {
if (typeof input === 'number') {
  return "I'm a number!";
} else  (typeof input === 'string') {
  return "I'm a string!";
} 
}
console.log(whatAmI(123));  // Output: "I'm a number!"
console.log(whatAmI(abc));  // Output: "I'm a string!"
// The whatAmI function takes an input and uses the typeof operator to determine its type.
//If the input is a number, the function returns the string "I'm a number!".
//If the input is a string, the function returns the string "I'm a string!".
/* Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.*/
function isItTruthy(input) {
  if(input) {
      return "It's truthy!";
  }
  else {
      return "It's falsey!";
  }
}
console.log(isItTruthy(true)); //output "It's truthy!"
console.log(isItTruthy(false)); //output "It's falsey!"

