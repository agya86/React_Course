import { useState } from "react"

function Login(prop) {
    
    const [userid,setUserid] = useState("")
    const [password,setPassword] = useState("")
    const [errmsg,setErrmsg]=useState(false)
    const [usererromsg,setUsererrmsg]= useState("")
    const [psderromsg,setPsderrmsg]= useState("")


    function formHandler(e){
        e.preventDefault()
        setUsererrmsg("")
        setPsderrmsg("")
        console.warn(userid.length<3,"--------------",password.length)
        if (userid.length<3){
            setErrmsg(true)
            setUsererrmsg("User Name is Invalid")
        }
        console.warn(errmsg,"-----------",usererromsg)
        if (password.length<3){
            setErrmsg(true)
            setPsderrmsg("User Name is Invalid")
        }

        

    }

    return <>
        <h1>Login</h1>
        <form onSubmit={formHandler}>
        <input type="text" placeholder="Enter User ID" value={userid} onChange={(e)=>setUserid(e.target.value)}/><span style={{backgroundColor:"red"}}> {errmsg?usererromsg:""} </span>
        <br/>
        <br/>
        <input type="password" placeholder="Enter User Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><span style={{backgroundColor:"red"}}>{errmsg?psderromsg:""}</span>
        <br/>
        <br/>
        <button type="submit" onClick={prop.data}> Submit</button>
        </form>

    </>

}

export default Login