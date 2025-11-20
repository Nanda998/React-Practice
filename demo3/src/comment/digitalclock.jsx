import { useState,useEffect } from "react";

const Digital=()=>{
    let [time,setTime]=useState(new Date())
    let updatetime=()=>{
        setTime(new Date())
    }
    useEffect(()=>{
        setInterval(updatetime,1000)
    },[])
    return(
        <div>
            {time.toLocaleTimeString()}
        </div>
    )
}
export default Digital