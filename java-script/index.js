
console.log("hello world");
// alert("you need acess to scroll this page");
console.warn("this should not be done by you");
console.error("you are not doing things in right way thatswhy it is showing error")

// these are number data type in java script

var number1 = 45;
var number2 = 565;
console.log(number1 + number2);

//data type to print big integer value
//in simple data type you cannot store values in big numbers but this big int provide us facility to store big integer values

let uu=BigInt("45689798896756432215465457665332423476765883")


//these are strings little bit different form c language we use it to write sentences

var str1 = 'this is my first time when i am practising java script to make to web page look better'
// console.log(str1)

var str2 = "i know things will take time but with the passage of time will be in my pocket i definately sure about it"

//now i will talk about very new concept which is objects
var marks = {
    // lets see marks of people in their annunal examination one by one
    jyotimay: 56,
    satvik: 99,
    arpit: 89,
    anishka: 56
}
//i can say one thing here is - console.log property is like printf property of c language which help us in printing things on the screen 
console.log(marks);

/*lets learn another new concept of javascript which is boolean, it is same as string of above one , but with one difference, you should not use any quotes in this one */

var beauty = true;
var intellect = false;

// this is undefined variable in which it is not necessay to type undefined as a value of it (if you leave any variable without its value so it will percive as a undefined variable and in output we will get undefined written there)
var und;

//lets learn about null data type which is offcouse different from undefined data type it implies variable doesnot have capcity to store any values and it will always remain empty
var n = null;

//lets learn little about symbol 

let btt=symbol("here we are learning about symbol which is also one of the concept of javascript")
//symbol is also one data type but for now on it is showing error 

//this another one data type is array which we use in c languge may be it will similar of that one 

var tree = [2, 3, 4, 5, 6, 7, "i am learning array what about you"];

//arthemetic operator
var a = 67;
var b = 90;

console.log("lets play a bit with numbers", a + b);
console.log("lets play a bit with numbers", a * b);
//other than above one we have (-) and (/ divide)


//other than above things we have assignemnt operators which are similar of c language assignment operator
var z = b;
console.log(z)
//this equal to has capality to given value of one variable to another

//other than this we have (+=,-=,/=,*=)

//to modify the value of above variable we dont need to define it again
z += 20;
z = a;
z *= 5

//what we use as relational operator- here we have same thing in the name comparision operator
//these Are(==,<=,>=,<,>,)
/*var peo=22;
var bar=78;
console.log(peo<=bar)
console.log(peo==bar)
console.log(peo!=bar) *//*this is also comes under the category of comparision operator of java script*/

//logical opertor
//may be it is similar to c language programming,but what i am gonna to do it now, it will be little different
//this is and operator
/*console.log(true && true) these are things of bolean algerbra but you dont need to think too much about it =true
console.log(true && false)=false
console.log(false && true)=false
console.log(false && false) =false */

//or operator

/*console.log(true || true) =true
console.log(true || false) =true
console.log(false || true)= true
console.log(false || false)=true */

//not operator

console.log(!false)
console.log(!true)



