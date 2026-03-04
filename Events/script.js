// throught a java script events handle
/** 
let btn2 = document.querySelector("#btn2");

btn2.onclick = () => {
    console.log("btn2 was clicked");
    let a = 25;
    a++;
    console.log(a); // 26 output


}
let btn3 = document.querySelector("#btn3");

btn3.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);




}; // output in cnsole pointer events


// div hover events
/*
let div  = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
    
};


let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

// Event Listeners
// node.addEventListener( event, callback )

btn2.addEventListener("click", (evt) => {
    console.log("button2 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn2.addEventListener("click", () => {
    console.log("button2 was clicked - handler2");


}); */

// node.removeEventListener( event, callback ) suppose handeler 3 was removed
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (e) => {
    console.log("button1 was clicked - handeler 1");
})

btn1.addEventListener("click ", () => {
    console.log("button1 was clicked - handeler 2");

})

btn1.addEventListener("click ", () => {
    console.log("button1 was clicked - handeler 3");

})

btn1.addEventListener("click ", () => {
    console.log("button1 was clicked - handeler 4");

})