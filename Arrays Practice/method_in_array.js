let fooditem = ["potato", "apple", "lichi", "tomato"];
console.log(fooditem);

fooditem.push("Caarot", "burger", "paneer");
console.log("the after added list = ", fooditem);

let deletedItem = fooditem.pop();
console.log("Deleted", deletedItem); // output paneer

// concat method 
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];

// multiple array ko bhi add kkar sakte hai
let indianHeros = ["shaaktiman", "krish"];
// console.log(in);

let heroes = marvelHeroes.concat(dcHeroes, indianHeros);
console.log(heroes);

{
    let heroes = ["thor", "spiderman", "ironman"];
    heroes.unshift("antiman") // work starting mai add karna

    console.log("using unshift =", heroes.unshift("hello"));

    // slice method in js

    let marvel = ["hello", "spiderma_n", "ironman_", "Dr. gautami"]

    console.log(marvel);
    console.log(marvel.slice(1, 2)); // 2 nhi include hoga


}

// ques

let companies = ["Boomberg", "microsoft", "uber", "Google", "IBM", "Netflix"];

// remove the first company
// companies.shift();
// companies.shift(); // output is : boomberg hatakai sab print hoga
// console.log(companies.shift());
// let j = companies.splice(2,1,"ola");
// console.log("after add = ",j);

companies.push("amazone");

{
    // arrow function

    function sum(a, b) {
        return a + b;
    }

    const arrowsum = (a, b) => {
        console.log(a + b);

    };
    // mutliplication function
    function mul(a, b) {
        return a * b;
    }

    const arrowmul = (a, b) => a * b;
    console.log(arrowmul(4, 5));


}

// For Each loops in array

let arr = [1,2,3,4,5,6];
arr.forEach((val) => {
    console.log(val);
    
});

// for string

let arry = ["jaipur","Rajsthan","luckhnow","deoria","pune"];
arry.forEach((input)=>{
    console.log(input);
    

});

// three parameter in loop

let ar = ["gorkhpur","delhi","mumbai","Noida"];
ar.forEach((her,idx,ar) => {
    console.log(her.toUpperCase,"value is:",idx,ar);
    
});

let sqr = [1,2,3,4,5,6,7];
sqr.forEach((sqr,inx)=>{
    console.log(inx,"your square value is : ",sqr*sqr);
    
})

// map method

let nums = [39,2,66,74,3];

let newArry = nums.map((val) => {
    return val *2;
});
console.log(newArry);

// filter method
 
// for even
let arrf = [1,2,3,4,5,6,7,8,9,10];

let evenArr = arrf.filter((val) => {
    return val % 2 === 0;

});
console.log(evenArr);

// for odd number filter in array
let arrd = [1,2,3,4,5,6,7,8,9,10];

let oddArr = arrf.filter((val) => {
    return val % 2 != 0;
 // three se greater valu condition return val >3;
});
console.log(oddArr);

// Reduce method

let arr3 = [1,2,3,4];

const output = arr3.reduce((res,curr) => {
    return res + curr;
});
console.log(output);






