
// Synchronous Programming --   // Runs Seqentially
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

// // this is first method ---'

// /*function hello() {
//     console.log("Hello");
// }
// setTimeout(hello,2000); // time out 2sec = 2000,milli sec..*/

// //Asynchronous Programming -----
// console.log("1");
// console.log("2");

// //Or  second Method...... 

// setTimeout(() => {
//     console.log("hello");
// }, 4000); // timeout..

// console.log("4");
// console.log("5");

// // callback --->
// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, sum); // sum is `callback` fun , sum() paranthesis kai sath nhi pass krna sum fun ko 

// // or second method using sync programming callback ----
// calculator(2, 4, (a, b) => {
//     console.log("using callback sum :  ", a + b);

// });

// const hello1 = () => {
//     console.log("hello");

// };
// setTimeout(hello1, 3000);             // asyn callback work..,, & hello1 it is also knows as callback 

// //  Callback Hell

// // nesting loops ,
// let age = 19;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("Senior");
//     } else {
//         console.log("middle...");
//     }
// } else {
//     console.log("child..");

// }

// // nested loop for loop kai under for loop use

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);

// }

// //Callback Hell ---->         nested callback
// function getId(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data =", dataId);
//         if (getNextData) {
//             getNextData();
//         };
//     }, 5000)
// };


// getId(1, () => {                      //calling getId function
//     console.log("getting data 2...");
//     getId(2, () => {
//         console.log("getting data 3...");
//         getId(3, () => {
//             console.log("getting data 4..."); /// This style of programming becomes difficult to understand & manage. it is known as pyramid structure.. they are prevent the callbackhell then use promises....
//             getId(4);
//         })
//     });
// });  
/* 
//Promises ---->
 let promise = new Promise((resolve,reject) =>{ // two handler hote hai resolve & reject , resolve means complete the work or resolve ak function hai
     console.log("I am a Promise");
     resolve("success")          //fulfilled 
     reject("some error occured");
 })
 console.log(promise);          //Pending status dikhayega agr bina Resolve ya Reject ke call krenge to

//Promises Example ---->
 function getData(dataId,getNextData){  // FOR example  ak data liya hai api ka
     return new Promise((resolve,reject) =>{
         setTimeout(()=>{
            console.log("data =",dataId);
            resolve("success");
            // reject("Error");
            if(getNextData){
              getNextData();
            }
         },5000);
     });
 };

 // upar wale data ko using promise chain  .... use kare to upar wale mai se getNextData hta sakte hai 
 let p1 = getData(1);
 p1.then((res) => {
    console.log(res);
    });

 let finalVal = getData(123);
 console.log(finalVal);              //Is time state pending aayega, aur 5sec time hone ke bad jb data print hoke aayega tb fullfilled dikhayega jb console pe dubara finalVal print kraenge tab


//Promises Uses -----
 const getPromise = () =>{
     return new Promise((resolve,reject)=>{
         console.log("I am a Promise");
         resolve("success");
         //reject("error");
     });
 };

 let promise1 = getPromise();

// //for resolve-->  two functions 1.promise.then, 2. promise.catch
 promise1.then((res)=>{
     console.log("promise fulfilled",res);
 });
promise1.catch((err) => {
    console.log("reject:",err);
    
}); */

/*
//Promises workings example -----
 function asyncFunction1(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("data1");
             resolve("success");
         },4000);
     });
 }

// second API
 function asyncFunction2(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log("data2");
             resolve("success");
         },4000);
     });
 }
// async calling..---->
 console.log("fetching data1 ....");
 let p1 = asyncFunction1();
 p1.then((res)=>{
    // console.log(res);
    
     console.log("fetching data 2");             //chaining
     let p2 = asyncFunction2();                  //chaining aur badhiya se copy me hai
     p2.then((res)=>{  //res = result
    //  console.log(res);
      
    });
 }); */

 //async await ------>
//example async it is knowns as keyword
async function hello(){
    console.log("hello")
}

console.log(hello());                    //automatically returns a promise

//example async await
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);              //200 means success in programming lang
        },2000);
    });
}

async function getWeatherData(){
    await api();                         //calling api fn     1st call   cnsol browser mai cmd = getWheatherData()
    await api();                         //calling api fn     2nd call
}

console.log(getWeatherData());          //pehle 1st call complete ho jayega tbhi 2nd call run hoga

// Async-await----
async function getAllData(){
    console.log("getting data1......");
    await getData(1);                  //pehle 1st call complete hoga tbhi next call run hoga
    console.log("getting data2......");
    await getData(2);                  //fir 2nd call complete ho jayega tbhi next call run hoga....aise hi
    console.log("getting data3......");
    await getData(3);
}
console.log(getAllData()); 

//upar wala example through IIFE ----
// (async function(){
//     console.log("getting data1......");
//     await getData(1);                  
//     console.log("getting data2......");
//     await getData(2);                  
//     console.log("getting data3......");
//     await getData(3);
// })();

