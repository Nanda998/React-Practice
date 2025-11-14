import React from "react"
function ComponentOne({name,age,exp,role,picture}){
    return(
        <div>
            <img src={picture} alt="" />
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Role:{role}</p>
            <p>Exp:{exp}</p>
        </div>
    )

}
export default ComponentOne