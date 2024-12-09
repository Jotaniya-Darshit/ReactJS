import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div className='navsec1'><img src="logo-myntra-41466.png" alt="" /></div>
            <div className='navsec2'>
                <nav>
                    <a href="">men</a>
                    <a href="">women</a>
                    <a href="">kids</a>
                    <a href="">home & living</a>
                    <a href="">beaty</a>
                    <a href="">studio <sup> new</sup> </a>
                </nav>
            </div>
            <div className='navsec3'>
                <input type="search" placeholder='Search for products, brands and more' />
            </div>
            <div className='navsec4'>
                <i class="ri-user-3-line">  <span>Profile</span> </i>
                <i class="ri-heart-line">  <span>Profile</span> </i>    
                <i class="ri-shopping-bag-line">  <span>Profile</span> </i>
            </div>
        </div>
        <div className='fixbox'>
        <i class="ri-arrow-left-s-fill"></i>
        <div className='varticle'>
            <span>FLAT ₹500 OFF</span>
        </div>
        </div>
    </div>
  )
}
