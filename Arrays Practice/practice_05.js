/* We are given array of marks of students. Filter our of the marks of students that scored 90+*/
let marks = [97,98,32,49,99,86];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log("filter in array toppers marks is  : ",toppers);


// for less than 90 
let mark = [97,98,32,49,99,86];
let topper = marks.filter((val) => {
    return val < 90;
});
console.log("filter in array toppers marks is  : ",topper);


/*Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

let n = prompt("Enter a numbers : ");
let arr =[];
for(let i = 1; i<=n; i++) {
    arr[i - 1] = i;

}
console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
});
console.log("sum is : ",sum);

let factorial = arr.reduce((res,curr)=>{
    return res * curr;
});
console.log("Factoril is : " ,factorial);



