/*Data Types
7 primitive
undefined,
null, 
boolean, 
String, 
symbol, number and BigInt
*/

/** let, var, const */
/** redeclared reupdated global scope */
var a;
var a=25;
var a=45; 


/**canot be redeclared but can be updated block scope */
let variable= 1;

/**cannot be redeclared or updated block scope */
const gg=12;


/*object
*/

const student = {
    fullName: "vamsi",
    age: 20,
    cgpa: 3.8,
    isPass:true
}
console.log(student);
console.log(typeof student);
console.log(student["fullName"]);
console.log(student.age);

var myName = "vamsi";
myName = 8;

let name = "vamsi";
const pi = 3.14;

var a;
console.log(a);
var b = 2;
a = 7;
console.log(a);

var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "String!";

//Declarations
var studlyCapVar;
var properCamelCase;

//Assignments
studlyCapVar = 10;
properCamelCase = "A string!";

//Adding Numbers
var sum = 10 + 10;
console.log(sum);

//subtract
var diff = 45 - 33;
console.log(diff);


console.log(8 * 10, 10 / 2);

var x = 1;
x = x + 1;
x++;
++x;

x += 7;
x -= 1;
x *= 3;
console.log(`X: ${x}`);

var ourDecimal = 5.7;
var myDecimal = 19.22;

var remainder = 4 % 2;
console.log(remainder);

var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "vamsi";
var myLastName = "Revuri";

var myStr = 'Iam a "double quoted" String inside double quotes';
console.log(myStr);

