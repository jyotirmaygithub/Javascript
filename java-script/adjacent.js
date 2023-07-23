let uu = document.body.getElementsByTagName('nav')[0]
console.log(uu)
let okk= "<p>just try to doing things in a right way</p>"
uu.insertAdjacentHTML("afterbegin",okk);
// dont repeat this sily mistake of writing element in place of html 

// we also have one another method to remove entire eleemnt from the dom with the  help of javascript

let heny = document.body.getElementsByTagName("li")[1]
let hn = heny.classList
console.log(hn)
heny.classList.remove("wear")

//  another very useful method of javascript is toglge method


heny.classList.toggle('pajma')
