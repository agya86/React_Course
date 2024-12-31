// State
// what is State
// What are hooks
// how to use state
// Example of StaticRange
// State in different Components
// multiple states
// Update state with Click Button
// how state work 


import { useState } from "react"
import Counter from "./counter"
import User from "./User"

function App(){

const [data,setData]=useState(0)
const [prt,setPrt] =useState(false)
const [userdata,setuserdata] = useState({
  "name":"Agya Sharma",
  "color":"red"
})

function updateData(){
  setData(data+1)
}

function updateUser(val){
  setuserdata({
    "name":val.target.value,
  "color":"skyblue"
  })
}
console.warn(prt)
  return <>
  { prt?
  <User data ={userdata}/>
:""}

  <button onClick={()=>setPrt(!prt)}>update user</button>
  <Counter data={data}/>
  <button onClick={updateData}>count</button>
  <button onClick={()=>setData(data*2)}>show multiply</button>
  Enter Name <input type="text" onChange={updateUser}/>
  </>
}

export default App