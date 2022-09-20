import React from "react";
import "./stafflist.css";

function StaffList({ data }) {
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
                <h2>{name}</h2>
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
