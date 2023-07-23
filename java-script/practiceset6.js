// this is the first question of this pracrtice set

// let take = prompt("enter your age ")
// take = Number.parseInt(take)
// document.write("your age is = ",take)

// if(take<18){
//     document.write("<h2>you cannot drive car because of age</h2>",take)
// }
// else if(take>=18 && take<65){
//     document.write("<h2>you can drive car</h2>",take)
// }



// alert("you need to enter your age, to confirm your driving status")
// let a, b;
// do {
//     a = prompt("enter your age")
//     a = Number.parseInt(a)
//     if (a < 0) {
//         console.error("you entered wrong age, do it again for appropriate verificarion")
//         alert("you entered inappropiate age, type it again")
//         break; //this is a most common function or method of switch case
//     }
//     else if (a < 18 ) {
//         // document.write("<h2>you cannot drive car because of age</h2>",a)
//         alert("<>you cannot drive car because of age<>", a)
//     }
//     else if (a >= 18) {
//         // document.write("<h2>you can drive car</h2>",a)
//         alert("<>you can drive car<>", a)
//     }
//     b = confirm("do you want to enter your age again")
// } while ((b) == true)


// let bobby

// do {
//     bobby = prompt("enter a number")
//     bobby = Number.parseInt(bobby)
//     if (bobby > 3) {
//         location.replace("https://www.google.com/")
//     }
//     else {
//         alert("you need to enter number again for the redirecion into the desired page")
//     }
// } while (bobby < 4)



let doby
// i made this function method to revisit an user by clicking on the button
do {
    doby = prompt("enter a number")
     doby = Number.parseInt(doby)
    if (doby > 3) {
       function hustle(){
        location.replace("https://www.google.com/")   
    }     
    }
    else {
        alert("you need to enter number again for the redirecion into the desired page")
    }
} while (doby < 4)

let color1 = prompt('enter your color')
document.body.style.backgroundColor = color1