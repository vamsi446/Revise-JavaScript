for(let i=1; i<=5; i++){
    console.log(i);
}

var i=1;
while(i<=5){
    console.log("i=", i);
    i++;
}

var i=10;
do{
    console.log("vamsi");
    i--;
}while(i>=1);


let str = "vamsi";
for(let i of str){
    console.log(i);
}


let student = {
    name: "vamsi",
    age : 20,
    cgpa: 3.8,
    isPass: true,
};

for(let key in student){
    console.log(key + ":  " + student[key]);
}


/**
 *  \' single quote
 *  \" double quote
 *  \\ backslash
 *  \n new line
 *  \r carriage return
 *  \t tab
 *  \b backspace
 *  \f form feed
 */


var mystring = "FirstLine \n \t  \\secondLine \n ThirdLine";
console.log(mystring);

var outStr = "I come first. " + " I come second.";
console.log(outStr);
var str1 = "this is the start. " + "this is the end. ";
console.log(str1);

var str2 = "my name is vamsi";
console.log(str2.length);
console.log(str2[2]);
console.log(str2.toUpperCase(), str2.toLocaleUpperCase(), str2.trim());

console.log(str2.slice(5,7), str2.charAt(8));

