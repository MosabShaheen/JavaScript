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