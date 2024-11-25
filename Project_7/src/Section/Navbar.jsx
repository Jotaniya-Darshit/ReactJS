import React from 'react'
export default function Navbar({}) {
  return (
    <>
    <div className='nav'>
        <div className='img'> 
        <h1 className='color'>blink<span className='green'>it</span></h1>
        </div>
        <div className='search'> 
            <div className='delivery'>
                <span className='bold'>Delivery in 9 minuties</span>
                <span>Bapa Sitaram,7Q6J+8Q7...  <span><i class="ri-arrow-down-s-fill"></i></span></span> 

            </div>
            <div className='inputbar'>
                <input className='input' type="text" placeholder="Search for products"/>
            </div>
            <div className='login'>Login</div>
            <div className='cart'>
                <button id='btn'><i class="ri-shopping-cart-2-line"></i> My Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}
