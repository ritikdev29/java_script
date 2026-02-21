let fooditem = ["potato", "apple", "lichi", "tomato"];
console.log(fooditem);

fooditem.push("Caarot", "burger","paneer");
console.log("the after added list = ",fooditem);

let deletedItem = fooditem.pop();
console.log("Deleted",deletedItem); // output paneer

// concat method 
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman","batman"];

// multiple array ko bhi add kkar sakte hai
let indianHeros = ["shaaktiman","krish"];
// console.log(in);

let heroes = marvelHeroes.concat(dcHeroes,indianHeros);
console.log(heroes);

{
    let heroes = ["thor","spiderman","ironman"];
    heroes.unshift("antiman") // work starting mai add karna

    console.log("using unshift =",heroes.unshift("hello"));
    
    // slice method in js

    let marvel = ["hello","spiderma_n","ironman_","Dr. gautami"]

    console.log(marvel);
    console.log(marvel.slice(1,2)); // 2 nhi include hoga
    
    
}

// ques

let companies = ["Boomberg", "microsoft", "uber", "Google","IBM","Netflix"];

// remove the first company
// companies.shift();
// companies.shift(); // output is : boomberg hatakai sab print hoga
// console.log(companies.shift());
// let j = companies.splice(2,1,"ola");
// console.log("after add = ",j);

companies.push("amazone");







