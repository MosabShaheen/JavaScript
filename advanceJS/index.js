// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         return resolve("Hello world")
//     },4000)
// })
// async function getPromise(){
//     let newValue = await promise.then((value)=>{
//         console.log(value)
//     })
//     console.log("This should run at the end")
//     return(newValue)
// }
// getPromise()

async function fullProgram() {
    function saySomething(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("something" + x);
            }, 2000);
        });
    }
    async function talk(x) {
        const words =  await saySomething(x);
        console.log(words);
    }
    await talk(2);
    await talk(4);
     talk(8)
    talk(9);
}
fullProgram()