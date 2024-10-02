// console.log("hello");
// window.console.log("hello2");
// window.alert("Ranjan");

// console.dir(document);
// console.dir(document.body);
// console.log(document.body);

// console.dir(document.head);

// console.dir(document.body.childNodes[1]);

// console.dir(document.body.style.background="green");

// document.body.childNodes[3].innerText="abcd";

// Selecting with id 
// let heading=document.getElementById("heading");
// console.dir(heading);

// Selecting with class 
// let heading=document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);

// let button=document.getElementById("myId");
// console.dir(button);

// let heading=document.getElementsByClassName("myClass");
// console.dir(heading);
// console.log(heading);

// selcting with Tag 
// let parahs= document.getElementsByTagName("p");
// console.dir(parahs);

// Query Selector 
// let elements=document.querySelector("p"); //1st element 
// console.dir(elements);

// let allEle=document.querySelectorAll("p");//all element
// console.dir(allEle);

// let elements=document.querySelector(".myClass"); //1st element 
// console.dir(elements);

// let allEle=document.querySelectorAll(".myClass");//all element
// console.dir(allEle);

// let button=document.querySelector("#myId");
// console.dir(button);

// Properties 

// 1.tagName 
// let elements=document.querySelector("p"); //1st element 
// console.dir(elements);
// console.dir(elements.tagName);

// To access first child 
// console.dir(document.body.firstChild);

// document.querySelector("div");
// document.querySelector("div").children;

//innerText
// let div=document.querySelector("div");
// console.dir("div");
// console.dir(div.innerText);

// innerHTML 
// let div=document.querySelector("div");
// console.dir("div");
// console.dir(div.innerHTML);

//textcontent:returns text content even for hidden elements.
// div.innerText="abcd";
// let div=document.querySelector("div");
// console.dir(div);

// div.innerHTML="<div> inner div</div>";

// let heading=document.querySelector("h1");
// console.dir(heading);

// heading.innerText="new Heading";
// heading.innerHTML="<i>new Heading</i>";

// Textcontent :textcontent is used to look for hidden elements.
// console.dir(heading.textContent);

// Create a H2 heading element with Text -"Hello Javascript".Append "from apna College students to this text using JS."
// document.querySelector("h2").append(" from Apna College students");
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText + "from Apna college students"; //concatenate

// Create 3 divs with common class name-box Access them & add some unique text to each of them.
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    console.log(div.innerText=`new unique value ${idx}`);
    idx++;
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
// console.dir(divs);
