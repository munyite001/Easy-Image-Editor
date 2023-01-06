import React from 'react';
import Image from '../components/Image.js';
import Filters from '../components/Filters.js';

export default function Wrapper()
{
  return (
    <div className='wrapper'>
      <Image/>
      <Filters/>
    </div>
  );
}