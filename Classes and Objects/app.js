// direct way creating a object
const student = {
    fullName : "Ritik_Kumar",
    marks : 92.2,
    scpa : 8.31,
    printmarks: function() {
        console.log("marks = ",marks);
        // console.log("marks = ",this.marks);// axcess marks value this keyword

        
    }
}


    // creat prototype
    const employee = {
        calcTax1(){
        console.log("tax rate is 10%");
        },
        calcTax2 : function () {
            console.log("tax rate is 10%");
        }  
    };

    const karanArjun1 = {
        salary : 50000,
        // *If object & prototype have same method,object’s method will be used
        calcTax1(){
        console.log("tax rate is 20%");
        },
    };
    // i create multiple class 
    const karanArjun2 = {
        salary : 40000,
    };
    const karanArjun3 = {
        salary : 20000,
    };
    const karanArjun4 = {
        salary : 10000,
    };
    const karanArjun5 = {
        salary : 120000,
    };
    karanArjun1.__proto__ = employee;
    karanArjun2.__proto__ = employee;
    karanArjun3.__proto__ = employee;
    karanArjun4.__proto__ = employee;
    // karanArjun.__proto__ = employee;
 

    // create a class

    class TayotaCar {
        constructor(brand,mileage) {
            console.log("creating new objects...");
            this.brand = brand;
            this.mileage = mileage;
        }
        start() {
            console.log("Start the car..");
            
        }
        stop() {
            console.log("Stop the car...");
            
        }
        // variable defined
        // setBrand(brand) {
        //     this.brandName = brand;
            // this.brand = brand; // yaha par brand lhs and RHS dono diffrent work hai this kai sath jo likha hai wah object ki properties hai && dusre aur likha hai wah variable or argument ki properties hai.....

        // }
    }
  // craete the object

  let fortuner = new TayotaCar("fortuner",10); // constuctor invoke
console.log(fortuner);

  //   fortuner.setBrand("fortuner2.0"); // new properties add , this , means object call kiya ja rha ho
  let swift = new TayotaCar("swift2.O",12);
console.log(swift);

  //   swift.setBrand("swift2.O");


  // inheritance in js
  class parent {
    hello() {
        console.log("hello i am parent.. class");
        
    }
  }
  class child extends parent {}
  let obj = new child();


  // another example
  class Person {
    eat() {
        console.log("Eating a food..");
        
    }
    sleep() {
        console.log("sleeping");
        
    }
    work() {
        console.log("do nothing"); // same 
        
    }
  }
  class Engineer extends Person{
    work() {
        console.log("solve problem, build a logoc");
        
    }
  }
  // kal ko engineer ki jagah doctor bhi karna ho to
  class Doctor extends Person{
    work() {
        console.log("Treat patients");
        
    }
  }
  let ritikobj = new Engineer;
//   let ritikobj1 = new Person;

// using super kayword

class Person1 {
    constructor(name) {
       // console.log("Enter parent constructor..."); // i check kauns sa constructor pahley call hua
        
        this.species = "homo sapiens";
        this.name = name;
    }
    eat1() {
        console.log("eat");
        
    }
}
class Engineer1 extends Person1 {
    constructor(branch,name) {
        // console.log("enter child constructor...");
        
        super(name); // to invoke Parent class constructor
        this.branch = branch;
        // console.log("exit child constructor...");
    }
    work1() {
        super.eat1(); // axcess the parent class phley enginn eating then work so use super keyword..then work
        console.log("solve problem, BLP..");
        
    }
}

let engobj2 = new Engineer1("chemical engg..","Ritik_kr");