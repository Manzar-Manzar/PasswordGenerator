import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("pink")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
       <button className='bg-red-400 mx-2' onClick={() => setColor("red")}>Red</button>
       <button className='bg-yellow-400 mx -2' onClick={() => setColor("yellow")}>Yellow</button>
       <button className='bg-green-400 mx-2' onClick={() => setColor("green")}>Green</button>
       <button className='bg-blue-400' onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default App;
