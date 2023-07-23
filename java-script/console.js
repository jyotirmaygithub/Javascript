// to see different kind of function of console you just need to do this as follow


console.log(console)

// 1. mehod of console - assert
// purpose of this is to check condition, if write something wrong condition then it will through error instead it will display things in a smooth way

console.assert(67>6)

// 2. methfod 
// console clear we use to clear console of the server

console.clear()


// 3. method 
// console table it is very helpful in representing objects in the form of the table 

let obj = {
    home_name : "jyotirmay ",
    roll_number : 45,
    hobby : "making continous effort for self improverment, by doing bit by bit"
}

console.table(obj)

// 4. method 
// console warring function we have to give warning to the user regarding soem thing

console.warn("don't masturbate too much, instead you will loose your cognitive abalities")

// 5. method 
// console info we use it give some information to the user
// one other thing that both log and info in console method have similarity 

console.info("do as much practice possible to become proficient in this codding skill")

// 6. method 
//  console error for showing error regarding anything 

 console.error("dont waste your precios time in irrelevant stuffs")

//  7. method 
//  console time method is very essential to show time taken by any fuction in its execution

 console.time("time taken by varriable")
 
let uu =90 +564
console.log(uu)

console.timeEnd("time taken by varriable")

