import React from "react";
import "./stafflist.css";

function StaffList({ data }) {
  const noStaff = {
    color: "rgb(119, 4, 4)",
    width: "100%",
    padding: "20px",
    textAlign: "center",
  };

  if (data.length === 0) {
    return (
      <div style={noStaff}>
        <h1>No Staff on Duty Today..</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        {data.map((datum) => {
          const { id, staffId, name, position, image } = datum;

          return (
            <section key={id} className="staff-container">
              <div className="img-container">
                <img src={image} alt="" className="img" />
              </div>
              <div className="staff-details">
                <h2 className="staff-name">{name}</h2>
                <p>
                  <span className="span">Staff ID:</span> {staffId}
                </p>
                <p className="span">{position}</p>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default StaffList;
