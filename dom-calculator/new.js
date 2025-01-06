function add(){
    return function(num1, num2){
        return num1+num2
    }
}
let newadd = add()
console.log(newadd(2,3))