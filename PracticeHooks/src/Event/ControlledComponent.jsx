import React, { useState } from 'react'

export default function ControlledComponent() {
  const [name,setName]=useState("");
  const [sub,setSub]=useState("");
  const [city,setCity]=useState("");


  const [data, setData]=useState([]);

  const submit = (e) => {

    e.preventDefault();
    let obj = {name,sub,city}
    setData([...data,obj])
    setName("")
    setSub("")
    setCity("")

  }

  return (
    <div>
        <h1>Controlled Component</h1>
        <form onSubmit={(e)=>{submit(e)}}>
          <input type="text" value={name} placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} /> <br />
          <input type="text" value={sub} placeholder='Enter Your Subject' onChange={(e)=>setSub(e.target.value)} /> <br />
          <input type="text" value={city} placeholder='Enter Your City' onChange={(e)=>setCity(e.target.value)} /> <br /><br />
          <button type='submit'> ADD</button>
        </form>
        <table border='1' >

        </table>
    </div>
  )
}
