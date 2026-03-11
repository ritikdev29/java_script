//  create a variables for api
const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const factPara = document.querySelector("#cat-fact");
// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
    console.log("getting Data....");
const btn = document.querySelector("#btn");


    
    let response = await fetch(URL);
    console.log(response); // JSON format data 
    // console.log(response.status); // out = 200

    // for usable data we need to convert it into json format
    let data = await response.json();
    // console.log(data[1]);

    // factPara.innerText = data[0].text;
};


// console.log(!"Null"); false
// console.log(!"");  true 

// create promise chaining/
/*function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;
        
    });
}*/

// add event listener to button
btn.addEventListener("click", getFacts);




