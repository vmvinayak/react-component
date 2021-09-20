import { useState, useEffect } from "react"

const Home = ()=>{

    const [uname, setName] = useState('');
    const [pass, setPass] = useState('');

    
    
    return (
        <div>
            <h2>User Details: {uname} && {pass}</h2>
            <div>
                <label>userName:</label>
                <input type="text" value={uname}  onChange={e=>setName(e.target.value)}/>            
           </div>

           <div>
               <label>password:</label>
               <input type="text" value={pass}  onChange={e => setPass(e.target.value)}/>
           </div>

           <button onClick={()=>console.log('implement logic on click!')}>Submit</button>
        </div>
    )
} 

export default Home;

