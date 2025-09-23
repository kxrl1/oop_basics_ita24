const myDate = require ('./mydate.js')

const d1 = new myDate(1, 1, 2020)
const d2 = new myDate(5, 32, 2020)

console.log(d1.printDay())
console.log(d2.printDay()) 

console.log(d1.earlier(d2))
console.log(d2.earlier(d1)) 