import React from 'react'

export default function Sec3({data}) {
  return (
    <div>
        <h1>Sec3</h1>
        {   
        data  &&
            data.map((e,i)=>{
                return <div key={i}>
                    <h1>{e.name}</h1>
                    <h1>{e.weight}</h1>
                </div>
            })
        }
    </div>
  )
}
