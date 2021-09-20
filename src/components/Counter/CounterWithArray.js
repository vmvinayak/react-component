import {useState} from 'react'


const CounterWithArray  = (props)=>{
    console.log('props', props);

    const [count, setCount] = useState([]);

    const addItem = () => {
        setCount([...count, {
            id:count.length,
            value:Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <ul>Items</ul>
            {count.map(i =>  {
               return  <li key={i.id}>{i.value}</li>
})}
            <div>
                <button onClick={addItem}>Add</button>
            </div>
        </div>
    )

}

export default CounterWithArray;