//1. Checking if a number is greater than another number:


// const num1 = 18;
// const num2 = 24;

// if (num1>num2) {
//     console.log(`Number1: ${num1} is greater than Number2: ${num2}`);
    
// } else {
//     console.log(`Number1: ${num1} is less than Number2: ${num2}`);
// }


//2. Checking if a string is equal to another string:

// const str1 = "Home"
// const str2 = "House"

// if(str1===str2){
//     console.log("Both strings are equal");
    
// }else{
//     console.log("both strings are not equal");
    
// }

//3. Checking if a variable is a number or not:

const var1 = 123
// const checkType = typeof var1

// console.log(typeof checkType, checkType);


if(typeof var1 == "number"){
    console.log(`the data type of var1: ${var1} is number`);
    
}else{
    console.log(`the data type of var1: ${var1} is not a number`);
}

//4. Checking if a boolean value is true or false:

const boolean = true

if (boolean){
    console.log("Boolean is true");
    
}else{
    console.log("Boolean is false");
    
}

//5. Checking if an array is empty or not:

const arr1 = [];

// console.log("The array length is ", arr1.length);


if (arr1.length>=1) {
    console.log(`This array is not empty ${arr1}`);
    
}else{
    console.log(`This array is empty ${arr1}`);
}