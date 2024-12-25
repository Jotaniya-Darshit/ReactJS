import React from 'react';
import { auth } from '../../FireConfig';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ userData }) {
    const navi = useNavigate();
    const signout = () =>{
        auth.signOut();
        navi("/");
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img 
                    src={userData?.url || "https://via.placeholder.com/50"} 
                    alt="Profile" 
                    className="navbar-profile-img" 
                />
                <span className="navbar-user-name">{userData?.name || "Guest"}  </span> 
            </div>
            <button className='navbar-signout-button' onClick={signout}>Sign out</button>
        </nav>
    );
}
