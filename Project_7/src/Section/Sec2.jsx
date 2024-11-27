import React from 'react'

export default function Sec2({data}) {
  return (
    <>
        <div className='sec2main'>
        {  
        data &&  
        data.map((e,i)=>{
                return <div key={i}>
                    <img className='img2' src={e.url} alt="" />
                </div>
            })
        }
        </div>
    </>
  )
}
