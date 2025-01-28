// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array 
// //! and store it inisde one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// // console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//! 

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//! 

// let ele = document.getElementsByName("formData");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//! 
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);



// let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

    // let btn = document.querySelector("#btn");
    // btn.addEventListener("dblclick",()=>{
    //     console.log("double clicked");
    // })


    // let divBlock = document.getElementById("divBlock");
    // divBlock.addEventListener("mouseover",()=>{
    //     document.body.style.backgroundColor="yellow"
    //     divBlock.style.backgroundColor="blue"
    // })

    // divBlock.addEventListener("mouseleave",()=>{
    //     document.body.style.backgroundColor="orange"
    //     divBlock.style.backgroundColor="aqua"
    // })


    // let inp =document.getElementById("inp");
    // inp.addEventListener("keydown",()=>{
    //     console.log("keydown");
    // })

    // inp.addEventListener("keyup",()=>{
    //     console.log("keyup");
    // })

    // let ele = document.createElement("h1");
    // ele.innerText = "Dyanmic creation of hmtl elements";
    // ele.id = "demo";
    // console.log(ele);
    // let image = document.createElement("img");
    // image.src = "./3606208.jpg";
    // console.log(image);
    // document.body.appendChild(ele);
    // document.body.appendChild(image);

//     let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let password = document.getElementById("uPass");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // console.log(event);
//   // console.log("Form sumitted");
//   let uname = username.value;
//   let umail = mail.value;
//   let upass = password.value;
//   let userDetails = { uname, umail, upass };
//   console.log(userDetails);
//   localStorage.setItem("userDteails", JSON.stringify(userDetails));
// });
// localStorage.clear();

//!
// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// image.style.width="550px";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// // console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "CLOSURE";
// h1.style.textAlign="center";



// let btn = document.createElement("button");
// btn.innerText = "TextView";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white"

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);
// let vd = document.createElement("video");
// vd.setAttribute("src", "./videoplayback.mp4");
// vd.setAttribute("controls", "true");
// console.log(vd);
// document.body.appendChild(vd);

//!
let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.getElementsByName("gender");
// console.log(gender);

// ! hiding and showing the password values
check.addEventListener("click",event=>{
    //console.log(event.target.checked);
    if(event.target.checked == true){
        password.setAttribute("type" , "text");
        show.innerText = "hide passwod";
    }else{
        password.setAttribute("type" , "password");
        show.innerText = "show password";
    }
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let UN = username.value;
  let UP = password.value;
  let gen = "";

  for (let i = 0; i <= gender.length - 1; i++) {
    // console.log(i);
    // console.log(gender[i].value);
    // console.log(gender[i].checked);
    if (gender[i].checked == true) {
      gen = gender[i].value;
    }
  }

  // console.log(UN, UP, gen);
  let userDetails = {
    useranme: UN,
    password: UP,
    gender: gen,
  };
  console.log(userDetails);
  sessionStorage.setItem("userData", JSON.stringify(userDetails));
});