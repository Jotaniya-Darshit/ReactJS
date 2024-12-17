import React, { useState } from 'react'
import { auth } from './FireBaseConfig'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn() {

    const [ email,setEmail ] = useState("")
    const [ pass,setPass ] = useState("")
    const navigate = useNavigate("")

    const HandleLogIn = async() =>{
        await signInWithEmailAndPassword(auth,email,pass).then((data)=>{
            navigate("/dashboard",{replace:true})
        })
    }


  return (
    <div>
        <h1>SignIn</h1>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input type="text" onChange={(e)=>setPass(e.target.value)} placeholder='Enter Your Password' />
        <button onClick={HandleLogIn}>Sign In</button>
    </div>
  )
}
