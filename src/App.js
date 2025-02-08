// import React from "react";

// function App() {
//   // let ele  = React.createElement("div" , {className:"App"} , 
//   //   React.createElement("h1" ,null, "Header")
//   // )
//   let username = "Maheshwari";
//   return (
//     // <div className="App">
//     //  <h1>Header</h1>
//     //  <input />
//     // </div>
//     // ele
//   //  <section>
//   //    <h1>One JSx element</h1>
//   //   <p>lorm3
//   //   </p>
//   //  </section>
// <div>
// <h1>{username}</h1>
//   <p>{100+100}</p>
// </div>
//   );
// }
// export default App;

// ! components

// !CBC
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Class based component</h1>
//     )
//   }
// }
// export default App;

// ! FBC

// function App(){
//   return(
//     <h1>Function based component</h1>
//   )
// }
// export default App;

//! OR

// const App=()=>{
//   return(
//     <h1>Arrow function component</h1>
//   )
// }
// export default App;

// ! component composition
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//       <Sidebar1/>
//       <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// !props
// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx 
//         username="Vamshi"
//         age={20}
//         hobbies={["Playing" , "reading books" , "stock"]}
//         address={{city:"sircilla", area:"Gandinagar"}}
//         sendFun={function(){alert("hi i am vamshi")}}
//         /> */}

//         <FBCPropEx 
//         username="Abhinay"
//         isMarried={true}
//         hobbies={["Chatting" , "Reading" , "Eating" , "Sleeping"]}
//         />
//       </div>
//     )
//   }
// }


 // !props children
// import React from 'react'
 // import PropChildEx from './propsex/PropChildEx'
 // import SubChild from './propsex/SubChild'
 // import Child1 from './propsex/Child1'
// const App = () => {
//   return (
//     <div>
//     app
//       {/* <PropChildEx num={1000}>
//         <h1>this is data coming from props children</h1>
//         <SubChild/>
//       </PropChildEx> */}
//       {/* <Child1 university="Mallareddy university"/> */}
//     </div>
//   )
// }

// export default App

// ! State 
//import React, { Component } from 'react';
// import CBCStateEx from './stateexample/CBCStateEx';
//import FBCStateEx from './stateexample/FBCStateEx';
//class App extends Component {
    //render() {
        //return (
//             <div>
//                 <FBCStateEx ></FBCStateEx>
//             </div>
//         );
//     }
// }

// export default App;

// import React from 'react'
// import "./App.css"
// import { FunctionalComponent } from './components/props/FunctionalComponent'
// import ClassComponent from './components/ClassComponents'
// const App = () => {
//   return (
//     <div>
//     {/* <FunctionalComponent clg="MRU" msg="Good Afternoon" apply={true}/> */}
//     <ClassComponent/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import './App.css';
import MyForm from './components/MyForm';



function App() {
  return (
    <div className="App">
     <MyForm></MyForm>
     </div>
  );
}

export default App;


