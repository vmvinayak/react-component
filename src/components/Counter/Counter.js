import React, {useState} from 'react'

const Counter = ()=>{
    const initialValue = 0;
    const [countObj, setCount] = useState({count:initialValue});
    return (
        <div>
            <div>Counter value:{ countObj.count}</div>
            <button onClick={()=>setCount(pre => ({...pre, count : pre.count + 1}))}>Increment</button>
        </div>
    )
}

export default Counter;