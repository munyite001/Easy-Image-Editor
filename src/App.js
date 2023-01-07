import React from 'react';
import Wrapper from './components/Wrapper.js';
import Controls from './components/Controls.js';

export default function App() {
  return (
    <div className='container'>
      <h1>Easy Image Editor</h1>
      <Wrapper />
      <Controls />
    </div>
  );
}