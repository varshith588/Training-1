// function addToCart(){
//     alert("Product is added to cart")
// }

// function add(a,b){
//     console.log(a+b);
// }
// add(10 , 40)
// add(30 , 40)
// add(50 , 40)
// add(100 , 40)
// add(13 , 50)

// ! function without parameters
// function demo(){
//     console.log("function without parameters");
// }
// demo();

// ! function with parameters

// function userDetails(name , age , city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("Yeshwant" , 20 , "Hyderbad");

//! anonymus function
// function(){
//     console.log("Anonymus function");
// }
// ();

// ! function  expression
// let x = function(){
//     console.log("function expression is executing");
// };
// x();


// ! IIFE
// (function(){
//     console.log("IIFE");
// })();

//! arrow function
// function demo() 
// {
//     console.log("Hello");
// }
// demo();

// let x = ()=>console.log("Arrow function");
// x();

// let x =_=>console.log("Arrow function");
// x();

// let x =a=>console.log(a);
// x(5);

// let x =(a , b)=>console.log(a+b);
// x(5,5);
// let x=_=>{console.log("Hi");
//         console.log("Hello");
//         console.log("Bye");}
//     x();

//! return keyword
// function demo(a,b){
//    return a+b;//! explicit return
// };
// let x = demo(5,5);
// console.log(x);

// let y = (a,b) => a+b;//! implicit return
// let a = y(10,20);
// console.log(a);

// let z = (a,b)=>{return a+b};//! explicit return
// let b = z(10,100);
// console.log(b);                     

//! Higher oreder function
//  function hof(a){
//     return a;
//  };
//  let x = hof(function(){return "hello  i am a callback function"});
//  console.log(x);

// function parent(callback){ // higher order function
//     return callback
// }
//  let x = parent(add(5,5));
// confirm.log(x);

// function add(a,b){ // callback  function
//     return a+b
// }
// console.log(add(5,5));


// // closure
// function x(){
//     var user = "Vikas";
//     let company = "Google";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a , b);
// }
// x();