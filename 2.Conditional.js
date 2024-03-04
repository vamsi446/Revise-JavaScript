console.log("Hello Wrold!");

//conditional
let age = 25;
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
else
color = "white";

console.log(color);
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}

var result = age>18 ? "adult": "not adult";
console.log(result);


let num = prompt("please enter a number :");
if(num%5 ===0){
    console.log(num +" is a multiple of 5");
}
else{
    console.log(num + " is not a multiple of 5");
}