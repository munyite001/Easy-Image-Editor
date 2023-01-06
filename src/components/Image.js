import React from "react";
import image from '../images/image-placeholder.svg';

export default function Image()
{
  return (
    <div className="preview-img">
      <img src = {image} alt = 'preview'/>
    </div>
  );
}