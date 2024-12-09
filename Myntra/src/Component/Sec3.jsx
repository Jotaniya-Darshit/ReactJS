import React from 'react'

export default function Sec3({data}) 
{
    console.log(data);
    
  return (
    <div>
        <br />
        <img className='sec1img' src="3 (1).jpg" alt="" />
        <br />
        <div className="sec2img">
        {
            data.map((e,i)=>{
                return <span key={i}>
                    <img src={e.url} alt="" />
                </span>
            })
        }
        </div>
        <br />
            <img className='sec1img' src="4.jpg" alt="" />
        <br />
    </div>
  )
}
