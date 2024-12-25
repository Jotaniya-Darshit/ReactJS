import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth,DB } from '../../FireConfig';
import SignIn from './SignIn';
import { provider } from '../../FireConfig';


export default function SignUp() {

    const [ name,setName ] = useState("");
    const [ age,setAge ] = useState("");
    const [ city,setCity ] = useState("");
    const [ email,setEmail ] = useState("");
    const [ password,setPassword ] = useState("");
    const navi = useNavigate();

    const SignUp = async () =>{
        let a = await createUserWithEmailAndPassword(auth,email,password).then((data)=>{
            setDoc(doc(DB,"It's My DB",data.user.uid),{name,age,city,email, url : "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"})
        })
        navi("/Dash",{replace:true});
    }
    const signinbtn = async () =>{
        navi("/signin",{replace:true});
    }


    const signinwithgoogle = async () =>{
        await signInWithPopup(auth,provider).then((data)=>{
            setDoc(doc(DB,"It's My DB",data.user.uid),{name : data.user.displayName,age : "20",city : "Rajkot",email : data.user.email, url : data.user.photoURL })
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
          <button onClick={signinbtn} className="signup-button">
            Sign In
          </button>
          <button className='google-signin-button' onClick={signinwithgoogle}>
            Sign In with Google
          </button>
      </div>
  );
}
