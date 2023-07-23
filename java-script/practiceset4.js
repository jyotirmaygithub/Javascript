let tommorow = `tommorow on the friday night i am plainning to go to jaipur for vacation`
let s = ""
for (let jaipur in tommorow) {
    console.log(jaipur)

}
for (let i = 0; i < tommorow.length; i++) {
    console.log(tommorow[i])
    s += tommorow[i]
    console.log(s)
}
console.log(s)
// to print string in one line by using loops you can print values of string in one line

let pratice = "this is my world to develop skills and explore"
let search ="develop"
let voo ="is"

console.log(pratice.includes(search))
// console.loog(pratice.includes(this)) //we cannot print it like this
// i dont know this code is not working, but it was working in the online compiler
// we use this includes thing in this syntax to check that word or thing is their or not in the original line of code 

// now i am using startwith fuction of String, which is upgrated version of above includes

console.log(pratice.startsWith("this" ))
console.log(pratice.startsWith("is",5)) //this number specify the exact position of the word which we are writing

console.log(pratice.endsWith("my",10))

let boobs = "please give rs 10000"
console.log(boobs.slice(15))
console.log(boobs.slice(7,11))
let cute =boobs.slice(15)
cute = Number.parseInt(cute)
console.log( cute)
console.log(typeof cute)


console.log("i need to change four characters in a string ")
let a = "J"
let b="S"
let c="A"
let d="N"

let agirl =`i need `

// main thing to consider here in the end is strings are immutables (it implies we cannot change values of the original string) its not values of a number which we can change easily 