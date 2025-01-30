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

// let userDetails ={
//     name: "Sam",
//     age: 25,
//     city:"Hyd"
// };
//     console.log(userDetails);
    
//     let x = JSON. stringify(userDetails);
//     console.log("JSON object "+x);
    
//     let y = JSON.parse(x);
//     console. log(y);

//!api  fetching
//! https://jsonplaceholder.typicode.com/users

// function fetchUsers()
// {
//     let response = fetch(" https://jsonplaceholder.typicode.com/users");
//     //console.log(response);
//     response.then(result=>{
//        // console.log(res.json());
//        return result.json().then(data=>{
//         console.log(data);
//        })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();
// function fetchUsers() {
//     let response = fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     response
//       .then((result) => {
//         // console.log(result.json());
//         return result.json().then((data) => {
//           // console.log(data);
//           let store = document.getElementById("store");
//           // console.log(store);
//           data.map((user) => {
//             // console.log(user);
//             store.innerHTML += `
//             <tr>
//               <td>${user.id}</td>
//               <td>${user.name}</td>            
//               <td>${user.email}</td>
//               <td>${user.company.name}</td>
//             </tr>
//             `;
//           });
//         });
//       })
//       .catch((err) => console.log(err));
//   }
//   fetchUsers();

//! take array of empolyee object, where each object contains proeprties such as 
// empolyeeid,
// empolyee name, 
// empolyee company, 
// empolyee salary, 
// empolyee address 
//empolyee city and 
//empolyee area
//print these proeprties in a form of table on the UI by using javascript 

// let userDetails ={
//     id : 588,
//     name : "varshith",
//     company : "IBM",
//     salary : 20,
//     address:{   city : "hyd",
//         area : "kompally",},
//     details:function(){
//         return  
//     }
  
// }
// console.log(userDetails);