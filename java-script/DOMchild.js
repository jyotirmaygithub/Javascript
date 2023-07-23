// console.log(document.body.h3.nextElementSibling)
let fuc = document.body.firstElementChild
console.log(fuc.nextElementSibling)

let uu = document.body.lastElementChild
console.log(uu)

let changecolor =()=>{
    document.body.firstElementChild.style.background = 'green';
}
const makeitgrey =()=>{
    document.body.children[2].style.background = 'grey'
}