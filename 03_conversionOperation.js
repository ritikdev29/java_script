let score = "33abds"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // output NaN

let sco = null
console.log(sco); // null value given

let hello = null
let valueInNumb = Number(hello)
console.log(typeof valueInNumb);
console.log(valueInNumb); //  output will 0

// "33" => 33
// "33ad" => NaN
// TRUE => 1; FALSE => 0

let isLoggedIn = 1 // number lo boolen mai conversion
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // output is true

let isfalseIn = 0  // yaja par mt string karney par as : "" //output false and "Ritik" output True
let booleanisfalseIn = Boolean(isfalseIn)
console.log(booleanisfalseIn);  // output is false

let someNumber = 23
let stringNumber = String(someNumber) 
console.log(stringNumber); // 23 output
console.log(typeof stringNumber); // string











