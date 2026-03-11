// const { use } = require("react")

// const { use } = require("react");

/**Qs. You are creating a website for your college. Create a class 
 User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.*/
let DATA = "secret information..";
class user {
    constructor(name, emial) {
        this.name = name;
        this.emial = emial;
        
    }
    // method
    viewData() {
        console.log("data = ",DATA);
        
    }
}
 /* qs.2 =Create a new class called Admin which inherits from editData to Admin that allows it to edit website data.
User. Add a new method calle**/
class Admin extends user {
    constructor(name, emial) {
        super(name,emial);
        
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new user("ritik","Abc@gmail.com");
let student2 = new user("rahul","Rahul123@gmial.com");
// CONSOLE CMD acess ,, student1.viewData()

let teacher1 = new user("dean", "dean@gmail.com");

let admin1 = new Admin("admin", "admin@collage.com");


/**qs.2 = cmd in console 
input = admin1
Admin {name: 'admin', emial: 'admin@collage.com'}
input = DATA
'secret information..'
admin1.editData()
undefined
input = DATA
'some new value'
*/

// error handling

let a = 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = " ,a+b);
try {
console.log("a + b = " ,a+c); // error show

    
} catch (err) { // err is knows as let any argument name...
    console.log(err);
    
    
}
// console.log("a + b = " ,a+c); // error shor
console.log("a + b = " ,a+b);
console.log("a + b = " ,a+b);
console.log("a + b = " ,a+b);
console.log("a + b = " ,a+b);
console.log("a + b = " ,a+b);




