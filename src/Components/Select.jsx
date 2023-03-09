import React, { useState } from "react";
import "./Styles/select.css";
const Select = ({ filter, handleSelectChange, fetchData }) => {
  return (
    <div className="select-container">
      <span className="text">Filters: </span>
      <select
        value={filter}
        onChange={(e) => handleSelectChange(e.target.value)}
        className="select"
        placeholder="hola"
      >
        <option className="select-item" value="">
          No filters
        </option>
        <option className="select-item" value="gender=male">
          Male
        </option>
        <option className="select-item" value="gender=female">
          Female
        </option>
      </select>
      <button className="select-button" onClick={fetchData}>
        Search
      </button>
    </div>
  );
};

export default Select;
