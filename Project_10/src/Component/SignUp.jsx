import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth,DB } from '../../FireConfig';
import SignIn from './SignIn';

export default function SignUp() {

    const [ name,setName ] = useState("");
    const [ age,setAge ] = useState("");
    const [ city,setCity ] = useState("");
    const [ email,setEmail ] = useState("");
    const [ password,setPassword ] = useState("");
    const navi = useNavigate();

    const SignUp = async () =>{
        let a = await createUserWithEmailAndPassword(auth,email,password).then((data)=>{
            setDoc(doc(DB,"It's My DB",data.user.uid),{name,age,city,email})
        })
        navi("/Dash",{replace:true});
    }

    return (
      <div className="signup-container">
          <h1 className="signup-title">Sign Up</h1>
          <input 
              type="text" 
              className="signup-input" 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Enter Your Name' 
          />
          <input 
              type="text" 
              className="signup-input" 
              onChange={(e) => setAge(e.target.value)} 
              placeholder='Enter Your Age' 
          />
          <input 
              type="text" 
              className="signup-input" 
              onChange={(e) => setCity(e.target.value)} 
              placeholder='Enter Your City' 
          />
          <input 
              type="text" 
              className="signup-input" 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Enter Your Email' 
          />
          <input 
              type="password" 
              className="signup-input" 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter Your Password' 
          />
          <button className="signup-button" onClick={SignUp}>Sign Up</button>
          <button className="link-button">
              <Link to={"/signin"}>Sign In</Link>
          </button>
      </div>
  );
}
