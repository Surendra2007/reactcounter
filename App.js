import React from 'react'
import { useState } from 'react'
import "./style.css";

const App = () => {
    let [count,setNum]=useState(0)
  return (
    <div className='box'>
      <div className="main">
      <h2>Counter</h2>
      <p>{count}</p>
      </div>
      <div className="button">
      <button className='btn-child' id='btn-child1' onClick={()=>{
        count++;
        setNum(count)
      }}>Inc</button>
      <button className='btn-child' id='btn-child2' onClick={()=>{
        count=0;
        setNum(count)
      }}>Reset</button>
      <button className='btn-child' id='btn-child3' onClick={()=>{
        count--;
        setNum(count)
      }}>Dec</button>
      </div>
    </div>
  )
}

export default App
