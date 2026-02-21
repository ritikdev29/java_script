// for loops
for (let cont = 1; cont <= 100; cont++) {
    console.log("hello world!.."); // 100 times execute
    }
console.log("loop has ended..");
// calculate sum of 1 to n 
let sum = 0;
let n = 6;
for (let i = 1; i <= n; i++) {
    sum = sum + i; // sum = 15
    
}
console.log("sum =",sum);
console.log("loop has ended..");
 {
    // print 1 to 5
    for (let i = 1;i<= 5; i++) {
        console.log("i : ",i);
        
        
    }

 }

 // while loop
 {
    let i = 20;
    while (i <= 10) {
        console.log("Hello world!..");
        i++;
    }
 }

 {
    let i = 20;
    do {
        console.log("Hello world..");
        i++;
    } while (i <= 10);

    
 }
 {
    // for-of loop
    let str ="Ritik kumar";
    // find lenght karna ho to use
    let size = 0;
    for(let val of str) {
        console.log("value =",val);
        size++;
    }
    console.log("String Size is : " , size);
    

 }
 {
    // print all even number 1 to 100 question 1
    for (let num = 0; num <= 100; num++) {
        if (num % 2 === 0) {
            console.log("Number is even :",num);
            
            
        }//else{
        // console.log("number is odd:",num);
        // }
        
    }
 }
 
    // question no ..2, create game guess number

   /* let gameNum = 20;
    
    let userNum = prompt("Guess the game Number : ");
    while (userNum != gameNum) {
        userNum = prompt("You entered wrong number . Guess again..");
        
    }
    console.log("Congratulation , you enteredthe Right Number..");
    */
{
    // string in js
    let str1 = "Ritik";
    let str2 = "Ritik";
    let sumString = str1+str2;
    console.log(sumString.length);
    
    console.log(str1.length);
    
    console.log(str1===str2);

    // template Literals
    let specialstring= `This is template literal`
    console.log(specialstring);
    console.log(typeof specialstring);

    // why need 
    // with srtring
    let obj = {
        item: "Books",
        price: 10,

    };
    // console.log("The cost of",obj.item,"is",obj.price,"Rupees..");
    // with morden new changes
    let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
    console.log("Your answer is ==",output);
    

    // method in string toUpperCase
    let str = "Helloworld";
    str = str.toUpperCase(); // ye new string make kar kai upeercase print krta hai starting and end se trim krta hai

    console.log(str);
// str.trim() method work khali space ko remove krney ka work karta hai
    let rk = "    Hello Coder JS   ";
    console.log(rk.trim());
    
   // concat method
   let str3 = "hello";
   let str5 = "world !";
   let country = "i am learning coding from " + str3 + str5;
   console.log(country);
   
   let res = str3.concat(str5);
   console.log("After concat : ", res);
}
{
    // question prompt user to enter their full name . generate a user for based on the input. start username with @, followed by their full name and ending with the fulllength.  ,, eg. user name = "ritik" , usernameshould be "@ritik23"
    let fullName =prompt("enter your full name without spaces:");
    let username = "@" + fullName + fullName.length;
    console.log(username);
    
    
}
 

