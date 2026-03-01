// attributes value get karney kai liye call
// to get the attribute value
/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id); // output in console .. box

let name = div.getAttribute("name");
console.log(name); // output in console .. box


let para = document.querySelector("p");
console.log(para.getAttribute("class"));


// to set the attribute value
// setAttribute( attr, value )
let para1 = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

// node.style access in js

let div3 = document.querySelector("div");

// go console. , div.style
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
//element ko hidden bhi kar sakte hai js ki help se without using css and html

// div.style.visibility = "hidden";

div.style.fontSize = "26px"; 

// text change
div.innerText="Hello!";*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");

// 1.div.append(newBtn);  for using end 
// 2.div.prepend(newBtn);
// 3.div.before(newBtn);
// 4.div.after(newBtn);

// paragaph after add buttom
let p = document.querySelector("p");
p.after(newBtn);

// i can new heading create without using html....

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new! </i>";
document.querySelector("body").prepend(newHeading);

//Delete Element
// node.remove( ) //removes the node

// let's paragaph delete

let para = document.querySelector("p");
// para.remove();
// or heading delete
// newHeading.remove();