
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


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/


/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
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

// create a for loop, add from 1 to 5 and store it in the variable 





// Task 1: Simulating Asynchronous Behavior

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs 
// “Task finished”.

// Use setTimeout to simulate this behaviour.



// Task 2: Simulate Multiple Async Tasks with Different Delays

// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.


// Task 3: Async-Await with Promise.all

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()