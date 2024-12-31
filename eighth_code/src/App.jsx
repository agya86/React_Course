import { useState } from "react"
import Select from "react-select"
import { useRef } from "react"

function App(){

  const [name,SetName] = useState("")
  const [movie,setMovie] = useState([])
  const [isselect,setIsselect] = useState(true)
  const [usercity,setUsercity] = useState({})
  const cityRef = useRef(null)
  const [city,setCity] = useState([])
  const [otherdetail,setOtherdetail] = useState({
    city:[],
    age:undefined,
    classval:undefined
  })
  const options = [
    {value : "Marvels",label:"Marvel"},
    {value : "Cross",label:"Cross"},
    {value : "DC",label:"DC"},
    {value : "Mission Impossible",label:"Mission Impossible"}
  

  ]

  function handleselected(movie){
    setMovie(movie)
    console.warn(movie)
  }

  function formhandler(e){
    setCity([...city,cityRef.current.value])
   setOtherdetail({...otherdetail,city:city})
    e.preventDefault()
   
    console.warn("--Name--",name,"-----Movie-----",movie,"---Otherdetail-----",otherdetail)
  }

  function handleDetail(){
  //  city.push(cityRef.current.value)
   setCity([...city,cityRef.current.value])
   setOtherdetail({...otherdetail,city:city})
   cityRef.current.value = ""
   cityRef.current.focus()
    // console.warn(otherdetail)
  }

  return<>
  <form onSubmit={formhandler}>
    Enter Name <input type="Text" value={name} onChange={(e)=>SetName(e.target.value) } /><br/><br/>
    Enter Movie <Select options={options} value={movie} onChange={handleselected} isMulti={true}/><br/><br/>
    {/* Enter users cities <input type="text" ref={cityRef} /><button onClick={handleDetail}>Add more city</button><br/><br/> */}
    Enter users cities <input type="text" ref={cityRef} /><button onClick={handleDetail}>Add more city</button><br/><br/>
    Enter users age <input type="text" onChange={(e)=>setOtherdetail({...otherdetail,age:e.target.value})}/>
    Enter users class  <input type="text" onChange={(e)=>setOtherdetail({...otherdetail,classval:e.target.value})} />

    
    

  <button type="submit">Submit</button>
  </form>
  </>
}

export default App