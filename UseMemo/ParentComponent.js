import React, { useMemo, useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [num , setNum] = useState(0);

  const childComponent = useMemo(() => <ChildComponent/>,[]);
  return (
    <div className='container-fluid'>
      <h2>UseMemo hook</h2>
      <p>{num}</p>
      {/* {childComponent} */}
      <ChildComponent/>
      <button className="btn btn-info" onClick={()=>{setNum(num + 1)}}>Addition</button>
    </div>
  )
}

export default ParentComponent 
