// let heroes=["ironman","hulk","thor","batman"];
// console.log(heroes);
// let marks=[96,75,48,83,66];
// let info=["rahul",86,"Delhi"];

// let marks=[96,75,48,83,66];
// console.log(marks);
// console.log(marks.length);

// Looping over an array
// print all elements of the array 
// let heroes=["ironman","hulk","thor","batman","black adam","aquaman"];

// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }


// for(let idx=1;idx<=heroes.length;idx++){
//     console.log(heroes[idx-1]);
// }


// for-of loop 
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities=["Gorakhpur","Kushinagar","Lucknow","Goa","Gurgaon","Pune","Kerala"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// for a given array with marks of students [85,97,44,37,76,60].Find the average marks of the entire class.
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
   
// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log(`avg of the marks = ${avg}`);

// for a given array with price of 5 items [250,645,300,900,50].All items of  an offer of 10% off on them.change the array 
// to store the final price after applying offer.
// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     items[i]=items[i]-items[i]/10;
// }
// console.log(items);

// let i=0;
// for(let val of items){
//    let offer=val/10;
//    items[i]=items[i]-offer;
//    console.log(`value after the offer=${items[i]}`)
//    i++;
// }

// Array methods 
// 1.Push
// let foodItems=["potato","apple","peach","avocado","dragon fruit","Watermelon"];
// foodItems.push("Guava");
// console.log(foodItems);

// 2.pop
// let foodItems=["potato","apple","peach","avocado","dragon fruit","Watermelon"];
// foodItems.pop();
// console.log(foodItems);

// 3.tostring()
// let foodItems=["potato","apple","peach","avocado","dragon fruit","Watermelon"];
// console.log(foodItems.toString());

 
// 4.Concat():joins multiple arrays & returns Result.  
// let marvelHeroes=["Ironman","Captain America","Thor","Hulk","Deadpool"];
// let dcHeroes=["Superman","Aquaman","Black Adam","Batman","Wonder woman"];
// let indiaHeroes=["Krrish","Shaktiman","Junior-G","Aaraymaan","Flying Jatt"];
// let heroes= marvelHeroes.concat(dcHeroes,indiaHeroes);
// console.log(heroes);

// 5.unshift : Add to start
// let marvelHeroes=["Ironman","Captain America","Thor","Hulk","Deadpool"];
// marvelHeroes.unshift("Antman");
// console.log(marvelHeroes);

// 6.slice: returns a piece of array slice(startidx,endidx)
// let marvelHeroes=["Ironman","Captain America","Thor","Hulk","Deadpool"];
// console.log(marvelHeroes.slice(1,4));

// 7. Splice : change original array(add,remove,replace)splice(startidx,delcount,newelement)
// let arr=[1,2,3,4,5];
// Add element 
// arr.splice(2,0,101);
// console.log(arr);

//delete element
// arr.splice(3,1);
// console.log(arr);

// Replace Element 
// arr.splice(3,1,101);
// console.log(arr);

// Create an array to store companies "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// arr.Remove the first company from the array  
// remove uber and add ola in its place 
// Add amazon at the end 
// 1.let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(0,1);
// console.log(companies);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2,1,"Ola");
// console.log(companies);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.push("Amazon");
// console.log(companies);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// let company=["Apple","Amazon","Meta"]

// company.push(companies[0]);
// // console.log(company);
// companies.splice(0,1);
// // console.log(companies);
// let C=companies.concat(company);
// console.log(C);


// You are given an array of integers with its size. Sort them and print them. Please note that you have to print one element in one line.

// Sample Input:

// 4(Size)
// 10
// 2
// 30
// 14
// Sample Output:

// 2
// 10
// 14
// 30

let arr=[4,10,2,30,14];
arr.sort((a,b)=> a-b);
for (let i of arr){
    console.log(i);
}

arr.shift();
// arr.sort();
// console.log(arr);






