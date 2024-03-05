//DOM Manipulation

//document.setAttribute("attr", "value")
//document.getAttribute("attr")

const div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);
const p = document.querySelectorAll("p");
console.log(p);
for (let i of p) {
  console.log(i.getAttribute("class"));
}
const button = document.querySelector("button");
button.setAttribute("class", "button");

//node.style

div.style.backgroundColor = "red";
//div.style.visibility = "hidden";

//insert elements
// node.append(el) node.prepend(el); node.before(el); node.after(el);

let newBtn = document.createElement("button");
newBtn.innerText = "click me  !";

div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi  Iam new!</i>";

document.querySelector("body").prepend(newHeading);

//appendChild()
//parentNode.append(node1, node2, ..., nodeX);

//delete elements
// node.remove()
let para = document.querySelector(".para");
para.remove();
//parentNode.removeChild(childNode)



//div.classList div.classList.add() div.classList.removb e()