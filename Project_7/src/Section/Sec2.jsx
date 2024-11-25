import React from 'react'

export default function Sec2({data,data2}) {
  return (
    <>
        <div className='sec2main'>
        {  data &&  data.map((e,i)=>{
                return <div key={i}>
                    <img className='img2' src={e.url} alt="" />
                </div>
            })
        }
        </div>
        <div className='Sec3text'>
        {   
        data2  &&
            data2.map((e,i)=>{
                return <div className='sec3show' key={i}><br />
                    <div>
                      <img className='sec3img' src={e.url} alt="" /><br />
                      <div className='timing'><i class="ri-timer-line"></i> 9 MINS</div>
                      <h4 className='title'>{e.name}</h4>
                      <h5 className='weight'>{e.weight}</h5>
                      <div className='multi'>
                        <div className='price'><h5>₹ {e.price}</h5></div>
                        <div className='btn'><button>ADD</button></div>
                      </div>
                    </div>
                </div>
            })
        }
        </div>
    </>
  )
}
