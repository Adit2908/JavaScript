const URL ="https://cat-fact.herokuapp.com/facts";
// const URL ="https://cat-fact.herokuapp.com/facts/Aditya";
const factPara=document.querySelector("#fact")
const btn = document.querySelector("#btn");
 


// let promise = fetch(URL);
// console.log(promise);


// const getFacts = async() =>{
//     console.log("getting data.....");
//     let response =await fetch(URL);
//     console.log(response);//JSON format
// };


// const getFacts = async() =>{
//     console.log("getting data.....");
//     let response =await fetch(URL);
//     console.log(response);//JSON format
//     let data=await response.json();
//     console.log(data[0].text);
// };


const getFacts = async() =>{
    console.log("getting data.....");
    let response =await fetch(URL); 
    console.log(response);//JSON format
    let data=await response.json();
    factPara.innerText=data[0].text;//1
};

// promise chain 
// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data);
//         factPara.innerText=data[2].text;
//     })
// }

btn.addEventListener("click",getFacts);