import { useState } from "react";

const Count=()=>{
    let [c,setC]=useState(0)
    return(
        <div>
            <h1>{c}</h1>
            <button onClick={()=>setC(c+1)}>count</button>
        </div>
    )
}
export default Count