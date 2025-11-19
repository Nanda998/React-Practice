import { useState } from "react";
import "./collecting.css"; // Import the CSS file

const Clip1 = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    gen: "",
    state: "",
  });
  let [arr, setArr] = useState([]);
  
  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  let add = () => {
    if (
      data.name === "" &&
      data.email === "" &&
      data.gen === "" &&
      data.date === "" &&
      data.state === ""
    ) {
      alert("enter the missing data");
      return;
    }
    setArr([...arr, data]);
    setData({ name: "", email: "", date: "", gen: "", state: "" });
  };
  
  return (
    <div className="app-container">
      <div className="app-wrapper">
        {/* Form Container */}
        <div className="form-container">
          <h1 className="form-title">User Registration Form</h1>
          
          <div className="form-fields">
            {/* Name Input */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={fun}
                placeholder="Enter your name"
                value={data.name}
                className="form-input"
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="text"
                name="email"
                onChange={fun}
                placeholder="Enter your email"
                value={data.email}
                className="form-input"
              />
            </div>

            {/* Gender Radio */}
            <div className="form-group">
              <label className="form-label">Gender</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gen"
                    value="male"
                    onChange={fun}
                    checked={data.gen === "male"}
                    className="radio-input"
                  />
                  <span className="radio-text">Male</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gen"
                    value="female"
                    onChange={fun}
                    checked={data.gen === "female"}
                    className="radio-input"
                  />
                  <span className="radio-text">Female</span>
                </label>
              </div>
            </div>

            {/* Date Input */}
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="date"
                onChange={fun}
                value={data.date}
                className="form-input"
              />
            </div>

            {/* State Select */}
            <div className="form-group">
              <label className="form-label">State</label>
              <select
                name="state"
                onChange={fun}
                value={data.state}
                className="form-select"
              >
                <option value="" disabled>
                  ---Select---
                </option>
                <option value="ap">Andhra Pradesh</option>
                <option value="mp">Madhya Pradesh</option>
                <option value="up">Uttar Pradesh</option>
                <option value="tg">Telangana</option>
              </select>
            </div>

            {/* Submit Button */}
            <button onClick={add} className="submit-btn">
              Submit
            </button>
          </div>
        </div>

        {/* Table Container */}
        {arr.length > 0 && (
          <div className="table-container">
            <div className="table-header">
              <h2 className="table-title">Registered Users ({arr.length})</h2>
            </div>
            <div className="table-wrapper">
              <table className="data-table">
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clip1