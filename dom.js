// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
//  ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the orginal array and store it inside one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element) => {
// //console.log(element);
// element.style.backgroundColor = "gold";
// })

//!

// let ele = document.querySelectorAll(".test");
// console.log(ele)

let ele = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    BigInt.addEventListner("click",()=>{
        console.log("button clicked");
        alert("hi")
        document.body.style.backgroundColor="red"
    })