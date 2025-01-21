// const sum = (x,y) => {
//     return x+y
// }

// Closures

// const firstFunction = () => {
//     console.log("I am first function")

//     const secondFunction=()=>{
//         console.log("I am second function")
//     }

//     return secondFunction
// }

// const closure = firstFunction()// 2nd function is returned or return section ko kura aayera basxa
// console.log("closure: ", closure)//output: closure: [Function: secondFunction]
// closure()//2nd function call hunxa

// const  incrementDecrement = () => {
//     let count = 0
//     return {
//         increment: () => {
//             count++
//         },
//         decrement: () => {
//             count--
//         },
//         getCount: () => {
//             return count
//         }
//     }
// }

// const counter = incrementDecrement()//counter is a closure
// console.log("counter: ", counter)//output: counter: { increment: [Function: increment], decrement: [Function: decrement], getCount: [Function: getCount] }
// counter.increment()//count=1; counter ma dherai ota function bhako karan le counter.increment lekheko
// console.log("count: ", counter.getCount())//returns the value of count
// counter.decrement()
// console.log("count: ", counter.getCount())


// Callbacks

// const sum = (x,y,callback)=>{
//     callback(x+y)
// }
// sum(5,10,(s)=>{//s call back ma gayera basxa, ani compute bhaisakesi return hunxa value
//     console.log("The sum of the numbers is: ", s)
// });



// const fetchData = (callback) => {
//     let data = "Data from the server"

//     if(false){
//         callback(null, data)
//     }else{
//         callback("No data found", null)
//     }
// }
// fetchData((error, result)=>{
//     if(error){
//         console.log("Error: ", error)
//     }else{
//         console.log("Result: ", result)
//     }
// });

// Promise
// pending, resolved, rejected

// const newpromise = new Promise((resolve, reject)=>{
//     let data = "Data from the server"
//     console.log("resolve: ", resolve)
//     console.log("reject: ", reject)
//     if(data){
//         resolve(data)
//     }else{
//         reject("No data found")
//     }
// }
// )


// newpromise
// .then((result)=>{
//     console.log("Result: ", result)
// }).catch((error)=>{
//     console.log("Error: ", error)
// }).finally(()=>{
//     console.log("Promise done")
// })


// //Promise Chaining
// const func1 = () =>{
//     return new Promise((resolve, reject)=>{
//         resolve("Function 1")
//     });
// }
// const func2 = () =>{
//     return new Promise((resolve, reject)=>{
//         resolve("Function 2")
//     });
// }
// const func3 = () =>{
//     return new Promise((resolve, reject)=>{
//         resolve("Function 3")
//     });
// }

// const data = func1().then((result)=>{
//     console.log("Result1: ", result)
//     return func2()
// }).then((result)=>{
//     console.log("Result2: ", result)
//     return func3()
// }).then((result)=>{
// })

// // git clone https://github.com/banmala/learn-git