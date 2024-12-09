import React from 'react'

export default function Sec2({data}) {
    console.log(data)
  return (
    <div className='sec2img'>
        {
            data.map((item, index) => {
                return <span key={index}>
                    <img src={item.url} alt="" />
                </span>
            })
        }
    </div>
  )
}
