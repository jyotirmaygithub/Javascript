// document write method is usefull in apperaing anything on the html page

document.write("i know things are different in this in comparision of css and html, but you know i am kind of a fighter who will fight til last of my breath\n")

// there is another method which provide us option of choosing - want or deny

alert("be ready for writing number of your choice")
let num = prompt("enter your desired number")
num = Number.parseInt(num)
// document.write(num )
// document.write(typeof num )

let coment = "click buttom to see magic"
if(confirm(coment)){
    // document.write(num)
    document.body.style.backgroundColor = "green"
}
else{
    // document.write("<h2> may be made some mistake in doing things</h2>")
    document.body.style.backgroundColor = "black"
}
