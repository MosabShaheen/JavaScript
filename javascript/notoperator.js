// let isLoggedin = false

// let user = prompt("What is your name? ")

// if(user === "mosab"){
//     if (!(isLoggedin)){
//         console.log("user is logged in",isLoggedin);
        
//     }
// }

// for(let i = 0; i <= 100; i++){
//     console.log("This is line "+ i);
// }
// // console.log("this is line")


const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: null },
    { name: "Diana", active: undefined },
  ];
  
  const inactiveUsers = [];
  
  for (const user of users) {
    // Convert 'active' to a boolean and check if it's false
    //  if (user.active === false || user.active === null || user.active === undefined) {
    if (!user.active) {
      inactiveUsers.push(user.name); // Add inactive user's name to the list
    }
  }
  
  console.log("Inactive Users:", inactiveUsers);
  // Output: Inactive Users: [ 'Bob', 'Charlie', 'Diana' ]