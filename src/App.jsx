import React from 'react';
import { Button } from 'antd';
import { Pagination } from 'antd';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
      </div>
        <div className="App">
    <Button type="primary">Button</Button>
  </div>

<div>



<Pagination defaultCurrent={1} total={50} />


</div>

<div>
  
</div>
    
    </>
  )
}

export default App
