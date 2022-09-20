import React, { useState } from "react";
import "./App.css";
import StaffList from "./components/StaffList";
import data from "./data";

function App() {
  const [staffData, setStaffData] = useState(data);

  return (
    <div className="App">
      <h1 className="page-title">Staff List</h1>
      <h2 className="staff-on-duty">
        <span className="staff-count">{staffData.length}</span>
        Staff on Duty Today
      </h2>

      <StaffList data={staffData} />

      <button className="clear-list" onClick={() => setStaffData([])}>
        Clear List
      </button>
    </div>
  );
}

export default App;
