import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, DataBase } from './FireBaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import { doc,setDoc } from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth'
import { provider } from './FireBaseConfig'

export default function SignUp() {

    const [ name,setName ] = useState("")
    const [ age,setAge ] = useState("")
    const [ city,setCity ] = useState("")
    const [ email,setEmail ] = useState("")
    const [ pass,setPass ] = useState("")

    const navigate = useNavigate();

    const HandleSignUp = async () => {
        let user = await createUserWithEmailAndPassword(auth,email,pass)
        .then((data)=>{
          setDoc(doc(DataBase,"Users",data.user.uid),{name,city,age,email})
        })
        navigate("/dashboard");
    };

    const handleGoogleSignIn = async () => {
      await signInWithPopup(auth, provider).then((data)=>{
        console.log(data);
      })
    };


  return (
    <div>
        <h1>Sign Up</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
        <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age' />
        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder='Enter Your City' />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input type="text" onChange={(e)=>setPass(e.target.value)} placeholder='Enter Your Password' />
        <button onClick={HandleSignUp}>Sign Up</button>
        <button><Link to={"/signin"}> Sign In </Link></button>
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </div>
  )
}
