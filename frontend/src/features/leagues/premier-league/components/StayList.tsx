
"use client";
import React from "react";

interface Stay {
  id: number;
  name: string;
  location: string;
  price: string;
}

interface StayListProps {
  stays: Stay[];
}

const StayList = ({ stays }: StayListProps) => {
  return (
    <section className="section container">
      <div className="title-row">
        <h2>Available Stays</h2>
      </div>

      <div className="grid">
        {stays.map((stay) => (
          <div key={stay.id} className="card">
            <div className="media">Image</div>

            <div className="pad">
              <div className="row">
                <h3>{stay.name}</h3>
                <span className="sub">{stay.price}</span>
              </div>

              <div className="sub">{stay.location}</div>

              <div className="actions">
                <button className="btn btn-stay">View</button>
                <button className="btn btn-bundle">Bundle</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="disclaimer">
        Prices and availability may vary depending on match dates.
      </p>
    </section>
  );
};

export default StayList;

