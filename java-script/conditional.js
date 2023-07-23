//here we will learn about some same concept of c language, which will we if and else conditional expression 

//be entuatistic for some  new concept to learn 

//prompt will be new concept and it will same as altert, thing will pop up on the upper side of the screen 

let a = prompt("hey tell me what is your age")
//whatever you write in this above fuction of prompt-it will be ultimately be a string
alert("what are you doing here when you are minor")

if (a >= 18 && a <= 60) {
    alert("you are under range of driving a vechile, so that you can drive a vechile")
}
else {
    alert("you are under or above age of driving a vechile, so that you cannot drive a vechile")
}

//lets do question on switch case by making a program  

let name_of_language;
// name_of_language=Number.parseInt(name_of_language)
//this is how we can take input from user in this java script language
name_of_language= prompt("name of the language");

switch (name_of_language) {
    case "french":
        console.log("you choose french as your favourite language")
        break;

    case "hindi":
        console.log("you choose hindi as your favourite language")
        break;

    case "russian":
        console.log("you choose russian as your favourite language")
        break;

    case "english":
        console.log("you choose a world favouraite language which is english")
        break;

    case "urdu":
        console.log("you choose urdu as your favourite language")
        break;
    default:
        console.log("may be you write some unknown language")
        break;
}

//lets learn terinary conditional operator by writing code by myself

let age
age = prompt("write your age to have sex")
console.log("you can f**k girls", age<=18?  ": no" :": yes" ) //may be you need to see it once agian mainly usage of it
