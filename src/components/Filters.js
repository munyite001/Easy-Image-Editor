import React from "react";

export default function Filters()
{
  return (
    <div className="filters">
      <div className="edit-panel">
        <h2>Filters</h2>
        <div className="options">
          <button className="active">Brightness</button>
          <button>Saturation</button>
          <button>Inversion</button>
          <button>grayscale</button>
        </div>
        <div className="filter-info">
          <p className="name">Brightness</p>
          <p className="value">100%</p>
        </div>
        <div className="slider">
          <input type ="range" value="100" min="0" max="200"/>
        </div>
        <div className="rotate">
          <h2>Rotate & Flip</h2>
          <div className="options">
            <button id="left"><i class="fa-solid fa-rotate-left"></i></button>
            <button id="right"><i class="fa-solid fa-rotate-right"></i></button>
            <button id="horizontal"><i class='bx bx-reflect-vertical'></i></button>
            <button id="vertical"><i class='bx bx-reflect-horizontal' ></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}