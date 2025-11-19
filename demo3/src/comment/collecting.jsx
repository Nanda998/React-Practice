import { useState } from "react";
import "./Clg.css"; // Import the CSS file

const Clip = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    gen: "",
    country: "",
    state: "",
  });
  let [arr, setArr] = useState([]);

  // Define countries and their states
  const countryStateData = {
    india: [
      { value: "ap", label: "Andhra Pradesh" },
      { value: "mp", label: "Madhya Pradesh" },
      { value: "up", label: "Uttar Pradesh" },
      { value: "tg", label: "Telangana" },
      { value: "mh", label: "Maharashtra" },
      { value: "ka", label: "Karnataka" },
    ],
    usa: [
      { value: "ca", label: "California" },
      { value: "tx", label: "Texas" },
      { value: "ny", label: "New York" },
      { value: "fl", label: "Florida" },
    ],
    uk: [
      { value: "en", label: "England" },
      { value: "sc", label: "Scotland" },
      { value: "wa", label: "Wales" },
      { value: "ni", label: "Northern Ireland" },
    ],
  };

  let fun = (e) => {
    const { name, value } = e.target;
    
    // If country changes, reset state
    if (name === "country") {
      setData({ ...data, country: value, state: "" });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  let add = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.gen === "" ||
      data.date === "" ||
      data.country === "" ||
      data.state === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    setArr([...arr, data]);
    setData({ name: "", email: "", date: "", gen: "", country: "", state: "" });
  };

  // Get states based on selected country
  const getStates = () => {
    return data.country ? countryStateData[data.country] || [] : [];
  };

  // Get state label for display in table
  const getStateLabel = (stateValue) => {
    for (let country in countryStateData) {
      const state = countryStateData[country].find(s => s.value === stateValue);
      if (state) return state.label;
    }
    return stateValue;
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

            {/* Country Select */}
            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                name="country"
                onChange={fun}
                value={data.country}
                className="form-select"
              >
                <option value="" disabled>
                  ---Select Country---
                </option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* State Select - Dependent on Country */}
            <div className="form-group">
              <label className="form-label">State</label>
              <select
                name="state"
                onChange={fun}
                value={data.state}
                className="form-select"
                disabled={!data.country}
              >
                <option value="" disabled>
                  {data.country
                    ? "---Select State---"
                    : "---Select Country First---"}
                </option>
                {getStates().map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
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
                    <th>Country</th>
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
                        <td>{obj.country}</td>
                        <td>{getStateLabel(obj.state)}</td>
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

export default Clip;