import React from "react";


export default function Controls() 
{
  return (
  <div className="controls">
      <button className="reset-filters">Reset</button>
      <div className="row">
        <input type="file" class="file-input" accept="image/*" hidden/>
        <button class="choose-img">Choose Image</button>
        <button class="save-img">Save Image</button>
      </div>
    </div>
  );
}