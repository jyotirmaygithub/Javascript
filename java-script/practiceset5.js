let henry = [654, 4543, 45, 45, 35]
let hoo = prompt()
hoo = Number.parseInt(hoo)
henry.push(hoo)
console.log(henry)
//  push is a funtion which belong to array

let ooo = [5454, 435, 5]
let kk;
do {
kk = prompt("enter number")
kk = Number.parseInt(kk)
ooo.push(kk)
}while (kk != 0) 
console.log(ooo)

// another question where i will use fliter funtion of array to filter elements

let hoka = [454,3435,5,4,5,3,1,2,4,634,43,354]
let filter_something = hoka.filter((filers) => {
    return  filers > 10
})
console.log(filter_something)

let mapping = [4,5,6,7,8,9]
let uu = mapping.map((going) =>{
return going * going 
})
console.log(uu)
// this is the rigth to write a funtion in appropriate terms 


let array = [];
let no;
do{
     no = prompt("enter natural numbers in acending order")
    no = Number.parseInt(no)
    array.push(no)
    console.log(array)
}while (no < 10)

console.log(array)

let calulator = array.reduce((pp,ii) => {
    console.log(pp,ii)
    return pp * ii;
})
console.log(calulator)

