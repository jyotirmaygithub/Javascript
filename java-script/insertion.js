let yoo = document.createElement('div');
console.log(yoo)
yoo.innerHTML = '<h2>hello fuckers</h2>'
document.body.getElementsByTagName("ul")[0].appendChild(yoo)
document.body.appendChild(yoo)

let slow = document.body.getElementsByTagName('li')[2]
console.log(slow)
let jj = document.createElement('h4')
jj.innerHTML = 'hey fucker start doing some effort for the better future'
console.log(jj)
slow.before(jj)

