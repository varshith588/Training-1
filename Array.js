// const user1 = "Sathvik";
// const user2 =  "Teju";
// const user3 = "Vishu";
// const user4 = "Pavithra";
// const user5 = "Raghu";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

//const user = ["Shravan" , "Sathvik" , "Raghu", "Teju", "Vishnu"]

// let users = ["Ramaya" , "SaiSmitha", "Rahul", "Prabhas","NTR"];
// //let x = users.map((user)=>{
// //    return user;
// // })
// //console.log(x);

// let x = users.forEach((user)=>{
//     //console.log(user);
//     return user;
// });
// console.log(x); // !undefined

//! create array of objects 
// let usersDetails = {
//     name : "Varshith",
//     age:21,
//     company : "IBM",
//     sal : 7465,
//     details:function(){
//         return  `My anme is ${this.name} and i am working in ${thiis.company}`
//     }
// }

//! JSON

let userDetails ={
    name: "Sam",
    age: 25,
    city:"Hyd"
};
    console.log(userDetails);
    
    let x = JSON. stringify(userDetails);
    console.log("JSON object "+x);
    
    let y = JSON.parse(x);
    console. log(y);