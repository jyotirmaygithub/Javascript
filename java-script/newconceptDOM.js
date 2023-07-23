// now lets deal with javascript to change thing at our convience


document.getElementById("fucker").style.color = 'yellow'
// document.getElementById('moo').style.color='yellow'


document.getElementsByClassName("card-title")[0].style.color = 'orange'
document.getElementsByClassName("card-text")[0].style.color = 'pink'
// to work especilally with class it is nessary to mention index value of the class because class is not unique its own, it can be multiple


// now lets use queary selector method of javascript

// we have two type of css queary selectors to change properties of the element by implementing css with the help of the javascript

document.querySelectorAll(".card-text")[2].style.color = 'blue'

let yoo = document.querySelectorAll(".btn-primary")
yoo[0].style.color = 'pink'
yoo[2].style.color = 'red'
console.log(yoo)


// document.querySelector(".nav-link").style.color='red' this query selector is only for one element to change its visualization


// we also have another method specifically for elements

document.body.getElementsByTagName("h1")
// console.log(document.body.getElementsByTagName("li")[0].style.color='green')
document.body.getElementsByTagName("li")[0].style.backgroundcolor='green'


let koo = document.getElementsByClassName("card-title")[3]
console.log(koo)
console.log(koo.closest(".card"))
// it will return closet of 