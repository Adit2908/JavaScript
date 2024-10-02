// 1.getAttribute(attr) 
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);


// let parahs=document.querySelector("p");
// console.log(parahs);

// let ids=parahs.getAttribute("class");
// console.log(ids);

// 2.SetAttribute(attr,value): to set the attribute value this.  
// let parahs=document.querySelector("p");
// console.log(parahs.setAttribute("class","newClass"));

// 3.Style 
// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.visibility="hidden";

// div.style.fontSize="26px";
// div.innerText="Hello!";

// Insert elements 
// 1.create element 
// let newBtn= document.createElement("button");
// newBtn.innerText="Click me!";
// console.log(newBtn);

// 2.Insert element 
// 1.Node.append(el):  adds at the end of the node(inside)
// let div=document.querySelector("div");
// div.append(newBtn);
// console.log(div);

//2.Node.prepend(el): adds at the start of the node(inside)
// div.prepend(newBtn);

//3.node.before(el): adds before the node(outside)
// div.before(newBtn);

//4.node.after(el): adds after the node(outside);
// div.after(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerText="I am the Devil of my world!";

// let div=document.querySelector("div");
// div.before(newHeading);
// console.log(div);

//5.Delete Element:node.remove()- removes the element
// let parahs=document.querySelector("p");
// parahs.remove();
// newHeading.remove();


// Create a new button element .Give it a text "click me",background color of red  & text color of white. 
let body=document.querySelector("body");

let specialBtn=document.createElement("button");
specialBtn.innerText="Click me!";
specialBtn.style.backgroundColor="red";
specialBtn.style.color="white";

body.prepend(specialBtn);

// Create a <p> tag in HTML,give it a class and some styling. 
// Now create a class in CSS and try to append this class in CSS and try to append this class to the <p> Element 
// Did you notice, how you overwrite the class name when you add a new one? solve this problem using class list. 
let parahs=document.querySelector("p");


parahs.getAttribute("class");
parahs.setAttribute("class","newClass");
