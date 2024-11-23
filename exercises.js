// Conditional Challanges

//1. Checking if a number is greater than another number:
//2. Checking if a string is equal to another string:
//3. Checking if a variable is a number or not:
//4. Checking if a boolean value is true or false:
//5. Checking if an array is empty or not:


//Array Challanges

/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, 
and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

const teaFlavors = ["green tea", "black tea", "oolong tea"]

const firstTea = teaFlavors[0]

console.log(firstTea)

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
const cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2]

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/


/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydeny"]
citiesVisited.push("Berlin")

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
teaOrders.pop()
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
const popularTeas = ["green tea", "oolong tea", "chai"]
const softCopyTeas = popularTeas
popularTeas.push("new")
console.log(popularTeas, softCopyTeas)
/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
const topCities = ["Berlin", "Singapore", "New York"]
const hardCopyCities = topCities.slice()

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokoyo", "Bangkok"]
let worldCities = asianCities.concat(europeanCities)
/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, 
and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and 
`"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBuketList = ["Kyoto", "London", "CapeTown", "Vancouver"]
let isLondonInList = cityBuketList.includes("London")
console.log(isLondonInList)


// Quiz
// What is the correct way to declare an array in JavaScript?
// a. let arr1 = [];
// b. let arr1 = {}
// c. let arr1 = "string"
// d. let arr1 = 23
// Which methods can add an element to the end of an array?
// What does the pop() method do in JavaScript arrays?
// Which method is used to remove the first element of an array?
// What is the output of the following code?let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// console.log(arr);
// How can you combine two arrays in JavaScript?

let var1 = ["mosab"]
let var2 = ["shaheen"]
let result = var1.concat(var2)


// console.log(result);

// Which of the following will correctly reverse an array?let arr = [1, 2, 3, 4, 5];
// How do you find the length of an array in JavaScript?




// name users values = "mosab", "awais", "shehroz", "hamza"

// let users = ["mosab", "awais", "shehroz", "hamza"] //.........
// let arrLength = users.length

// for(let i = 0; i <arrLength; i++){
//    if (users[i] == "shehroz"){
//       console.log(`${users[i]} is present.`);
//       console.log(users[i])
//       break;
//    }
//    // console.log(users[i])
   
// }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
	console.log(firstNames[i]+lastNames[i])
}

let str1 = "mosab"
let str2 = str1.toUpperCase()
console.log(str2)

