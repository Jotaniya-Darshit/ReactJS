import React,{useEffect , useState} from 'react'

export default function Counter() {
    const [Num, setNum] = useState(0);

    useEffect(()=>{
        console.log("useEffect is called");
    })

    const reset = () => {
        setNum(0)
    }

    return (
    <>
        <h1>Counter</h1>
        <h1>{Num}</h1>
        <div className='btn'>
        <button onClick={()=>setNum(Num+1)}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={()=>setNum(Num-1)}>-</button>
        </div>
    </>
    )
}
