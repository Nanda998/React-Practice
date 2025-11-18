import { useState } from 'react'

const Factorial = () => {
    let [n,setN]= useState("")
    let [f,setF]= useState("")
    let fun=()=>{
        setN(event.target.value)
    }
    let fact=()=>{
        let f=1
        const num = parseInt(n)
        for(let i=1;i<=num;i++)
        {
            f=f*i
        }
        setF(f)
        setN(" ")
    }
  return (
    <div>
        <input type="text" onChange={fun} value={n} />
        <button onClick={fact}>cal</button>
        <div>{f}</div>
      
    </div>
  )
}

export default Factorial
