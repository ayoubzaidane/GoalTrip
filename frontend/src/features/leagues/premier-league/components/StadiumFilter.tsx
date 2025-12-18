"use client";
import React from "react";

const StadiumFilter = () => {
  return (
    <div className="filters container">
      <div className="bar">
        <div className="field">
          <label>Stadium</label>
          <select>
            <option>All Stadiums</option>
          </select>
        </div>

        <div className="field">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="field">
          <label>Sort</label>
          <select>
            <option>Recommended</option>
          </select>
        </div>

        <div className="field">
          <label>Guests</label>
          <input type="number" placeholder="2" />
        </div>

        <div className="field">
          <label>Stay Type</label>
          <select>
            <option>Any</option>
          </select>
        </div>

        <div className="search-cta">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="helper">Filters adjust match & stay results</div>
    </div>
  );
};

export default StadiumFilter;



