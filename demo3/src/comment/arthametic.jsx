import { useState } from "react";

function Arthametic(){
    let [a,setA]= useState("")
    let [b,setB]= useState("")
    let [n,setN]=useState([])
    let add =()=>{
        const result = parseFloat(a) + parseFloat(b)
        setN([...n,result])
        setA("")
        setB("")
    }
    let sub =()=>{
        const result = parseFloat(a) - parseFloat(b)
        setN([...n,result])
        setA("")
        setB("")
    }
    let mul =()=>{
        const result = parseFloat(a) * parseFloat(b)
        setN([...n,result])
        setA("")
        setB("")
    }


    return(
        <div>
            <input type="text" placeholder="enter number" onChange={(event)=>setA(event.target.value)} value={a} />
            <input type="text" placeholder="enter number" onChange={(event)=>setB(event.target.value)} value={b} />
            <button onClick={add}>Add</button>
            <button onClick={sub}>Sub</button>
            <button onClick={mul}>mul</button>
            <div>{n.map((str, index)=><p key={index}>{str}</p>)}</div>
        </div>
    )

}
export default Arthametic