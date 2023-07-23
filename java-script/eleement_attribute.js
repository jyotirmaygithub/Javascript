let henry = document.getElementsByTagName("h3")[0]
console.log(henry)
console.log(typeof henry)
console.dir(henry)

console.log(document.getElementsByTagName('h3'))

// let uuu = document.getElementsByTagName('h3')[0]
// console.log(uuu)
// console.log(uuu.innerHTML)
let utu = document.getElementsByClassName("fuckers")[0]
// console.log(document.body.innerHTML)
console.log(utu.innerHTML)

// to insert some new statement we can use inner html 
// but the syntax has some differeces

utu.innerHTML = `fucker just get out from here because you dont know how to do work `

// inner and outer htmls are only for element nodes not for other nodes 


// i will continue attribute concept here
let uhu = document.body.getElementsByTagName("h3")[0]

console.log(uhu.getAttribute('class'))
console.log(uhu.hasAttribute("hidden"))

// we can set attribute by using javascript method 

// console.log(uhu.setAttribute('class','mc tyagi'))

// just now i learned a very good concept in javascript that is making custiomise attribute by using appropriate sytax 
// i general attribute is a conceopt of html, but javascript has power to customise attribute as on customer need

let yyy = document.body.getElementsByTagName("ul")[0].firstElementChild
console.log(yyy)
console.log(yyy.getAttribute("data-yat"))