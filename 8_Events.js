 //Events in JS

 //mouse events(click, double click)
 //keyboard events(keypress, keyup, keydown)
 //form events(submit etc)
 //print event and many more

let btn1= document.querySelector('#btn1');

// btn1.onClick =(e)=>{
//     console.log(e);
//     console.log(e.type, e.target, e.clientX, e.clientY);
//     console.log('btn1 was clicked');
//     let a=25;
//     a++;
//     console.log(a);
// }


let div1 = document.querySelector("div");
div1.onmouseover = (e)=>{
    console.log(e);
    console.log("you are inside div");
}

/// JS code handling for event >>> inline event handling


//Event listeners
//node.addEventListener(event, callback);
document.addEventListener("click", (event)=>{
    console.log(event);
    console.log("button was clicked- handler 1");
});
document.addEventListener("click", (event)=>{
    console.log(event);
    console.log("button was clicked- handler 2");
});

const handler3 =(event)=>{
    console.log(event);
    console.log("button was clicked- handler 3");
}
document.addEventListener("click", handler3);
document.addEventListener("click", (event)=>{
    console.log(event);
    console.log("button was clicked- handler 4");
});
//node.removeEventListener(event, callback);

btn1.removeEventListener("click", handler3);