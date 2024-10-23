import React, { useRef, useState } from 'react'

export default function UnControlledComponent() {
    const [data, setdata] = useState([]);
    const nameref = useRef();
    const cityref = useRef();
    const subref = useRef();

    const Handle=(e)=>{
        e.preventDefault();
        const Name = nameref.current.value;
        const City = cityref.current.value;
        const Subject = subref.current.value;
        setdata([...data,Name, City, Subject])
        nameref.current.value="";
        cityref.current.value="";
        subref.current.value="";
    }

  return (
    <>
        <h1>UnControlled Component</h1>
        <form onSubmit={(e)=>{Handle(e)}}>
            <input type="text" ref={nameref} placeholder='Enter your Name' /><br />
            <input type="text" ref={cityref} placeholder='Enter your City' /><br />
            <input type="text" ref={subref}  placeholder='Enter your Subject' /><br /><br />
            <button>Add</button>
        </form>
        {
            data && data.map((e,i)=>{
                return <div key={i}>
                    <p> Name: {e.Name}</p>
                    <p> City: {e.City}</p>
                    <p> Subject: {e.Subject}</p>
                </div>
            })
        }
    </>
  )
}
