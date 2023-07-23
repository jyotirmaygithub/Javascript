// in total we have three ways to execute string in this javascript language 

// lets  try all one by one 
// making strings in javascript is little bit different or i can say its bit simplier

// first method

let  self_name="jyotirmay gupta"
console.log(self_name)

// second method
// this will be of single quotes but the main thing, which make it different is about,not writting code in similar pattern of c language 

let sentence = 'just after some minutes i need to attend some insignificant classes or lectures'
console.log(sentence)

// when we are making string so at that point of time we cannot use both kind of quotes at the same point of time
// it will be inappropiate and complier like thing will show error 

// lenght - we can also find lenght of a string by using lenght fuction
console.log(sentence.length)

// third method 
// temperate literals in string
let neighour = `my nebours are not good i dont want to live nearby of them`
// this is third method in which we can use these signs  ``  to make strings
console.log(neighour)

// fourth thing of string
// this below method  known as string interpolation


let student1 ='joydeep roy'
let student2='bose bhaiya'

let combination = `${student1} and ${student2} are both good friends of each other`
console.log(combination)

// through this string interpolation i can subsitute value of variable in between string
// for this subsitution purpose we just need to use  curry brakets and dollar sign to make it working


// lets try new thing in the name of escape sequence characters

let quotes = "my mother name is pushpa gupta, she belong from uttar pradesh\"s"
let another_son ='my son is i dont know \t s'
let hello ="               HELLO \\rworld     "
// thing need to be same everywhere, especially in this above thing
console.log(quotes)
console.log(another_son)
console.log(another_son.length)
console.log(hello.length)
// here main thing is this---> "\'" we take it as a one character not two charater 
console.log(quotes.toUpperCase())
console.log(hello.toLowerCase())

// lets see some of the methods/function of the string 

let sleeve =`see i bought new laptop sleeve`
console.log(sleeve.slice(6,7))
console.log(sleeve.slice(-9))  //these both are for printing some part of the string

console.log(sleeve.replace("sleeve", "it\"s cover bhenchod saale englishman"))// we can use only one replacement at one point of time

let jyouti ="change your name spelling "
let sat = "this my another name of home"

console.log(jyouti.concat("jyotirmay ",sat," this is a kind of a secreat name "))
// we use concatation function to add multiple strings for better results

let soul ="       my soul lives inside smile of girls    "
console.log(soul.trim())
// this method remove insignificant space which we sometimes leave in ignorance

// these are some of the fuction of the string which i learnt with the help of code with harry videos for learning more please visit google 
// and one more thing to point out dont fear from anything

let me= "i can define myself as a explorer"
// let part = me.substring
console.log(me.substring(5,17))
console.log(me.substring(5))
// we have substring method of the string community we can write in two ways

let news = `fucking media`
console.log(news.padStart(33, "fuck you"))
console.log(news.padEnd(29, "you !"))
// this is a kind of repietation type of string

console.log(news.charAt(1)) //this numbering is based on index number be aware of it in the printing of the string



