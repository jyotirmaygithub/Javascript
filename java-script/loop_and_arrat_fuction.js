let arr = [34, 45, 4535, 5456, 454]


// for each loop with fuction for array 

arr.forEach((entity) => {
    console.log(entity * entity)
})
console.log(arr)
// orginality will not change
// we  can say this is a kind of short cut method to print Element without use of basic loop

// array from fuction to facilate array

let oo = "jyotirmay gupta"
let change = Array.from(oo)
console.log(change)
// console.log(oo)
// we use this fuction to convert string into an array

// we can use for in and for of loops to print index values and element of an array

let mmm = [4334, 3454, 454, 45] //print index value
for (let u in mmm)
    console.log(u)

let bbb = [454, 6, 576.656, 767.65]  //print element of the array
for (let h of bbb)
    console.log(h)

// we can print element of array by using for in loop but with little variation

let zoo = [232, 434, 565, "hdfsd"]
for (let g in zoo)
    console.log(zoo[g])

// map fuction of array which is similar of for each loop but with little difference
let satbo = [232, 343, 24, 54.45, 454]
//  satbo.map((fuckers)=>{
//     console.log(fuckers)
//     // by using doing this its  doing same  fuction of for each array
// }) 

let uuy = satbo.map((suck) => {
    console.log(suck)
    return suck;
   
})
// we can make new array
console.log(satbo)
console.log(uuy)
 //i dont why but things is not working properly

 let mom =[323,3445,"efgfd,4",655654.4454]
 mom.map((ruby, index,array) =>{
console.log(ruby,index, array) //by writting like this we can use three thinhgs at one point of time
return ruby ;
 }) //this above things you can same apply in for each loop which we made above
 


// there is another fuction in the name of fliter which we use to filter the elemenet of array

// let use fliter function of array to filter elements

let sister = [444,55,652,344,6454]

let doit = sister.filter((secondary) => {
    return secondary > 770;

})
console.log(doit)


let sibling =[43,54,2,43,54]
let ppo = sibling.reduce((num1,num2) =>{
    return num1 + num2;

})
console.log(ppo)

// lets see another way of doing similar above thing

let reciver = (f1,f3)=>{
    return f1 +f3;
}
let some_change = sibling.reduce(reciver)
console.log(some_change)
