// for loop
// for(let i=1;i<=100;i++){
//     console.log("Nidhi Verma");
// }

// Calculate sum of first n numbers 
// let sum=0;
// let n=5000;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("sum is =",sum);

// print 1 to 100 
// for(let i=1;i<=100;i++){
//     console.log("i =",i);
// }


// Infinite loops
// for(let i=1;i>=0;i++){
//     console.log("i =",i);
// }


//while loop
// let i=1;
// while(i<=5){
//     console.log("i =",i);
//     i++;
// }

// let i=1;
// while(i<=5){
//     console.log("Apna college");
//     i++;
// }

//do while 
// let i=20;
// do{
//     console.log("aditya");
//     i++;
// }while(i<=10);

// let i=1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i<=5);

// /for-of-loop 
// for(let val of str){
//     //do somework
// }

// let size=0;
// let str="React";
// for(let i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log("size of str is",size);


// for in loop 
// let student={
//     name:"Rahul Kumar",
//     age:30,
//     agpa:7.5,
//     isPass:true
// };

// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

// print all even numbers from 0 to 100; 
// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log("num =",num);

//     }
// }

// print all numbers from 0 to 100
// for(let num=0;num<=100;num++){
//     if(num%2!=0){
//         console.log("num =",num);
//     }
    
// }

// Create a game where you start with any game Number.Ask the user to keep guessing the game number until the user entered the correct Value. 
let gameNum=25;
let userNum=prompt("Enter any number(1-100)");
while(userNum!=gameNum){
    userNum=prompt("you entered wrong number,Guess again:");
}
console.log("congratulations,you entered the right number!")
