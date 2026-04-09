//rafce
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const incre=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={incre}>Click here</button>
    </div>
  )
}

export default Counter