import { useState } from "react";
const Pat=()=>{
    let [data , setData]=useState(" ")
    let fun=(event)=>{
        console.log(event)
        console.log(event.value)
        console.log((event.target.value))
        setData(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={fun} />
            <h1>{data}</h1>
        </div>
    )
}
export default Pat