// so here i need to change color of the first of the document

let clas = document.body.getElementsByClassName("navbar-brand")
clas[0].style.color = 'red'

let yy = document.body.querySelectorAll(".dropdown-item")
console.log(yy) //this one is goood to acess all css element of  same css


console.log(document.body.children[3].firstElementChild)  //just to check thing for the better output

let forget = document.body.children[3]
forget.firstElementChild.style.color= 'green'
forget.lastElementChild.style.color = 'red'

// let hollow = document.body.getElementsByTagName("header li")
// console.log(hollow)

let you = document.body.getElementsByTagName("li")
console.log(you)
// yow[10].style. backgroundColor='green'
// yow[8].style. backgroundColor='blue'
// yow[9].style. backgroundColor='grey'
// yow[11].style. backgroundColor='pink'

// let arr = [you[8],you[9],you[10],you[11]]
// console.log(arr)
// arr.forEach((newthings) =>{
//     newthings.style.backgroundColor = 'grey'
// })
Array.from(you).forEach((just) =>{
just.style.backgroundColor = 'blue'
just.style.color = 'white'

})
let search = document.querySelector(".nav-item")

// let experi = document.parentElement.nodeName.search
let qya = search.closest("body")
console.log(qya)
console.log(closest('search'))