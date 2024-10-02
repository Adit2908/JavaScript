// function myFuncttion(){
//     console.log("Welcome to Apna College");
//     console.log("We are learning JS!");
// }

// myFuncttion();

// function myFuncttion(msg,n){
//     //parameter ->input
//     console.log(msg*n);
// }

// // myFuncttion();
// myFuncttion("I Love JS",100);//argument

// function two number sum 
// function sum(x,y){
//     console.log(x+y);
// }


// function sum(x,y){
//     s=x+y;
//     console.log("before return");
//     return s;
//     console.log("After return");
// }

// let val=sum(345,567);
// console.log(val);

// Arrow function 
// const functionName=(param1,param2...)=>{
//     //do some work 
// }

// sum 
// const sum=(a,b)=>{
//     console.log(a+b); 
// }

// multiplication 
// const arrowMul=(x,y)=>{
//     console.log(x*y);
// }

// const printHello=()=>{
//     console.log("Hello World!");
// }

// const printHello=()=> console.log("Hello World!");

// Create a function using the function keyword that takes as an argument & returns the number of vowels in the String.  
// function countVowels(str){
//     let count=0;
//     for (const char of str){
//         if (char==="a" || char==="e"|| char==="i"||char==="o"||char==="u"){
//             count++;
//         }
    
//     }
//     // console.log(count);
//     return count;
// }


// Create an arrow function to perform the same task 
// const countVowels=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// forEach 
// let arr=["pune","delhi","mumbai","varanasi","gorkhpur","goa","banglore","kolkata"];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })


// For a given array of numbers,print the square of each value using the forEach loop 
// let arr=[11,12,13,14,15,16,17,18,19,20];
// // arr.forEach((val)=>{
// //     console.log(val*val);
// // })

// let calcSquare= (val)=>{
//         console.log(val*val);
//     };

// arr.forEach(calcSquare);


// Map function 
// let arr=[11,12,13,14,15,16,17,18,19,20];
// arr.map((val)=>{
//     console.log(val);
// })

// let arr=[11,12,13,14,15,16,17,18,19,20];
// let newArr=arr.map((val)=>{
//     return val*10;
// });
// console.log(newArr);

// filter 
// let arr=[23,34,56,78,98,76,54,43,32,21];

// let newArr=arr.filter((val)=>{
//     return val>50;
// });
// console.log(newArr);


// Reduce 
// let arr=[1,2,3,4,5];
// let output=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// let arr=[1,2,3,4,5,789];
// let output=arr.reduce((res,curr)=>{
//     return res>curr ? res:curr  ;
// });
// console.log(output);

// We are given array of marks of students.Filter out the marks of students that socred 90+. 
// let marks=[45,67,98,92,87,34,49];
// let goodMarks=marks.filter((val)=>{
//     return val>90;
// });
// console.log(goodMarks);

// take a number n as input from User.Create an array from 1 to n. 
// use the reduce method to calulate sum of all numbers in the Array.
// Use the reduce method to calculate multiplication of all numbers in the Array.
// let n=prompt("enter a number");

// let arr=[];

// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sumNum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sumNum);

// let mulNum=arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log(mulNum);



// You are given array A of integers with its size. First, make a new array B after multiplying each element of the previous array by 2.
// Then in another array C stores elements from B only if it is divisible by 8.
// Finally print the array C. Please note that you have to print one element in one line.
// Example: Suppose A is [2,4,6,20], then B will be [4,8,12,40] and finally C will be [8,40].

// Sample Input:

// 4(Size)
// 2
// 4
// 6
// 20
// Sample Output:

// 8
// 40
 
// let A=[2,4,6,20];
// var B=A.map((val)=>{
//     return(val*2)
// });
// // console.log(B);




// let newArr=B.filter((val)=>{
//     if(val%8===0){
//         return(val);
//     }
// });
// console.log(newArr);


// var size_ = parseInt(readLine().trim());
// var A = []
// for(var i = 0 ; i < size_; i++ ){
//     var x = parseInt(readLine().trim());
//     A.push(x);
// }
// // YOUR CODE GOES HERE
// var B= A.map((val)=> val*2);
// var C =B.filter((val)=>val%8 === 0);
  
// for(let val of C){
//     console.log(val);
// }
