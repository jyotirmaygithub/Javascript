let num,sum=0,add=0;
console.log("lets enter your number")
num = prompt("till what number you want counting of numbers")
num = Number.parseInt(num)

for(var i=0;i<=num;i++){
sum=sum+i;
add +=i;
// so these above both form are right to add numbers 
console.log(i);
}
console.log(sum);
console.log(add);
console.log("doing experiment" + i);

let num1,j,multi=1;
console.log("now we will get factorial of numbers");
num1 = prompt("enter your favourite number for calculationn")
num1 =Number.parseInt(num1);

for(j=1;j<=num1;j++){
    multi=multi*j;
    console.log(j)
}
console.log(multi)

// some advance verion of loops are  

// for in loop
let goat ={
    name : "jyotirmay gupta",
    roll_numnber :45,
    went : true,
    another_name :"satvik gupta"
}
for(let values in goat){
    console.log("now i will focus on printing keys of above object " + values);
//  for in alway use for printing keys of one object and index values of array, but to print value of keys we have a way
console.log("printing values together with keys " + values + "these are values " + goat[values]);
}
let cow={
    bread : "american one",
    number_of_cows : 5,
    region : "uttar pradesh state of india in the middle of the country",
    age : 22
}
// for(let yoo of cow){
//     console.log(yoo);
// }
let string= "my name is jyotirmay gupta"
for(let oo of string){
    console.log(oo)
}
let numbers_some = ['34','65','11','767','88']
for(let cal of numbers_some){
    console.log("printing value one by one" + cal)
}
//so in the end i learn one thing that we cannot use loop of for printing values of object (there is must be another way to do it )