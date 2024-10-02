/*Comments in Js*/

// Arithmetic operators in JS 
// let a=5;
// let b=2;
// console.log("a+b=",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b",a**b);


// Unary Operators
// let a=5;
// console.log("++a =",++a);
// console.log("a++ =",a++);
// console.log("a-- =",a--);
// console.log("--a =",--a);


// Assignment operator
// let a=5;
// a+=4;
// a-=4;
// a*=5;
// console.log(a);

//comparison operator
// Equal to 
// let a=5;
// //  let b=4;
// let b="5";
//  console.log("a==b",a==b)

// Strictly equal to 
// let a=5;
// let b="5";
// console.log("a===b",a===b);

// !==(Not equal to and type)
// let a=5;
// let b ="5";
// console.log("a!==b",a!==b);

// Logical  AND 
// let a=6;
// let b=5;
// let cond1=a>b;
// let cond2=a===6;
// console.log("cond1 && cond2",cond1 && cond2);

// Logical OR 
// let a=6;
// let b=7;
// let cond1=a>b;
// let cond2=a===6;
// console.log("cond1 || cond2 =",cond1 || cond2);

// Logical Not 
// let a=6;
// let b=7;
// console.log("!(a<b)=",!(a<b));

// Conditional Statement

// if statement 
// let age=18;

// if(age >= 18){
//     console.log("You can vote");
// }

// if (age<18){
//     console.log("You cannot vote.")
// }

// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if (mode==="light"){
//     color="white";
// }
// console.log(color);

// if-else statement 
// let mode="dark";
// let color;
// if(mode==="light"){
//     color="white";
// }else{
// color="black";
// }
// console.log(color);

// let age=500;
// if(age>=18){
//     console.log("can vote");
// }else{
//     console.log("cannot vote");
// }


//to check if a number is even or odd
// let num=914;
// if (num%2===0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }


//else-if opertor
// let age=6;
// if (age<=18){
//     console.log("Junior");
// }else if(age>=60){
//     console.log("Senior");
// }else{
//     console.log("middle");
// }


// let mode="light";
// let color;
// if(mode==="light"){
//     color="white";
// }else if(mode==="dark"){
//     color="black";
// }else if(mode==="pink"){
//     color="pink";
// }else{
//     color="magenta";
// }
// console.log(color);

// Ternary Operator 
// condition?true output:false output
// let age=61;
// let result= (age>18)? "adult":"not adult";
// let result= (age>18)? console.log("adult"):console.log("not adult");
// console.log(result);

// Get user input a number using prompt("Enter a number").Check if the number is a multiple of 5 or Notification. 
// let num=prompt("Enter a number");
// if(num%5===0){
//     console.log(num,"is a multiple of 5");
// } else {
//     console.log(num,"is not a multiple of 5");
// }


// Write a code which can give grades to student according to their score 
let score=prompt("Enter Your Score(0-100):");
let grade;
if (score>=90 && score<=100){
    grade="A";
}else if(score>=80 && score<=89){
    grade="B";
}else if(score>=70 && score<=79){
    grade="C";
}else if(score>=60 && score<=69){
    grade="D";
}else if (score>=50 && score<=59){
    grade="E";
}else{
    grade="F";
}
console.log("According to your performance,your grade is",grade);












