// how to create Class Component
// Diffference between JS function call and react function call
// make function
// make button on click event
// call function on click event
// call arrow function
// pass params with function call

import ClassComp from "./ClassCOmp"



function App() {
  function callfun(){
    return alert("This is simple function")
  }

const arrowfun =()=>{
    return alert("This is Arrow function")
  }

const color =(name)=>{
    return alert(name)
  }

function myname(name){
  alert(name)
}

  return (
    <>
      <ClassComp/>
      <button onClick={callfun}>simple</button>
      <button onClick={arrowfun}>Arrow</button>
      <button onClick={()=>color("red")}>Red</button>
      <button onClick={()=>color("green")}>Green</button>
      <button onClick={()=>myname("Agya")}>My Name</button>


    </>
  )
}

export default App
