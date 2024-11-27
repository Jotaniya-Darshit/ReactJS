import React from 'react'

export default function Sec7({data}) {
  return (
    <>
    <div className="container">
      <div className="name"><h1>Mouth fresheners</h1></div>
      <div className="name2"><h2>see all</h2></div>
    </div>
<div className='Sec3text'>
        {   
        data  &&
            data.map((e,i)=>{
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
        </div> </>
)
}
