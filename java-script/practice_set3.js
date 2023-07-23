console.log("here i am printing marks of a student of five subjects")

let marks = {

    maths: 56,
    english: 89,
    science: 44,
    french: 90,
    social_science: 67

}
for (let numbers in marks) {
    console.log("let's see marks and subjects of a student " + numbers + "lets see marks of each subject " + marks[numbers]);
}
// this above method is right to print object by using forin loop, but here we need to use only for loop without any advanced modification kind of thing of loop
// let i;
// let students = {

//     jyotirmay: 233,
//     ankit: 453,
//     sweata: 293,
//     jay: 189,
//     anishka: 441
// }
// // let i;
// for (i = 0; i < object.keys(students).length; i++) {
//     console.log("now i will marks of some of the student of my class" + object.keys(students)[i])

let roll_number = {
    jyoti: 56,
    bose: 44,
    pussy: 22,
    mobb: 25

}
for (let children in roll_number) {
    console.log("printing values of above given object " + children + "values of the variables also need to be there " + roll_number[children])
}

let nuum
num=prompt("enter your favourite number")
num=Number.parseInt(num)

if(num==45){
    console.log("you entered right desired number which i wnat form your side")
}
else {
    console.log("please try again")
}
let desired =56
let i 
while(i!=desired){
    i=prompt("enter your desired number whatsoever you prefer")
    i=Number.parseInt(i)
}
console.log("now you entered correct desired number")

function mean(a,b,c,d){
    return((a+b+c+d)/4)
}
console.log(mean(4,7,5,9))