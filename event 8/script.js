let btn1=document.querySelector("#btn1");

// btn1.onclick= () => {
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };


// event object 
// btn1.onclick= (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    
// };



// let div=document.querySelector("div");
 
// div.onmouseover= () => {
//     console.log("You are inside div.");
// }

//Event listener
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked several times.-handler1")
// })

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked several times.-handler2")
// })

// const handler3=()=>{
//     console.log("button1 was clicked several times.-handler3")
// };

// btn1.addEventListener("click",handler3);
   

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked several times.-handler4")
// })

// btn1.removeEventListener("click",handler3);

// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.  
let modeBtn =document.querySelector("#mode");
let body=document.querySelector("body");

let currMode="light";//dark

modeBtn.addEventListener("click",()=> {
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.add("dark");
       
    }

    console.log(currMode);
})

