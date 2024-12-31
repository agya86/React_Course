// Make HTML Form
// Add some field 
// Use statefor field data 
// submit and contro form 
// Form Validateion
// Pass function as props

import { useState } from "react"
import Login from "./Login"




// function App(){

//     const [name,setName]=useState("")
//     const [movie,setMovie] = useState("")
//     const [checkval,setCheckval] = useState(false)

//     function submitform(e){
//         console.warn(name,"-----------",movie,"-----------",checkval)
//         e.preventDefault()

//     }

//     function clearall(){
//         setName("")
//         setMovie("")
//         setCheckval(false)
//     }

//     return <>
//         <form onSubmit={submitform}>
//         <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <br/>
//         <br/> 
//         <select onChange={(e)=>setMovie(e.target.value)} value={movie}>
//             <option value="">Select Option</option>
//             <option value="Marvels">Marvels</option>
//             <option value="DC">DC</option>
//             <option value="Cross">Cross</option>
//         </select>
//         <br/>
//         <br/>
//         <input type="checkbox" onChange={(e)=>setCheckval(e.target.checked)} checked ={checkval}/> Accept Terms and conditions
//         <br/>
//         <br/>
//         <button type="submit">Submit</button>
//         <button onClick={clearall}>clear</button>

//         </form>
    
//     </>
  
// }


function App(){

    function getData(){
        alert("Data ha been Submitted")
    }

    return<>
    <Login data={getData}/>
    </>
}

export default App