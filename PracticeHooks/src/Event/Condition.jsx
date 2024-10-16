import React, { useState } from 'react'

export default function Condition() {
    const [name,setname] = useState(null);

    setTimeout(()=>{
        setname("Darshit Jotaniya");
    },2000)
  return (
    <div>
        <h1>Condition</h1>
        <h3>{name ? name : "Loading........."}</h3>
        {name && <h3>{name}</h3>}
    </div>
  )
}
