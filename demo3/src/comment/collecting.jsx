import { useState } from "react";
const Clip=()=>{
    let [data,setData]=useState({"name":"","email":"","date":"","gen":"","state":""})
    let [arr,setArr]=useState([])
    let fun=(e)=> {
  setData({...data, [e.target.name]: e.target.value})
}
    let add=()=>{
        if (data.name === ''&& data.email===''&& data.gen===''&& data.date ==="" && data.state===''){
            alert('enter the missing data')
            return
        }
        setArr([...arr,data])

        setData({"name":"","email":"","date":"","gen":"","state":""})
    }
    return(
        <div>
            <input type="text" name="name" onChange={fun} placeholder="Enter Name" value={data.name} />
            <input type="text" name="email" onChange={fun} placeholder="Enter E-Mail" value={data.email} />
            <div>
                <input type="radio" name="gen" value="male" onChange={fun} checked={data.gen==="male"} />Male
                <input type="radio" name="gen" value="female" onChange={fun} checked={data.gen==="female"} />Female
            </div>
            <input type="date" name="date" onChange={fun} value={data.date} />
            <select name="state" onChange={fun} value={data.state}>
                <option value="" disabled>---Select---</option>
                <option value="ap">AP</option>
                <option value="mp">MP</option>
                <option value="up">UP</option>
                <option value="tg">TG</option>
            </select>
            <button onClick={add}>Submit</button>

            {arr.length > 0 && (
  <table border={1}>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>E-Mail</th>
        <th>Gender</th>
        <th>Date</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      {arr.map((obj, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.gen}</td>
            <td>{obj.date}</td>
            <td>{obj.state}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)}
        </div>
    )
}
export default Clip