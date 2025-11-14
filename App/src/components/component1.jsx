import React from "react"

function ComponentOne({name,age,role,exp}){
    return(
        <div>
            <p>Name :{name}</p>
            <p>Age :{age}</p>
            <p>Role :{role}</p>
            <p>EXP :{exp}</p>
        </div>
    )

}
export default ComponentOne