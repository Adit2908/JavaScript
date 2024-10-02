// Synchronous programming - it executes the code sequence by sequence
// console.log("one");
// console.log("two");
// console.log("three");


// Asynchronous programming- executing the most important instruction whenever you want . 
// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,4000)//timeout 2s=2000ms.


// setTimeout(()=>{
//     console.log("hello");
// },4000);//Timeout;


// 2.example  
// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },4000);//Timeout;

// console.log("three");
// console.log("four");

// 3.Callback : - A callback is a function passed as an argument to another function. 

// Synchronous Callback 
// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a,b);

// }

// calculator(1,2000,sum);

// calculator(1,2000,(a,b)=> {
//     console.log(a + b);
// });

// Asynchronous callback 
// const hello = () =>{
//     console.log("hello");
// };

// setTimeout(hello,3000);

//nesting

// let age =19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child")
// }

// Callback Hell :- nesting callbacks stacked below one another forming a pyramid structure .(pyramid of Doom)  
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000);   
// }

// getData(1);
// getData(2);
// getData(3);


// function getData (dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=> {
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     });
// });

//callback Hell
// getData(1,()=> {
//     console.log("getting data2 ...");
//     getData(2,()=>{
//         console.log("getting data3 ...");
//         getData(3,()=>{
//             console.log("getting data4 ...."); 
//             getData(4);
//         })
//     });
// });

// Promises: - Promise is for "eventual" completion of TextTrackList.It is an object in JS . 
// It is a solution to callback hell .  
// let promise= new Promise((resolve,reject)=>{})  

// let promise =new Promise((resolve,reject)=>{
//     console.log("I am a promise.");
//     // resolve("success");
//     // or 
//     reject("some error occured"); 
// })


// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//             // resolve("success");
//             reject("error");

//             if (getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

// Promise
// Promise.then((res)=>{...})  - in case of fulfilled case.
// Promise.catch((err) => {...})  - in case of rejected State .  

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise.");
//         resolve("success");
//         // reject(" network error");
//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// });


// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// Promise chain 

// function asncFunction() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");

//         },4000);
//     });
// }



// console.log("Fetching data1 .....");
// let p1=asncFunction();
// p1.then((res)=>{
//     console.log(res);
// });

// function asncFunction1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");

//         },4000);
//     });
// }
// function asncFunction2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");

//         },4000);
//     });
// }
// console.log("Fetching data1 .....");
// asncFunction1().then((res)=>{
//     console.log("Fetching data2 .....");
//     asncFunction2().then((res)=>{
//     })
// });

// 2. example  

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }


// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

//above can be written as
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{
//     console.log(res);
// })

// Async-Await- aync function always returns a promise.
// async function hello() {
//     console.log("hello");
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000)
//     });
// }

// async function getWeatherData() {
//     await api();//1st 
//     await api();//2nd
// }
 
// Async-Await example
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
//     console.log("getting data6...");
//     await getData(6);
// }

// IIFE - (Immediately Invoked Function Expression) - it is a function that is immediately called as soon as it is defined. 
// 1.(function (){                 2.(()=>{                            3.(async ()=>{
                                                                          
                                                                        //   })();

                                       //arrow function
                                    //   })();

// })(); normal function


// Example: - 
(async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
    console.log("getting data6...");
    await getData(6);
})();