 function Myimage(){
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn3HWOxRVDzJuE0KoB7tAMLYZzMab_9142g&s" height="200" width="200"/>
}
export function Listfun(){
 return <>
 <ul>
    <li>Invent new trafic lights</li>
    <li>Reharse a movie scene</li>
    <li>Improve the spectrum technology</li>
 </ul>
 </>
}

export default Myimage

function callfun(){
    alert("Function called")
}

export function Buttonfun(){
    return <button onClick={callfun}>Click me</button>
}