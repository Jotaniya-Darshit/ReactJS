import React from 'react'

export default function Sec4({data}) {
    console.log(data);
  return (
    <div className='sec4img'>
        {
            data.map((e,i)=>{
                return <div className='padding' key={i}>
                    <img src={e.url} alt="" />
                </div>
                })
        }
    </div>
  )
}
