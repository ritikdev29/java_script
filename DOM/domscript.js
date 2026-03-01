
// let heading = document.getElementById("heading"); // h1
// console.dir(heading);



// class ko axcess karney kai liye use
// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);


// paraghraph tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);


// qs1

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Coders students"; // concatinate

// qs2

let divs = document.querySelectorAll(".box");

// all div acces using for loops
// let idx = 1;
for (div of divs) {
    console.log(div);
    // div.innerText = "new unique values"
    // console.log(div.innerText); 
    // div.innerText = `new unique values ${idx}`;
    // idx++;
    
}
divs[0].innerText = "new nique value 1";
divs[1].innerText = "new nique value 1";
divs[2].innerText = "new nique value 1";

console.log(divs[0]);

// divs[1] , cmd in console  they are work as like arrays..
