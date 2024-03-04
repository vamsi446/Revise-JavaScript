// array is a type  of object in JS
// arrays are mutable
let marks =[98, 32, 21, 85,2];
marks[0]=10;
console.log(marks, typeof marks);

for(let i=0; i<marks.length; i++){
    console.log(i, marks[i]);
}


let marvel =["ironman","spiderman", "thor", "captain america"];
let dc=["superman", "batman"];


console.log(marvel.concat(dc));

let veggies =["potato", "tomato"];
veggies.push("cucumber");

veggies.push(1);
console.log(veggies);

veggies.pop("1");
console.log(veggies);

console.log(veggies.toString());



//unshift - add element int he start
veggies.unshift("tofu");
console.log(veggies);
//shift - delete element from the start
veggies.shift();
console.log(veggies);
//slice
console.log(veggies.slice(0,2));

//splice change original array (add, remove, replace)
//splice(startIdx, delcount, newEl1....)

veggies.push("onion");
veggies.push("cabbage");
veggies.push("sweet potato");
console.log(veggies);

veggies.splice(2, 2);
console.log(veggies);



