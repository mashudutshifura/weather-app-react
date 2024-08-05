import React from "react";
import "./weather.css";

export default function Search() {
  return (
    <form className="Search mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-form-input"
            id="search-input"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="search-form-button" />
        </div>
      </div>
    </form>
  );
}
