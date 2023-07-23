
function something() {
    document.getElementsByTagName("button")[1].setAttribute("onclick","window.location.href = 'https://mixkit.co/free-stock-video/car/'")
}
document.getElementById("unique").addEventListener("click",something)

function dont() {
    document.getElementById("mobile").setAttribute("onclick","window.open('https://www.geeksforgeeks.org/html-dom-setattribute-method/')")
}
document.getElementById("mobile").addEventListener("click",dont)

function kppp() {
    document.getElementById("pouch").setAttribute("onclick","location.replace('https://htmlcolorcodes.com/')")
}
document.getElementById("pouch").addEventListener("click",kppp)


function stop() {
    window.location ="https://htmlcolorcodes.com/"
    // this one is suitable for one click redirection to another page
}
document.getElementById("things").addEventListener("click",stop)


// function color() {
//     document.getElementsByClassName("just_do")[0].classList.toggle("just_do")
// }
// setInterval(color,1000)
setInterval(function() {
    document.getElementsByTagName("h3")[0].classList.toggle("just_do")
    // document.getElementsByTagName("h3")[0].classList.toggle("just3")
}, 100);