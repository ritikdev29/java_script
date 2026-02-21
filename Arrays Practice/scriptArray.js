// let marks = [97,96,88,90];
// let info = ["Ritik" , "Rohan","Jhonsan"];

let marks = [97, 98, 76, 78];
console.log(marks);
console.log(marks.length); // property

let hores = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(hores);
// marks ki value conver kaise kre
marks[0] = 45;
console.log("after conver value :",marks);

// loop use for print info all string value

for (let index = 0; index < hores.length; index++) {
    console.log(hores[index]);
    // console.log("hello");
    
    
    
}
{
    // for of
    for(let hero of hores) {
        console.log("for of use hero :",hero);
        
    }

    let cirties = ["delhi", "pune", "mumbai", "hyderabad", "gurgon"];
     // print individual city value
    for (let city of cirties){
        console.log(city);
        console.log(city.toUpperCase);

        
    }
}


