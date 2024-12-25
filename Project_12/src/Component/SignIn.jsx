import React from 'react';
import { auth } from '../../FireConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { provider } from '../../FireConfig';
import { signInWithPopup } from 'firebase/auth';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate("");

    const HandleLogIn = async () => {
        await signInWithEmailAndPassword(auth, email, pass).then((data) => {
            navigate("/Dash", { replace: true });
        });
    };

    const loginwithgoogle = async () => {
        await signInWithPopup(auth, provider).then((data) => {
            navigate("/Dash", { replace: true });
        });
    };

    return (
        <div>
            <div className="signin-container">
                <h1>SignIn</h1>
                <input 
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Enter Your Email' 
                />
                <input 
                    type="password" 
                    onChange={(e) => setPass(e.target.value)} 
                    placeholder='Enter Your Password' 
                />
                <button  onClick={HandleLogIn}>Sign In</button>
                <br />
                <button className='signin-button' onClick={loginwithgoogle}>Sign In with Google</button>
            </div>
        </div>
    );
}