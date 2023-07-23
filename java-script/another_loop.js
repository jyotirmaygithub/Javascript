// here we learn about another concept  of java script which is loops another than for loops

let abbb = prompt("enter your favourite number for further calculation")
abbb= Number.parseInt(abbb)
console.log(typeof abbb)


// i am using this same file to write function here in this javascript the concept is easy but little bit different from c language

// we will do fuction calling

function dosome (x,y,z){
    console.log("i made one operation sussessfully")
    return (x+y);
}
function remainder(x,y,z){
    return (z%x)+y
}
const jyoti=(er,a,ghg)=>{
    console.log("in this i am using three variable, so see what will be the result")
    return Math.round(er/a)+(ghg/a)
}
// function 

// let a=8,b=9,d=454,er=444,ghg=232;

// console.log("lets practice some new concept of this language which is fuctions")

// console.log("this is simple one method to practice arthematic operation ",a+b)
// // now lets try another method to do arthematic operation which is function, the main advantage of 
// // fuction is - we can use it multiple times for our convince
// console.log("lets see addition of some numbers", dosome(er,ghg))

// we have some other method to make function without use of funtion for this concerned activity

console.log("noe we will see one another mehtod of function",jyoti(56,34,89))

// we can also make fuction without use of any values and variable

