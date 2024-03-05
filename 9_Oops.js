//objects
const student = {
    fullName : "shradha Khapra",
    marks: 94.4,
    printMarks: function(){
        console.log(this.marks);
    }
};
student.printMarks();
console.log(student);
console.log(student.printMarks);
console.log(student.toString());

//prototype 
/// A JS object having astate and behaviour
// JS objects have a special property called prototype
// we can set prototype using __proto__
const arr =[1,2,2,3,3];
console.log(typeof arr);
arr.push(78); // push, pop etc function come from prototype

const employee ={
    calcTax1(){
        console.log("tax rate is 10%");
    },
    calcTax2: function(){
        console.log("tax rate is 10%");
    }
};

const vamsi = {
    salary: 50000
}
console.log(vamsi);
//__proto__
vamsi.__proto__ = employee;
vamsi.calcTax1();

const revuri = {
    salary: 50000,
    calcTax1(){
     console.log(this.salary);
    },
}

console.log(revuri);


//classes 
class Car{
    //constuctor automatically invoked by new
    constructor(brand,mileage){
        this.brand = brand;
        this.mileage = mileage;
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    } 
    setBrand(){
        this.brand = brand;
    }
}
let urus = new Car("urus",12);
console.log(urus);
urus.start();
urus.stop();


//inhertitence
class Parent{
    constructor(){
        console.log("enter parent contructor");
        this.person = "mother";
    }
    hello(){
        console.log("hello");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

}
class Child extends Parent{
    constructor(){
        super();
        console.log("enter child constructor");
        this.person  = "child";
    }
    play(){
        console.log("play");
    }

}

let childObj = new Child();
console.log(childObj);
childObj.hello();
childObj.sleep();
childObj.play();