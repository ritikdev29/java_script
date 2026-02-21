console.log("Hello world");
// var name ="ritik kumar"
// console.log(name);
{ // method scope ka use 
    let a = 5;
    let b = 5;
    console.log("a + b =", a + b);
}

// or 
{
    let a = 5;
    let b = 2;
    // let c = a + b;
    console.log("a =", a, "& b =", b);

    console.log("a + b is :", a + b);
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / b", a / b);
    console.log("a % b =", a % b); // modulus operator ,remaider aata hai divide ka ou. 1
}
let r = 8;
let s = 2;
console.log("r =", r, "& s =", s);
// decrement operator r
// r = r-1;
// r--;
// increment operator
// s = s + 1;
// s++;
// console.log("r = ",r);
// console.log("s =",s);
console.log("r++ =", r++); // 8
console.log("r = ", r); // 9
// decrease 
console.log("r-- =", r--); // 9
console.log("r =", r); // 8

{
    // assigment operator
    let a = 5;
    let b = 2;

    // a += 4; // a = a + 4 = 9
    // console.log("a = ",a);

    // a -= 5;
    // console.log("sub of a is:=",a);

    a **= 4; // a = a ** 4
    console.log("exponential a is :", a);
}

// comparision operator
let g = 5;
let k = 4;

console.log("5 == 2", g == k);// true or false
console.log("5 != 2", g != k);// false

let d = 5;  // number 
let n = "5" // string -> number 
console.log("d == n", d == n);// true becase implicit conversion java string value ko number mai conver kar rhi hai

console.log("d === n", d === n); // strictly value check so return false
console.log("d !== n", d !== n); // true
// console.log("d == n", d==n);

console.log("6 >= 5", d >= n);

/* logical operator 
logical AND &&
lOGICAL OR||
LOGICAL NOT !
*/
{
    let l = 6;
    let b = 5;
    let cond1 = l > b; // true
    let cond2 = l === 6; // true
    // let cond2 = l === 5; // false

    console.log("cond1 && cond2 =", cond1 && cond2);
    console.log("!(6<5) =", !(l < b)); // true
    console.log("!(6 < 5)", !(l === 6));// false
}
{
    // conditional statement 
    let age = 16;
    if (age >= 18) {
        console.log("You can vote..");
    }

    if (age < 18) {
        console.log("You can not vote...");


    }

    // let mode = "dark";
    let mode = "light"; // out= white

    let color;
    if (mode === "dark") {
        color = "black";
        
    } else {
        color = "white";
    }
    // if (mode === "light") {
    //     color ="white";
    // }
    console.log(color); // ouput is black
    
}
{
    let age = 15;

    if (age<18) {
        console.log("Junior");
    }if (age > 60) {
        console.log("Senior");
    } else {
        console.log("Middle");
    }
}
{
    let mode = "dark";
    let color;
    if (mode === "dark") {
       color = "black" 
    } else if(mode === "blue") {
        color="blue"
    } else if(mode === "pink"){
        color = "pink"
    } else{
        color = "white"
    }// out = black
    console.log("color is :",color);
   if (mode === "dark") console.log(mode);// out= dark ,then work line condition true honey kai bad hume sirk ak hi work karana hi , but this is not recommended

   if (mode === "dark") {
    console.log(mode);
}
    
}
{
    let score = 10 ;
    if (score >=80 && score <= 100) {
        console.log("Grade is 'A'.");
    }else if (score >=70 && score <=89) {
        console.log("Grade id 'B'.");
    } else if (score >= 60 && score <=69) {
        console.log("Grade is 'C'.");
    } else if (score >= 50 && score <= 59) {
        console.log("Grade is 'D'..");
    }else if (score >=0 && score <=49) {
        console.log("Grade is 'F'..");
        
        
    }
}











