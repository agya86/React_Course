// User Vearible with JSX
// Condition inside JSX
// use function with JSX
// operation inside JSX
// Object and array with JSX
// Html Tag property with JSX


import Header  from "./Header"

function App(){
 let a=10,b=20;
//  let name ="Agya Sharma";
 let name =undefined;
 let imgvalue = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn3HWOxRVDzJuE0KoB7tAMLYZzMab_9142g&s"
  let userObject ={
    "name":"Agya Sharma",
    "Address":"Indore",
    "Age":25
  }
let objArray = ["Ram","Mohan","Sohan"]

 function testing(){
  return <h1>Hello India Tesing</h1>
}
  return(
    <>
    
    <Header />
    <h1>Hello {name?name:"No Name"}</h1>
    <Fruit />
    <h2>Sum is = {a+b}</h2>
    {testing()}
    <h2>Operation is = {sum(a,b,"")}</h2>
    <h1>First Name from Array : {objArray[0]}</h1>
    <h3>User Detail</h3>
    <p>
    {userObject.name} <br/>
    {userObject.Address} <br/>
    {userObject.Age} <br/>

    </p>

    <input type="text" value={objArray}/><br/>
    <img src={imgvalue} height="200" width="200"/>

    </>
  )
}

function Fruit()
{
  return <h1>Apple</h1>
}

function sum(a,b,ops){
  if (ops=="+")
  { return a+b}
  else if (ops=="-")
  {
    return a-b
  }
  else{
    return a*b
  }
}

export default App