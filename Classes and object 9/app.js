// const student ={
//     fullName: "Aditya Pratap Rao",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks =",this.marks);//student.marks
//     },
// };

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun ={
//     salary:50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     }
// };

// const karanArjun2 ={
//     salary:50000,
// };

// const karanArjun3 ={
//     salary:50000,
// };

// const karanArjun4 ={
//     salary:50000,
// };


// karanArjun.__proto__ =employee;
// karanArjun2.__proto__ =employee;
// karanArjun3.__proto__ =employee;
// karanArjun4.__proto__ =employee;

// classes in JS 
// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

    // setBrand(brand){
    //     this.brandName=brand;
    // }
// }

// To create a object with a class 
// let myobject = new className(); 

// let fortuner =new ToyotaCar("fortuner",60);//constructor
// fortuner.setBrand("fortuner");
// let lexus= new ToyotaCar("lexus",100);//constructor
// lexus.setBrand("fortuner");

// Inheritance in JS 
// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj= new Child();


// class Person{
//     constructor(name){
//         this.species="homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("Do nothing.")
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);//to invoke parent class constructor
        
//     }
//     work(){
//         super.eat();
//         console.log("solve problems,build something.")
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("Treat Patients")
//     }
// }

// let AdityaObj = new Engineer("Aditya Pratap Rao");
// let RanjanObj = new Doctor();

// Qs . You are creating a website for your college .Create a class User with 2 properties, name & 
// email . It also has a method called viewData() That allows users to view website Data . 
// let DATA = "secret information";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("data =",DATA);
//     }
// }

// let student1 = new User("Aditya","asd@gmail.com");
// let student2 = new User("Ranjan","dse@gmail.com");

// let teacher1= new User("Brijbhushan","brij123@gmail.com");


// Create a new class called admin which inherits from User. Add a new method called editData to admin   
// that allows it to edit website Data .
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
        
//     }
//     editData(){
//         DATA ="some new value";
//     }
// }

// let admin1 = new Admin("admin","admin@college.com");


// error handling 
let a=5;
let b=10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+c);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);


