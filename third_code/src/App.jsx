// export default Component
// export named Component
// export multiple Component
// export simple JS variable and function



import { Component } from "react";
// Example of importing default named amd multiple component and JS variable and finctions
import User, { Account, Profile,a,b,sum } from "./UserComponent"

function App() {
  // creating Javascript varible
 const userName = "Agya Sharma";
 let x=20;
 let y=30;
  return (
    <>
     <h1>Main Page</h1>
     <User/>
{/* calling Javascript variable */}
     <h2>
      User Name = {userName}
     </h2>
    <h4>{x*y}</h4>
    <button onClick={()=>alert("Hello India")}>Click me</button>



     <Profile />
     <Account />
     <h3>
      Variables are = {a},{b}<br />
      Sum = {sum()}
     </h3>


    </>
  )
}

export default App
